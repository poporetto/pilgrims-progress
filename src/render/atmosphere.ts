import * as THREE from 'three';

// Global look-development layer applied to whichever scene is being drawn:
// renderer colour pipeline, a fog-matched gradient sky dome with a sun glow,
// a crisp sun-shadow frustum that follows the camera, and fog distances that
// stay correct when the camera lens changes. Scenes keep full authority over
// their mood: they may keep mutating `scene.background`, `scene.fog` and their
// sun light every frame and this layer simply follows along.

export function configureRenderer(r: THREE.WebGLRenderer, exposure = 1.08): void {
  r.outputColorSpace = THREE.SRGBColorSpace;
  // Khronos PBR Neutral keeps hand-picked pastels on-hue (ACES shifts and
  // desaturates them) while still rolling bright highlights off gently.
  r.toneMapping = THREE.NeutralToneMapping;
  r.toneMappingExposure = exposure;
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.PCFSoftShadowMap;
}

// ---------------------------------------------------------------- sky dome

const SKY_VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // pin to the far plane
  }
`;
const SKY_FRAG = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uBottom;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = h > 0.0
      ? mix(uHorizon, uTop, pow(smoothstep(0.0, 1.0, h), 0.75))
      : mix(uHorizon, uBottom, smoothstep(0.0, 0.18, -h));
    float s = max(dot(d, uSunDir), 0.0);
    col += uSunColor * (pow(s, 90.0) * 0.55 + pow(s, 6.0) * 0.12) * step(0.0, h + 0.05);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function makeSkyDome(): THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial> {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uBottom: { value: new THREE.Color() },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color(0xfff2d0) },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(200, 32, 16), m);
  dome.frustumCulled = false;
  dome.renderOrder = -1000;
  dome.name = '__skyDome';
  return dome;
}

// ---------------------------------------------------------------- per scene

interface SceneAtmosphere {
  dome: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  fill: THREE.AmbientLight;
  sun: THREE.DirectionalLight | null;
  sunOffset: THREE.Vector3;       // scene-intended light direction * distance
  sunTargetBase: THREE.Vector3;   // scene-intended target
  lastSunPos: THREE.Vector3;
  fogBaseNear: number;
  fogBaseFar: number;
  lastFogNear: number;
  lastFogFar: number;
}

const WHITE = new THREE.Color(1, 1, 1);
const tmpHsl = { h: 0, s: 0, l: 0 };

export interface AtmosphereOptions {
  /** Extra camera distance vs. the lens the scenes' fog was tuned for. */
  fogShift: number;
  /** Half-size of the camera-following sun shadow frustum (world units). */
  shadowHalf: number;
}

export class Atmosphere {
  private readonly scenes = new WeakMap<THREE.Scene, SceneAtmosphere>();
  private readonly right = new THREE.Vector3();
  private readonly up = new THREE.Vector3();
  private readonly fwd = new THREE.Vector3();
  private readonly snapped = new THREE.Vector3();

  constructor(private readonly opts: AtmosphereOptions) {}

  private install(scene: THREE.Scene): SceneAtmosphere {
    const dome = makeSkyDome();
    scene.add(dome);
    // A soft, warm ambient floor: shadows stay readable and never go black,
    // even in the darker moods (dusk palace, night valley, dungeon).
    const fill = new THREE.AmbientLight(0xffe8d6, 0.22);
    fill.name = '__warmFill';
    scene.add(fill);
    // Glows (beacons, halos, lenses, fire, gate light…) are unlit basic
    // materials: keep them out of tone mapping so they stay luminous.
    scene.traverse((o) => {
      const m = (o as THREE.Mesh).material as THREE.Material | THREE.Material[] | undefined;
      if (!m) return;
      for (const mm of Array.isArray(m) ? m : [m]) {
        if ((mm as THREE.MeshBasicMaterial).isMeshBasicMaterial && mm.name !== '__keepToneMapped') {
          mm.toneMapped = false;
        }
      }
    });
    let sun: THREE.DirectionalLight | null = null;
    scene.traverse((o) => {
      if (!sun && (o as THREE.DirectionalLight).isDirectionalLight && (o as THREE.DirectionalLight).castShadow) {
        sun = o as THREE.DirectionalLight;
      }
    });
    const sunLight = sun as THREE.DirectionalLight | null;
    const targetBase = sunLight ? sunLight.target.position.clone() : new THREE.Vector3();
    const offset = sunLight ? sunLight.position.clone().sub(targetBase) : new THREE.Vector3(0, 1, 0);
    if (sunLight) {
      const sh = sunLight.shadow;
      const half = this.opts.shadowHalf;
      sh.mapSize.set(2048, 2048);
      sh.camera.left = -half;
      sh.camera.right = half;
      sh.camera.top = half;
      sh.camera.bottom = -half;
      sh.camera.near = 1;
      sh.camera.far = 180;
      sh.bias = -0.00035;
      sh.normalBias = 0.035;
      sh.camera.updateProjectionMatrix();
      sh.map?.dispose();
      sh.map = null;
      if (!sunLight.target.parent) scene.add(sunLight.target);
    }
    const fog = scene.fog as THREE.Fog | null;
    const st: SceneAtmosphere = {
      dome,
      fill,
      sun: sunLight,
      sunOffset: offset,
      sunTargetBase: targetBase,
      lastSunPos: new THREE.Vector3(NaN, NaN, NaN),
      fogBaseNear: fog && 'near' in fog ? fog.near : 0,
      fogBaseFar: fog && 'far' in fog ? fog.far : 0,
      lastFogNear: NaN,
      lastFogFar: NaN,
    };
    this.scenes.set(scene, st);
    return st;
  }

  /** Call once per frame, right before rendering `scene` from `camera`. */
  update(scene: THREE.Scene, camera: THREE.Camera, focus: THREE.Vector3, fogShift = this.opts.fogShift): void {
    const st = this.scenes.get(scene) ?? this.install(scene);

    // ---- sky: gradient derived from whatever horizon colour the scene wants
    const bg = scene.background instanceof THREE.Color ? scene.background : null;
    const u = st.dome.material.uniforms;
    if (bg) {
      (u.uBottom.value as THREE.Color).copy(bg);
      (u.uHorizon.value as THREE.Color).copy(bg).lerp(WHITE, 0.12);
      const top = u.uTop.value as THREE.Color;
      top.copy(bg).getHSL(tmpHsl);
      top.setHSL(
        tmpHsl.h,
        Math.min(1, tmpHsl.s + 0.1),
        Math.max(0, tmpHsl.l - (tmpHsl.l > 0.2 ? 0.12 : 0.04)),
      );
    }
    st.dome.position.copy(camera.position);
    // the warm floor fades out for night, dusk-dark and dungeon moods so
    // darkness that is part of the story stays dark
    if (bg) {
      const lum = 0.2126 * bg.r + 0.7152 * bg.g + 0.0722 * bg.b;
      st.fill.intensity = 0.22 * THREE.MathUtils.smoothstep(lum, 0.08, 0.35);
    }

    // ---- sun: keep the scene's direction, re-centre the frustum on the view
    const sun = st.sun;
    if (sun && sun.parent) {
      if (!sun.position.equals(st.lastSunPos)) {
        // the scene moved its sun this frame (dusk, storm…) — adopt it
        st.sunOffset.copy(sun.position).sub(st.sunTargetBase);
      }
      this.fwd.copy(st.sunOffset).normalize().negate();
      (u.uSunDir.value as THREE.Vector3).copy(this.fwd).negate();
      (u.uSunColor.value as THREE.Color).copy(sun.color).multiplyScalar(Math.min(sun.intensity, 1.6) * 0.6);

      // snap the frustum centre to whole shadow texels so edges never shimmer
      this.right.set(0, 1, 0).cross(this.fwd);
      if (this.right.lengthSq() < 1e-6) this.right.set(1, 0, 0);
      this.right.normalize();
      this.up.crossVectors(this.fwd, this.right).normalize();
      const texel = (this.opts.shadowHalf * 2) / sun.shadow.mapSize.x;
      const dx = focus.dot(this.right);
      const dy = focus.dot(this.up);
      this.snapped.copy(focus)
        .addScaledVector(this.right, Math.round(dx / texel) * texel - dx)
        .addScaledVector(this.up, Math.round(dy / texel) * texel - dy);

      sun.target.position.copy(this.snapped);
      sun.position.copy(this.snapped).addScaledVector(this.fwd, -80);
      sun.target.updateMatrixWorld();
      st.lastSunPos.copy(sun.position);
    }

    // ---- fog: honour the scene's distances, measured from the player
    const fog = scene.fog as THREE.Fog | null;
    if (fog && 'near' in fog) {
      if (fog.near !== st.lastFogNear) st.fogBaseNear = fog.near;
      if (fog.far !== st.lastFogFar) st.fogBaseFar = fog.far;
      fog.near = st.fogBaseNear + fogShift;
      fog.far = st.fogBaseFar + fogShift;
      st.lastFogNear = fog.near;
      st.lastFogFar = fog.far;
    }
  }
}

// ---------------------------------------------------------------- contact shadow

let blobTexture: THREE.Texture | null = null;

/** Soft round texture used for grounding blobs under characters and props. */
export function contactShadowTexture(): THREE.Texture {
  if (blobTexture) return blobTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 2, 32, 32, 31);
  grad.addColorStop(0, 'rgba(0,0,0,1)');
  grad.addColorStop(0.45, 'rgba(0,0,0,0.55)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  blobTexture = new THREE.CanvasTexture(c);
  return blobTexture;
}

const blobMaterial = (): THREE.MeshBasicMaterial => new THREE.MeshBasicMaterial({
  map: contactShadowTexture(),
  color: 0x3b2c3a,
  transparent: true,
  opacity: 0.32,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -2,
  polygonOffsetUnits: -2,
  toneMapped: false,
});
let sharedBlobMat: THREE.MeshBasicMaterial | null = null;
const blobGeo = new THREE.PlaneGeometry(1, 1);

/** A soft ambient-occlusion blob that grounds a character or prop. */
export function makeContactShadow(size: number, opacity = 0.32): THREE.Mesh {
  if (!sharedBlobMat) sharedBlobMat = blobMaterial();
  const m = opacity === 0.32 ? sharedBlobMat : blobMaterial();
  m.opacity = opacity;
  const mesh = new THREE.Mesh(blobGeo, m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.scale.setScalar(size);
  mesh.position.y = 0.035;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.renderOrder = 1;
  mesh.name = '__contactShadow';
  return mesh;
}
