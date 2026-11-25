// One staged picture per chapter. at/eye are world positions; cast lists
// [bear, x, z, yaw°, lift?]: bear 'h' is Christian, 'p' his nearest companion,
// a number is that scene's nth character.
export const SHOTS = [
  { n: 1, jump: 'village', eye: [4, 4, 14.5], at: [1, 1.7, 1], fov: 30, cast: [['h', 1, 4.6, 15]] },
  { n: 2, jump: 'slough', eye: [2.6, 3.6, 12], at: [1.8, 1.3, 2], fov: 30, cast: [['h', 0, 4, 40, -0.5], [1, 3.6, 3, -50]] },
  { n: 3, jump: 'morality', eye: [12, 3.5, 24], at: [13, 5, 0], fov: 42, cast: [['h', 10.5, 12, 20], [2, 13.5, 12, -20]] },
  { n: 4, jump: 'wicket-approach', eye: [-3, 4, 8], at: [7.4, 2.3, 0], fov: 34, cast: [['h', 3, 1.6, -30], [1, 7, 0.2, -50]] },
  { n: 5, jump: 'cross', eye: [5, 8, 13], at: [0, 8, -5], fov: 36, cast: [['h', 3.2, 3, 20]] },
  { n: 6, jump: 'highway', eye: [-13, 4, 14], at: [-15.4, 1.3, 4], fov: 32, cast: [['h', -19.4, 4.6, 60]] },
  { n: 7, jump: 'hill', eye: [4, 6, 12], at: [2.5, 4, -5], fov: 30, cast: [['h', 5.6, 1.5, 0]] },
  { n: 8, jump: 'palace', eye: [1.4, 6, 17], at: [2, 4.4, -4], fov: 48, cast: [['h', 5.4, 3, -5]] },
  { n: 9, jump: 'valley', eye: [4.5, 6, 16], at: [5.5, 3.6, 0], fov: 38, cast: [['h', 1.5, 4, 70]] },
  { n: 10, jump: 'shadow', eye: [18.6, 5, 10], at: [18.2, 1.9, 0], light: 2.6, cast: [['h', 16.8, 0.6, 25], ['p', 20, 0.5, -15]] },
  { n: 11, jump: 'vanity', eye: [12.6, 3.4, 8.4], at: [12, 2, -3], fov: 42, cast: [['h', 11, 2.6, 15], ['p', 13.4, 2.3, -5]] },
  { n: 12, jump: 'lucre', eye: [4, 5, 18], at: [5.4, 3.4, -2], fov: 32, cast: [['h', 2.5, 4, 20], ['p', 8.4, 4, -20]] },
  { n: 13, jump: 'castle', eye: [16, 4.6, 22], at: [14.8, 5, -8], fov: 38, cast: [['h', 13, 9, 15], ['p', 18, 9, -10]] },
  { n: 14, jump: 'mountain', eye: [-15, 4.5, 13], at: [-17, 2.2, -2], fov: 40, cast: [['h', -20, 3.5, 30], ['p', -13.6, 3.5, -5]] },
  { n: 15, jump: 'enchanted', eye: [13.4, 3.6, 9.5], at: [13.4, 2, 0], fov: 46, cast: [['h', 11, 1.6, 15], ['p', 13.4, 1.8, 0]] },
  { n: 16, jump: 'beulah', eye: [-11, 4, 13], at: [-12, 2.2, -2], fov: 38, cast: [['h', -13.6, 3, 20], ['p', -10.6, 3, -5]] },
  { n: 17, jump: 'celestial', eye: [-2.5, 13, 1.5], at: [12, 11.8, 0], fov: 44, cast: [['h', 6, -1.6, -90], ['p', 6, 1.6, -85]] },
].map((s) => ({ ...s, cam: { off: s.eye, at: s.at, abs: true, fov: s.fov ?? 34 } }));
