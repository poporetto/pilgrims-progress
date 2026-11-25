// Builds the crawlable pages that sit beside the game: one per chapter guide,
// one per published video episode, two index pages and the sitemap.
// Used by vite.config.ts. Links are relative so any hosting folder works.
import { bookPage } from './book';
import { CHAPTER_GUIDES, ESV_NOTICE, type Guide } from '../guides/chapters';
import episodes from '../guides/episodes.json';
import { CHANNEL_URL, CHAPTER_SLUGS, VIDEOS, embedUrl, videoForChapter, watchUrl, type Video } from '../guides/videos';

export const SITE = 'https://pilgrimsprogress.com.au/';
const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const EPISODES = episodes as unknown as Guide[];

export const esc = (s: string): string => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const thumb = (v: Video): string => `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`;
export const chapterPath = (n: number): string => `family-guide/${CHAPTER_SLUGS[n - 1]}/`;
const episodePath = (v: Video): string => `episodes/${v.slug}/`;
/** cut at a word, for meta descriptions */
const clip = (s: string, max = 155): string => (s.length <= max ? s : `${s.slice(0, max).replace(/\s+\S*$/, '').replace(/[,;:.]$/, '')}…`);

export interface Page {
  path: string;
  title: string;
  description: string;
  image?: string;
  ogType?: string;
  /** served for missing addresses: root-absolute links, not indexed */
  notFound?: boolean;
  data: object[];
  /** receives the relative prefix back to the site root */
  body: (root: string) => string;
}

export const crumbData = (...items: Array<[string, string]>): object => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path })),
});

