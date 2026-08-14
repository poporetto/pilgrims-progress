const portraitSlugs = new Map<string, string>();

function addPortraits(names: string[], slugs: string[]): void {
  names.forEach((name, index) => portraitSlugs.set(name, slugs[index]));
}

addPortraits(
  [
    'Christian', 'Christiana', 'Hopeful', 'Faithful', 'Evangelist', 'Goodwill',
    'Pliable', 'Obstinate', 'Help', 'Worldly Wiseman', 'Interpreter', 'Watchful',
    'Apollyon', 'Giant Despair', 'Diffidence', 'Ignorance', 'Flatterer', 'Atheist',
    'Talkative', 'By-ends', 'Demas', 'Formalist', 'Hypocrisy', 'Timorous',
    'Mistrust', 'Discretion', 'Prudence', 'Piety', 'Charity', 'Jesus',
  ],
  [
    'christian', 'christiana', 'hopeful', 'faithful', 'evangelist', 'goodwill',
    'pliable', 'obstinate', 'help', 'worldly-wiseman', 'interpreter', 'watchful',
    'apollyon', 'giant-despair', 'diffidence', 'ignorance', 'flatterer', 'atheist',
    'talkative', 'by-ends', 'demas', 'formalist', 'hypocrisy', 'timorous',
    'mistrust', 'discretion', 'prudence', 'piety', 'charity', 'jesus',
  ],
);

addPortraits(
  [
    'Anna', 'Elsie', 'Mrs. Bramble', 'Old Hamlet', 'Puddle', 'Clover',
    'Mr. Whiskers', 'Passion', 'Patience', 'Simple', 'Sloth', 'Presumption',
    'Shame', 'Discontent', 'Moses', 'Adam the First', 'Wanton', 'Sincere',
    'Knowledge', 'Experience', 'King’s Attendant', 'First Shining One',
    'Second Shining One', 'Third Shining One', 'Judge Hate-Good', 'Officer',
    'Merchant', 'Saint Bear', 'Saint Rabbit', 'Saint Sheep',
  ],
  [
    'anna', 'elsie', 'mrs-bramble', 'old-hamlet', 'puddle', 'clover',
    'mr-whiskers', 'passion', 'patience', 'simple', 'sloth', 'presumption',
    'shame', 'discontent', 'moses', 'adam-the-first', 'wanton', 'sincere',
    'knowledge', 'experience', 'kings-attendant', 'first-shining-one',
    'second-shining-one', 'third-shining-one', 'judge-hate-good', 'officer',
    'merchant', 'saint-bear', 'saint-rabbit', 'saint-sheep',
  ],
);

portraitSlugs.set('Citizen', 'citizen');

const aliases: Record<string, string> = {
  'Anna (cub)': 'Anna',
  'Elsie (cub)': 'Elsie',
  'Mr. Worldly Wiseman': 'Worldly Wiseman',
  'King\'s Attendant': 'King’s Attendant',
  'Angel': 'First Shining One',
  'Shining One': 'First Shining One',
  'Saints': 'Saint Bear',
};

const additionalStoryNames = [
  'Mr. Hold-the-world',
  'Mr. Money-love',
  'Mr. Save-all',
  'Mr. Legality',
  'Civility',
  'Beelzebub',
  'Augustine',
  'John Bunyan',
  'Bunyan',
  'City of Destruction',
  'Celestial City',
  'Slough of Despond',
  'Wicket Gate',
  'King’s Highway',
  'King\'s Highway',
  'Hill Difficulty',
  'Palace Beautiful',
  'Valley of Humiliation',
  'Valley of the Shadow of Death',
  'Vanity Fair',
  'Hill Lucre',
  'Doubting Castle',
  'Delectable Mountains',
  'Enchanted Ground',
  'Beulah Land',
  'Mount Sinai',
  'Sinai',
  'Morality',
  'Fair-speech',
  'Prating Row',
  'Country of Conceit',
  'Hill Error',
  'Mount Caution',
  'Lust of the Flesh',
  'Lust of the Eyes',
  'Pride of Life',
  'God',
  'Jesus',
  'Christ',
  'Lord',
  'King',
  'Prince',
  'Devil',
];

export function getDialogueCharacterNames(): string[] {
  return [...new Set([
    ...portraitSlugs.keys(),
    ...Object.keys(aliases),
    ...additionalStoryNames,
  ])].sort((a, b) => b.length - a.length);
}

// Public portrait filenames stay stable, so bump this whenever the atlas is
// recut to prevent browsers from reusing an older, badly framed crop.
const PORTRAIT_VERSION = '20260730-17';

function portraitUrl(slug: string): string {
  const url = new URL(`./portraits/${slug}.webp`, document.baseURI);
  url.searchParams.set('v', PORTRAIT_VERSION);
  return url.href;
}

export function getDialoguePortrait(speaker: string): string | null {
  const canonicalName = aliases[speaker] ?? speaker;
  const slug = portraitSlugs.get(canonicalName);
  if (!slug) return null;
  return portraitUrl(slug);
}

// Warm the browser's HTTP cache for every portrait up front, so the very
// first time a given character speaks their picture is already downloaded
// instead of popping in a moment after the dialogue box opens. The whole set
// is only a few hundred KB, so this is cheap even on a slow connection.
export function preloadAllPortraits(): void {
  const seen = new Set<string>();
  for (const slug of portraitSlugs.values()) {
    if (seen.has(slug)) continue;
    seen.add(slug);
    const img = new Image();
    img.src = portraitUrl(slug);
  }
}
