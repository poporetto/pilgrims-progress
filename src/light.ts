import * as THREE from 'three';

// The canonical "shining light" beacon that ends every chapter — a tall golden
// box beam topped with a floating star, exactly as first seen in Chapter I (the
// City of Destruction). Kept in one place so every chapter's end-light matches.
//
// Returns a group anchored at ground level (y = 0). Position it at the chapter's
// exit x with `light.position.set(x, 0, 0)`. Call animateShiningLight() each
// frame for the gentle twinkle.

export interface ShiningLight {
  group: THREE.Group;
  star: THREE.Mesh;
  starGlow: THREE.Mesh;
}

export function makeShiningLight(): ShiningLight {
  const group = new THREE.Group();

  // fog:false throughout so the light shines clean through any distance haze
  const beam = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 40, 2.6),
    new THREE.MeshBasicMaterial({ color: 0xffd94a, transparent: true, opacity: 0.8, fog: false }),
  );
  beam.position.y = 20;
  group.add(beam);

  const beamInner = new THREE.Mesh(
    new THREE.BoxGeometry(1.3, 44, 1.3),
    new THREE.MeshBasicMaterial({ color: 0xfffbe0, transparent: true, opacity: 0.95, fog: false }),
  );
  beamInner.position.y = 22;
  group.add(beamInner);

  const star = new THREE.Mesh(
    new THREE.BoxGeometry(3.4, 3.4, 3.4),
    new THREE.MeshBasicMaterial({ color: 0xffe87a, fog: false }),
  );
  star.position.y = 42;
  star.rotation.set(Math.PI / 4, 0, Math.PI / 4);
  group.add(star);

  const starGlow = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xfff3b8, transparent: true, opacity: 0.5, fog: false }),
  );
  starGlow.position.y = 42;
  starGlow.rotation.set(0, Math.PI / 4, Math.PI / 4);
  group.add(starGlow);

  const glow = new THREE.PointLight(0xffe87a, 3.5, 40);
  glow.position.y = 4;
  group.add(glow);

  return { group, star, starGlow };
}

// gentle twinkle: the star slowly turns and the outer glow breathes
export function animateShiningLight(l: ShiningLight, t: number): void {
  l.star.rotation.y = t * 0.6;
  const s = 1 + Math.sin(t * 2.2) * 0.12;
  l.starGlow.scale.setScalar(s);
}
