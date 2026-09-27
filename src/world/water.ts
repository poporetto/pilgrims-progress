import * as THREE from 'three';
import { rng } from './voxels';
import { windUniforms } from './voxels';
import { createRock } from './props';

// Stylised water: a soft aqua surface whose normals are gently rippled in the
// shader, so the key light draws moving glints across it for free. Ponds get
// a pale foam ring and a few rim stones.

function addRipples(m: THREE.MeshStandardMaterial, scale: number, strength: number): void {
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = windUniforms.uWindTime;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWaterPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWaterPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uWindTime;\nvarying vec3 vWaterPos;')
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        {
          vec2 p = vWaterPos.xz * ${scale.toFixed(3)};
          float t = uWindTime;
          vec2 w = vec2(
            sin(p.x * 1.7 + t * 1.1) + sin(p.y * 2.3 - t * 0.8) * 0.6 + sin((p.x + p.y) * 3.1 + t * 1.6) * 0.3,
            cos(p.y * 1.9 + t * 0.9) + cos(p.x * 2.1 + t * 1.3) * 0.6 + cos((p.x - p.y) * 2.7 - t * 1.4) * 0.3
          );
          vec3 bump = (viewMatrix * vec4(w.x, 0.0, w.y, 0.0)).xyz;
          normal = normalize(normal + bump * ${strength.toFixed(3)});
        }`,
      );
  };
  m.customProgramCacheKey = () => `ripples${scale}-${strength}`;
}

export const waterMaterial = new THREE.MeshStandardMaterial({
  color: 0x8fd3d6, roughness: 0.18, metalness: 0.05,
  transparent: true, opacity: 0.86, depthWrite: false,
});
addRipples(waterMaterial, 0.9, 0.16);

/** Muddier water for marshes (Slough) — same ripples, murkier and opaque. */
export const marshWaterMaterial = new THREE.MeshStandardMaterial({
  color: 0x9aa68c, roughness: 0.35, metalness: 0.02,
});
addRipples(marshWaterMaterial, 0.7, 0.1);

export function createWaterPlane(w: number, d: number, material: THREE.Material = waterMaterial): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d, 1, 1), material);
  m.rotation.x = -Math.PI / 2;
  m.receiveShadow = true;
  m.renderOrder = 2;
  return m;
}

const foamMaterial = new THREE.MeshBasicMaterial({
  color: 0xf4fbf6, transparent: true, opacity: 0.55, depthWrite: false, toneMapped: false,
});

/** An irregular rounded pond with a soft foam edge and scattered rim stones. */
export function createPond(o: { seed?: number; radius?: number; stones?: boolean } = {}): THREE.Group {
  const r = rng(o.seed ?? 5);
  const R = o.radius ?? 2.4;
  const seg = 28;
  const radii: number[] = [];
  for (let i = 0; i < seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    radii.push(R * (0.86 + Math.sin(a * 2 + r() * 6) * 0.08 + r() * 0.08));
  }
  const shape = new THREE.Shape();
  radii.forEach((rad, i) => {
    const a = (i / seg) * Math.PI * 2;
    const x = Math.cos(a) * rad; const y = Math.sin(a) * rad;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  });
  shape.closePath();
  const g = new THREE.Group();
  // earthy bank, then water just above it
  const bank = new THREE.Mesh(
    new THREE.ShapeGeometry(shape, 1).scale(1.18, 1.18, 1),
    new THREE.MeshStandardMaterial({ color: 0xcdb58e, roughness: 1 }),
  );
  bank.rotation.x = -Math.PI / 2;
  bank.position.y = 0.02;
  bank.receiveShadow = true;
  g.add(bank);
  const water = new THREE.Mesh(new THREE.ShapeGeometry(shape, 1), waterMaterial);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.06;
  water.renderOrder = 2;
  g.add(water);
  // foam ring hugging the shore
  const ring = new THREE.Shape();
  radii.forEach((rad, i) => {
    const a = (i / seg) * Math.PI * 2;
    const x = Math.cos(a) * rad * 1.02; const y = Math.sin(a) * rad * 1.02;
    if (i === 0) ring.moveTo(x, y); else ring.lineTo(x, y);
  });
  const hole = new THREE.Path();
  radii.forEach((rad, i) => {
    const a = (i / seg) * Math.PI * 2;
    const x = Math.cos(a) * rad * 0.9; const y = Math.sin(a) * rad * 0.9;
    if (i === 0) hole.moveTo(x, y); else hole.lineTo(x, y);
  });
  ring.holes.push(hole);
  const foam = new THREE.Mesh(new THREE.ShapeGeometry(ring, 1), foamMaterial);
  foam.rotation.x = -Math.PI / 2;
  foam.position.y = 0.075;
  foam.renderOrder = 3;
  g.add(foam);
  g.userData.foam = foam;
  if (o.stones ?? true) {
    const n = 5 + Math.floor(r() * 4);
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2;
      const rock = createRock({ seed: Math.floor(r() * 1e6), size: 0.25 + r() * 0.35, moss: r() > 0.5 });
      rock.position.x = Math.cos(a) * R * 1.12;
      rock.position.z = Math.sin(a) * R * 1.12;
      g.add(rock);
    }
  }
  return g;
}
