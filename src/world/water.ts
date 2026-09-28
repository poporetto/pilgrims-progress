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

const foamMaterial = new THREE.MeshStandardMaterial({
  color: 0xf4fbf6, roughness: 0.6, transparent: true, opacity: 0.55, depthWrite: false,
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

/** A rippled water material in any tint/opacity (e.g. river depth bands). */
export function makeWaterMaterial(color: number, opacity = 0.86, roughness = 0.2): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({
    color, roughness, metalness: 0.04, transparent: opacity < 1, opacity, depthWrite: opacity >= 1,
  });
  addRipples(m, 0.8, 0.14);
  return m;
}

/**
 * A flowing river running along world Z between x0 and x1: a smooth depth
 * gradient (pale shallows → deep channel), long streaks that stream
 * downstream, lapping foam at both banks, rippled lighting, and an optional
 * soft glittering path of light across the water at `glowZ`.
 */
export function createRiverMaterial(o: {
  x0: number; x1: number;
  shallow?: number; deep?: number;
  flow?: number; glowZ?: number; glowColor?: number;
}): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.22, metalness: 0.04 });
  const shallow = new THREE.Color(o.shallow ?? 0x8fd0e6);
  const deep = new THREE.Color(o.deep ?? 0x3f5fa8);
  const glow = new THREE.Color(o.glowColor ?? 0xfff0c2);
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uWindTime = windUniforms.uWindTime;
    shader.uniforms.uRiver = { value: new THREE.Vector2(o.x0, o.x1) };
    shader.uniforms.uShallow = { value: shallow };
    shader.uniforms.uDeep = { value: deep };
    shader.uniforms.uGlow = { value: glow };
    shader.uniforms.uFlow = { value: o.flow ?? 0.55 };
    shader.uniforms.uGlowZ = { value: o.glowZ ?? 1e5 };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vRiverPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvRiverPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uWindTime; uniform vec2 uRiver; uniform vec3 uShallow; uniform vec3 uDeep;
        uniform vec3 uGlow; uniform float uFlow; uniform float uGlowZ;
        varying vec3 vRiverPos;
        float rHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float rNoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(rHash(i), rHash(i + vec2(1.0, 0.0)), f.x), mix(rHash(i + vec2(0.0, 1.0)), rHash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float rFbm(vec2 p) { return rNoise(p) * 0.55 + rNoise(p * 2.03 + 7.1) * 0.3 + rNoise(p * 4.1 + 3.3) * 0.15; }
        float riverEdge() {
          float u = clamp((vRiverPos.x - uRiver.x) / (uRiver.y - uRiver.x), 0.0, 1.0);
          return min(u, 1.0 - u);
        }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          float t = uWindTime;
          vec2 p = vRiverPos.xz;
          float edge = riverEdge() + (rFbm(p * 0.12) - 0.5) * 0.08;
          float depth = smoothstep(0.02, 0.42, edge);
          vec3 water = mix(uShallow, uDeep, depth);
          // long streaks carried downstream (+z), faster in the deep channel
          float speed = uFlow * (0.55 + depth * 0.9);
          float s1 = rFbm(vec2(p.x * 1.1, p.y * 0.16 - t * speed));
          float s2 = rFbm(vec2(p.x * 2.3 + 5.0, p.y * 0.32 - t * speed * 1.6));
          float streak = smoothstep(0.66, 0.82, s1) * 0.5 + smoothstep(0.72, 0.86, s2) * 0.3;
          water = mix(water, vec3(0.88, 0.96, 1.0), streak * (0.22 + depth * 0.18));
          // lapping foam along both banks
          float lap = rNoise(vec2(p.y * 1.4 - t * 0.9, p.x * 0.6)) * 0.05 + sin(t * 1.3 + p.y * 0.8) * 0.012;
          float foam = smoothstep(0.075 + lap, 0.02 + lap, riverEdge());
          water = mix(water, vec3(0.96, 0.99, 1.0), foam * 0.85);
          // soft glittering path of light across the water
          float band = exp(-pow((vRiverPos.z - uGlowZ) / 1.6, 2.0));
          float glitter = smoothstep(0.86, 0.98, rNoise(vec2(p.x * 3.2 + t * 0.4, p.y * 1.6 - t * 0.9)));
          water = mix(water, uGlow, band * 0.26);
          water += vec3(1.0, 0.96, 0.82) * band * glitter * 0.25;
          diffuseColor.rgb = water;
        }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
        {
          vec2 q = vRiverPos.xz;
          float t = uWindTime * uFlow;
          vec2 w = vec2(
            sin(q.x * 1.9 + q.y * 0.4 + t * 1.2) * 0.5 + (rNoise(vec2(q.x * 1.3, q.y * 0.5 - t * 2.0)) - 0.5),
            cos(q.y * 1.1 - t * 2.4) * 0.6 + (rNoise(vec2(q.x * 0.9 + 3.0, q.y * 0.7 - t * 2.6)) - 0.5)
          );
          normal = normalize(normal + (viewMatrix * vec4(w.x, 0.0, w.y, 0.0)).xyz * 0.22);
        }`);
  };
  m.customProgramCacheKey = () => `river-${o.x0}-${o.x1}`;
  return m;
}
