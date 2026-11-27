// The YouTube series. Add an entry when an episode is published: its page, its
// sitemap entry and the links from the game and chapter guides then appear by
// themselves. (episodes.json is generated, so video details live here.)

export const CHANNEL_URL = 'https://www.youtube.com/@PilgrimsProgressStory';

export interface Video {
  /** position in episodes.json, starting at 1 */
  episode: number;
  slug: string;
  youtubeId: string;
  /** ISO 8601, from the YouTube watch page */
  uploadDate: string;
  duration: string;
  /** game chapters (1–17) whose story the episode tells */
  chapters: number[];
}

export const VIDEOS: Video[] = [
  {
    episode: 1, slug: 'the-heavy-burden', youtubeId: '9UoqYxooixE',
    uploadDate: '2026-11-18T22:22:09-08:00', duration: 'PT3M20S', chapters: [1],
  },
  {
    episode: 2, slug: 'the-slough-of-despond', youtubeId: 'tLHz2T2uPA8',
    uploadDate: '2026-11-20T21:28:10-08:00', duration: 'PT3M21S', chapters: [2],
  },
  {
    episode: 3, slug: 'the-mountain-of-fire', youtubeId: 'O-9-uQnE708',
    uploadDate: '2026-11-24T14:44:55-08:00', duration: 'PT2M54S', chapters: [3],
  },
  {
    episode: 4, slug: 'the-wicket-gate', youtubeId: '5limINPHlyI',
    uploadDate: '2026-11-24T20:13:11-08:00', duration: 'PT2M52S', chapters: [4],
  },
  {
    episode: 5, slug: 'the-interpreters-house', youtubeId: 'VASWfXd0_2o',
    uploadDate: '2026-11-25T15:58:31-08:00', duration: 'PT3M1S', chapters: [4],
  },
];

/** URL slugs of the 17 chapter guides, in order. Keep stable once published. */
export const CHAPTER_SLUGS = [
  'city-of-destruction', 'slough-of-despond', 'worldly-wiseman-and-mount-sinai', 'wicket-gate-and-the-interpreter',
  'the-cross', 'the-kings-highway', 'hill-difficulty', 'palace-beautiful', 'valley-of-humiliation', 'shadow-of-death',
  'vanity-fair', 'hill-lucre', 'doubting-castle', 'delectable-mountains', 'enchanted-ground', 'beulah-land', 'the-celestial-city',
];

export const watchUrl = (v: Video): string => `https://www.youtube.com/watch?v=${v.youtubeId}`;
export const embedUrl = (v: Video): string => `https://www.youtube-nocookie.com/embed/${v.youtubeId}`;
export const videoForEpisode = (n: number): Video | undefined => VIDEOS.find((v) => v.episode === n);
export const videoForChapter = (n: number): Video | undefined => VIDEOS.find((v) => v.chapters.includes(n));
