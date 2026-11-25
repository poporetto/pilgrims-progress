// Picks the episode from ?ep=… (default ep1) and loads its direction module.
const ep = new URLSearchParams(location.search).get('ep') ?? 'ep1';
const episodes: Record<string, () => Promise<unknown>> = {
  ep1: () => import('./ep1'),
  ep2: () => import('./ep2'),
  ep3: () => import('./ep3'),
  ep4: () => import('./ep4'),
  ep5: () => import('./ep5'),
  ep6: () => import('./ep6'),
  ep7: () => import('./ep7'),
};
if (!episodes[ep]) throw new Error(`unknown episode ${ep}`);
document.title = `Pilgrim's Progress — ${ep}`;
void episodes[ep]();