function shell(p: Page, css: string): string {
  const root = p.notFound ? '/' : '../'.repeat(p.path.split('/').length - 1);
  const url = SITE + p.path;
  const image = p.image ?? `${SITE}og-image.png`;
  const current = (prefix: string): string => (p.path === prefix ? ' aria-current="page"' : '');
  const json = JSON.stringify(p.data).replace(/</g, '\\u003c');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<meta name="robots" content="${p.notFound ? 'noindex' : 'index, follow, max-image-preview:large, max-video-preview:-1'}">
<meta name="theme-color" content="#dcebe0">
${p.notFound ? '' : `<link rel="canonical" href="${url}">`}
<link rel="icon" type="image/svg+xml" href="${root}favicon.svg">
<link rel="apple-touch-icon" href="${root}icons/apple-touch-icon.png">
<meta property="og:type" content="${p.ogType ?? 'article'}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Pilgrim's Progress">
<meta property="og:locale" content="en_AU">
<meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">${json}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q0PV6NF7PC"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-Q0PV6NF7PC');</script>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&amp;family=Nunito:wght@600;700;800;900&amp;display=swap">
<style>${css}</style>
</head>
<body>
<header class="top">
<a class="brand" href="${root}">Pilgrim’s Progress</a>
<nav aria-label="Main"><a href="${root}">Play the game</a><a href="${root}family-guide/"${current('family-guide/')}>Family Guide</a><a href="${root}episodes/"${current('episodes/')}>Episodes</a><a href="${root}about-the-book/"${current('about-the-book/')}>The book</a></nav>
</header>
<main>
${p.body(root)}
</main>
<footer><a href="${root}">Play free in your browser</a> <a href="${CHANNEL_URL}">Watch on YouTube</a></footer>
</body>
</html>
`;
}

const list = (title: string, items: string[]): string =>
  `<h2>${title}</h2>\n<ul>${items.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>`;

function guideBody(g: Guide): string {
  return `<h2>The big idea</h2>
<p class="idea">${esc(g.bigIdea)}</p>
<h2>From the Bible</h2>
${g.verses.map(([ref, t]) => `<blockquote>“${esc(t)}”<cite>${esc(ref)} (ESV)</cite></blockquote>`).join('\n')}
<h2>What it means</h2>
<dl>${g.meaning.map(([n, t]) => `<dt>${esc(n)}</dt><dd>${esc(t)}</dd>`).join('')}</dl>
${list('Questions for ages 4–7', g.young)}
${list('Questions for ages 8–12', g.older)}
<h2>Do it together</h2>
<p>${esc(g.activity)}</p>
<h2>Pray</h2>
<p class="prayer">${esc(g.prayer)}</p>`;
}

const pager = (prev: string, next: string): string => `<nav class="pager" aria-label="More">${prev || '<span></span>'}${next}</nav>`;
const notice = `<p class="notice">${esc(ESV_NOTICE)}</p>`;
const watchCard = (root: string, v: Video): string =>
  `<a class="watch" href="${root}${episodePath(v)}"><img src="${thumb(v)}" width="1280" height="720" loading="lazy" alt=""><span><strong>Episode ${v.episode}: ${esc(EPISODES[v.episode - 1].title)}</strong><span>Watch the animated episode</span></span></a>`;

const player = (v: Video, lazy = false): string =>
  `<div class="video"><iframe src="${embedUrl(v)}" title="${esc(`Pilgrim’s Progress Episode ${v.episode}: ${EPISODES[v.episode - 1].title}`)}"${lazy ? ' loading="lazy"' : ''} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

function chapterPage(g: Guide, i: number): Page {
  const n = i + 1;
  const path = chapterPath(n);
  const video = videoForChapter(n);
  const link = (root: string, k: number, text: (t: string) => string): string =>
    (CHAPTER_GUIDES[k - 1] ? `<a href="${root}${chapterPath(k)}">${text(esc(CHAPTER_GUIDES[k - 1].title))}</a>` : '');
  return {
    path,
    title: `${g.title}: Pilgrim’s Progress Family Guide`,
    description: clip(`${g.title} explained for families: meaning, Bible verses, questions for kids, an activity and a prayer. ${g.bigIdea}`),
    image: `${SITE}chapters/${CHAPTER_SLUGS[i]}-share.jpg`,
    data: [
      {
        '@context': 'https://schema.org', '@type': 'Article', headline: `${g.title}: Pilgrim’s Progress Family Guide`,
        description: g.bigIdea, image: `${SITE}chapters/${CHAPTER_SLUGS[i]}.jpg`, url: SITE + path, inLanguage: 'en', author: { '@type': 'Person', name: 'Poporetto' },
        about: { '@type': 'Book', name: "The Pilgrim's Progress", author: { '@type': 'Person', name: 'John Bunyan' } },
      },
      crumbData(['Home', ''], ['Family Guide', 'family-guide/'], [g.title, path]),
    ],
    body: (root) => `<p class="crumbs"><a href="${root}family-guide/">All chapter guides</a></p>
<p class="kicker">Chapter ${ROMAN[i]}</p>
<h1>${esc(g.title)}</h1>
<p class="lead">${esc(g.story)}</p>
<img class="hero" src="${root}chapters/${CHAPTER_SLUGS[i]}.jpg" width="1200" height="630" alt="${esc(g.title)} in the Pilgrim’s Progress game">
${video ? `<h2>Watch Episode ${video.episode}</h2>
${player(video, true)}
<p><a href="${root}${episodePath(video)}">Guide for Episode ${video.episode}: ${esc(EPISODES[video.episode - 1].title)}</a></p>` : ''}
${guideBody(g)}
<p class="actions"><a class="btn" href="${root}">Play the game</a></p>
${pager(link(root, n - 1, (t) => `‹ ${t}`), link(root, n + 1, (t) => `${t} ›`))}
${notice}`,
  };
}

function episodePage(v: Video, i: number): Page {
  const g = EPISODES[v.episode - 1];
  const path = episodePath(v);
  const name = `Pilgrim’s Progress Episode ${v.episode}: ${g.title}`;
  const link = (root: string, o: Video | undefined, text: (t: string) => string): string =>
    (o ? `<a href="${root}${episodePath(o)}">${text(esc(EPISODES[o.episode - 1].title))}</a>` : '');
  return {
    path,
    title: name,
    description: clip(`Watch Episode ${v.episode} of Pilgrim’s Progress for kids, with a free family discussion guide. ${g.bigIdea}`),
    image: thumb(v),
    ogType: 'video.other',
    data: [
      {
        '@context': 'https://schema.org', '@type': 'VideoObject', name, description: g.bigIdea, thumbnailUrl: [thumb(v)],
        uploadDate: v.uploadDate, duration: v.duration, embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
        url: SITE + path, inLanguage: 'en', isFamilyFriendly: true,
      },
      crumbData(['Home', ''], ['Episodes', 'episodes/'], [g.title, path]),
    ],
    body: (root) => `<p class="crumbs"><a href="${root}episodes/">All episodes</a></p>
<p class="kicker">Episode ${v.episode}</p>
<h1>${esc(g.title)}</h1>
${player(v)}
<p class="actions"><a class="btn" href="${watchUrl(v)}">Watch on YouTube</a><a class="btn soft" href="${CHANNEL_URL}?sub_confirmation=1">Subscribe</a></p>
${guideBody(g)}
<h2>Play this part of the story</h2>
<p>${v.chapters.map((n) => `See the <a href="${root}${chapterPath(n)}">Chapter ${ROMAN[n - 1]} guide: ${esc(CHAPTER_GUIDES[n - 1].title)}</a>`).join(', ')}, or <a href="${root}">play the free game</a>.</p>
${pager(link(root, VIDEOS[i - 1], (t) => `‹ ${t}`), link(root, VIDEOS[i + 1], (t) => `${t} ›`))}
${notice}`,
  };
}

function hubs(): Page[] {
  const items = (paths: string[]): object => ({
    '@context': 'https://schema.org', '@type': 'ItemList',
    itemListElement: paths.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + p })),
  });
  return [
    {
      path: 'family-guide/',
      title: 'Pilgrim’s Progress Family Guide: 17 Chapters for Kids',
      description: 'Free Pilgrim’s Progress discussion guides for families: the meaning of each chapter, Bible verses, questions for two age groups, activities and prayers.',
      ogType: 'website',
      data: [items(CHAPTER_SLUGS.map((_, i) => chapterPath(i + 1))), crumbData(['Home', ''], ['Family Guide', 'family-guide/'])],
      body: (root) => `<h1>Pilgrim’s Progress Family Guide</h1>
<p class="lead">Talk about the story together. Every chapter has its meaning, Bible verses, questions for two age groups, something to do and a short prayer.</p>
<ol class="list">${CHAPTER_GUIDES.map((g, i) => `<li><a href="${root}${chapterPath(i + 1)}"><span class="num">${ROMAN[i]}</span><span><strong>${esc(g.title)}</strong><small>${esc(g.story)}</small></span></a></li>`).join('\n')}</ol>`,
    },
    {
      path: 'episodes/',
      title: 'Pilgrim’s Progress for Kids: Animated Episodes',
      description: 'Watch Pilgrim’s Progress as short animated episodes for kids, each with a free family discussion guide, Bible verses, an activity and a prayer.',
      ogType: 'website',
      data: [items(VIDEOS.map(episodePath)), crumbData(['Home', ''], ['Episodes', 'episodes/'])],
      body: (root) => `<h1>Pilgrim’s Progress animated episodes</h1>
<p class="lead">John Bunyan’s story in short films for kids. Each one comes with a guide for talking about it together.</p>
${VIDEOS.map((v) => watchCard(root, v)).join('\n')}
<p class="actions"><a class="btn" href="${CHANNEL_URL}?sub_confirmation=1">Subscribe on YouTube</a></p>`,
    },
  ];
}

/** every generated file, keyed by its path in the site */
export function sitePages(css: string): Record<string, string> {
  const pages = [...hubs(), bookPage(), ...CHAPTER_GUIDES.map(chapterPage), ...VIDEOS.map(episodePage)];
  const out: Record<string, string> = {};
  for (const p of pages) out[`${p.path}index.html`] = shell(p, css);
  out['404.html'] = shell({
    path: '404.html', title: 'Page not found: Pilgrim’s Progress', description: 'This page is not on the map.', notFound: true, data: [],
    body: (root) => `<h1>This path isn’t on the map</h1>
<p class="lead">The page you were looking for has moved or never existed. Here is the way back.</p>
<p class="actions"><a class="btn" href="${root}">Play the game</a><a class="btn soft" href="${root}family-guide/">Family Guide</a><a class="btn soft" href="${root}episodes/">Episodes</a></p>`,
  }, css);
  out['sitemap.xml'] = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', ...pages.map((p) => p.path)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return out;
}
