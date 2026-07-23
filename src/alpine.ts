import * as THREE from 'three';

export interface AlpineMountainOptions {
  width: number;
  height: number;
  depth?: number;
  rock: number;
  rockLight?: number;
  snow?: number;
  snowHeightRatio?: number;
  castShadow?: boolean;
}

function facetedMaterial(color: number): THREE.MeshLambertMaterial {
  return new THREE.MeshLambertMaterial({ color, flatShading: true });
}

// A reusable low-poly alpine mountain for the title and world map. Broad
// pentagonal rock cones, offset shoulder ridges and angular snowcaps create
// clear triangular faces without introducing smooth or realistic geometry.
export function makeAlpineMountain(options: AlpineMountainOptions): THREE.Group {
  const {
    width, height, depth = width * 0.58, rock,
    rockLight = new THREE.Color(rock).offsetHSL(0, -0.02, 0.09).getHex(),
    snow = 0xfffdf7, snowHeightRatio = 0.375, castShadow = false,
  } = options;
  const group = new THREE.Group();

  // A broad, low skirt anchors every peak to its terrain and overlaps the
  // neighbouring skirts when mountains are arranged as a range.
  const skirtHeight = height * 0.3;
  const skirtGeometry = new THREE.ConeGeometry(width * 0.64, skirtHeight, 6, 1, false);
  const skirt = new THREE.Mesh(skirtGeometry, facetedMaterial(rockLight));
  skirt.scale.z = depth / width * 1.12;
  skirt.position.y = skirtHeight / 2;
  skirt.rotation.y = Math.PI / 6;
  skirt.castShadow = castShadow;
  skirt.receiveShadow = true;
  group.add(skirt);

  const mainGeometry = new THREE.ConeGeometry(width / 2, height, 6, 1, false);
  const main = new THREE.Mesh(mainGeometry, facetedMaterial(rock));
  main.scale.z = depth / width;
  main.position.y = height / 2;
  main.rotation.y = Math.PI / 6;
  main.castShadow = castShadow;
  main.receiveShadow = true;
  group.add(main);

  // A lower side ridge breaks the perfect cone silhouette and gives the range
  // overlapping alpine faces like a paper-cut storybook illustration.
  const ridgeGeometry = new THREE.ConeGeometry(width * 0.28, height * 0.68, 5, 1, false);
  const ridge = new THREE.Mesh(ridgeGeometry, facetedMaterial(rockLight));
  ridge.scale.z = depth / width * 1.08;
  ridge.position.set(-width * 0.27, height * 0.34, depth * 0.06);
  ridge.rotation.y = -Math.PI / 10;
  ridge.castShadow = castShadow;
  ridge.receiveShadow = true;
  group.add(ridge);

  // The cap follows the same faceted silhouette instead of sitting as a box.
  const capHeight = height * snowHeightRatio;
  // Let the snow edge overhang the rock by only four percent at the snowline:
  // enough to remain visible, but too little to read as a floating white cap.
  const capRadius = width * snowHeightRatio * 0.52;
  const capGeometry = new THREE.ConeGeometry(capRadius, capHeight, 6, 1, false);
  const cap = new THREE.Mesh(capGeometry, facetedMaterial(snow));
  cap.scale.z = depth / width;
  cap.position.y = height - capHeight / 2 + 0.02;
  cap.rotation.y = Math.PI / 6;
  cap.castShadow = castShadow;
  group.add(cap);

  return group;
}
