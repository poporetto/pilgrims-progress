// Renders one colour picture per chapter from the real game scenes into
// pictures/out. Follow with make.mjs.
//   node pictures/shoot.mjs --url http://localhost:5173 [--only 3,5] [--explore]
import { writeFileSync, mkdirSync } from 'node:fs';
import { launch } from './lib.mjs';
import { SHOTS } from './shots.mjs';
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const url = opt('url', 'http://localhost:5173');
const only = opt('only', '') ? opt('only', '').split(',').map(Number) : null;
const explore = args.includes('--explore');
const out = new URL('./out/', import.meta.url).pathname;
mkdirSync(out, { recursive: true });
const browser = await launch();
for (const s of SHOTS) {
  if (only && !only.includes(s.n)) continue;
  const page = await browser.newPage({ viewport: { width: 1000, height: 700 } });
  page.on('pageerror', (e) => console.error(s.n, e.message));
  await page.goto(url);
  await page.waitForFunction(() => window.__game && document.getElementById('start-btn').getAttribute('aria-disabled') !== 'true', null, { timeout: 60000 });
  await page.evaluate(() => {
    const r = __game.renderer, o = r.render.bind(r);
    r.render = (sc, cam) => { window.__last = sc; o(sc, cam); };
    window.__orig = o;
  });
  await page.evaluate((j) => document.querySelector(`[data-jump="${j}"]`).click(), s.jump);
  await page.waitForTimeout(s.wait ?? 3500);
  if (s.run) { await page.evaluate(s.run); await page.waitForTimeout(1200); }
  const shots = explore
    ? [['game', { off: [0, 13, 13], at: [0, 1, 0] }], ['wide', { off: [0, 26, 30], at: [0, 0, -4] }], ['low', { off: [5, 3, 8], at: [0, 1.5, 0] }], ['back', { off: [-5, 3.5, -9], at: [0, 1.5, 0] }]]
    : [['c', s.cam]];
  for (const [name, cam] of shots) {
    const res = await page.evaluate(async ({ cam, cast, light }) => {
      const THREE = await import('/node_modules/.vite/deps/three.js');
      const r = __game.renderer, sc = window.__last, focus = __game.camTarget.clone();
      const base = cam.abs ? new THREE.Vector3() : focus;
      const C = new THREE.PerspectiveCamera(cam.fov ?? 32, 1.4, 0.3, 400);
      C.position.copy(base).add(new THREE.Vector3(...cam.off));
      C.lookAt(base.clone().add(new THREE.Vector3(...cam.at)));
      const { liveBears } = await import('/src/bear.ts');
      const bears = [...liveBears].map((b) => b.root).filter((b) => { let q = b; while (q.parent) q = q.parent; return q === sc; });
      const byDist = [...bears].filter((b) => b.visible).sort((a, b) => a.position.distanceTo(focus) - b.position.distanceTo(focus));
      for (const b of liveBears) for (const e of [b.eyes, b.eyeL, b.eyeR, b.leftEye, b.rightEye].flat()) if (e?.scale) e.scale.y = 1;
      const roots = []; sc.traverse((o) => { if (o.name === '__contactShadow' && o.parent !== sc) roots.push(o.parent); });
      const hero = byDist[0], pal = roots.filter((o) => o !== hero && !(hero && hero.getObjectById(o.id)) && o.visible && o.parent === sc).sort((a, b) => a.position.distanceTo(focus) - b.position.distanceTo(focus))[0];
      const ray = new THREE.Raycaster(); const ground = [];
      sc.traverse((o) => { if (o.name === 'terrain') ground.push(o); });
      for (const [who, x, z, yaw, lift] of cast) {
        const b = who === 'h' ? hero : who === 'p' ? pal : bears[who];
        ray.set(new THREE.Vector3(x, 60, z), new THREE.Vector3(0, -1, 0));
        const others = []; sc.traverse((o) => { if (o.isMesh && !o.isInstancedMesh && o.visible) { let q = o, bear = false; while (q) { if (bears.includes(q) || roots.includes(q)) bear = true; q = q.parent; } if (!bear) others.push(o); } });
        const hit = ray.intersectObjects(cast.deck ? others : (ground.length ? ground : others), false)[0] ?? ray.intersectObjects(others, false)[0];
        if (!b) continue;
        b.visible = true; b.traverse((o) => { if (o.isMesh && o.name !== '__contactShadow') o.frustumCulled = false; });
        b.position.set(x, (hit ? hit.point.y : b.position.y) + (lift ?? 0.06), z); b.rotation.set(0, yaw * Math.PI / 180, 0);
      }
      const staged = cast.map(([w]) => (w === 'h' ? hero : w === 'p' ? pal : bears[w]));
      for (const b of bears) if (cast.length && !staged.includes(b) && b.position.distanceTo(C.position) < 7.5) b.visible = false;
      let lamp; if (light) { lamp = new THREE.AmbientLight(0xbfcfff, light); sc.add(lamp); }
      const render = (w, h) => { C.aspect = w / h; C.updateProjectionMatrix(); r.setPixelRatio(1); r.setSize(w, h, false); window.__orig(sc, C); };
      render(1200, 630);
      const tmp = document.createElement('canvas'); tmp.width = 1200; tmp.height = 630;
      const tx = tmp.getContext('2d'); tx.filter = 'saturate(0.95) brightness(1.04)'; tx.drawImage(r.domElement, 0, 0);
      const color = tmp.toDataURL('image/jpeg', 0.86);
      return { color, focus: focus.toArray(), bears: byDist.slice(0, 3).map((b) => b.position.toArray().map((v) => v.toFixed(1)).join('/')) };
    }, { cam, cast: explore ? [] : s.cast, light: s.light });
    const base = `${out}${String(s.n).padStart(2, '0')}`;
    writeFileSync(`${base}-${name}.jpg`, Buffer.from(res.color.split(',')[1], 'base64'));
    console.log(s.n, s.jump, name, res.focus.map((v) => +v.toFixed(1)).join(','), res.bears.join('|'));
  }
  await page.close();
}
await browser.close();
