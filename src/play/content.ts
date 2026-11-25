// What there is to find, touch and hear in each chapter beyond the main story:
// three hidden keepsakes, a few living-world props, and companion chatter.
// Bible quotations: ESV (the notice is shown in the Keepsake Book).
// Coordinates are in each chapter's own world space. Keepsakes are picked up
// by walking over them, so every one must stand where Christian can walk.

export type Shape =
  | 'egg' | 'ribbon' | 'bun' | 'book' | 'feather' | 'pebble' | 'flower' | 'key'
  | 'bell' | 'star' | 'leaf' | 'heart' | 'scroll' | 'shield' | 'cup' | 'crown'
  | 'fruit' | 'lantern' | 'button' | 'boot' | 'harp' | 'coin';

export interface Keepsake {
  id: string; name: string; shape: Shape; color: number;
  x: number; z: number; thought: string; ref: string; verse: string; hint: string;
}

export type PropKind = 'hedgehog' | 'squirrel' | 'duckling' | 'birds' | 'fireflies' | 'bell' | 'bush' | 'bench' | 'flowers';
export interface Prop { kind: PropKind; x: number; z: number }

export interface ChapterPlay { keepsakes: Keepsake[]; props: Prop[] }

type K = [name: string, shape: Shape, color: number, x: number, z: number, thought: string, ref: string, verse: string, hint: string];
const chapter = (key: string, keepsakes: K[], props: [PropKind, number, number][]): ChapterPlay => ({
  keepsakes: keepsakes.map(([name, shape, color, x, z, thought, ref, verse, hint], i) => (
    { id: `${key}-${i + 1}`, name, shape, color, x, z, thought, ref, verse, hint })),
  props: props.map(([kind, x, z]) => ({ kind, x, z })),
});

export const PLAY = {
  village: chapter('village', [
    ['Faded Ribbon', 'ribbon', 0xe99eb4, -24, 15, 'Someone at home is loved and prayed for.', 'Psalm 121:8', 'The LORD will keep your going out and your coming in from this time forth and forevermore.', 'In the south-west of the village'],
    ['Worn Little Book', 'book', 0x9c6b4f, 20, -20, 'One true book can start a long journey.', 'Psalm 119:105', 'Your word is a lamp to my feet and a light to my path.', 'In the north-east of the village'],
    ['Warm Honey Bun', 'bun', 0xd89545, 36, 12, 'Kindness is good food for the road.', 'Hebrews 13:16', 'Do not neglect to do good and to share what you have, for such sacrifices are pleasing to God.', 'South of the east road'],
  ], [['hedgehog', -10, 15], ['birds', 13, 5], ['bench', 30, -10], ['bush', -22, -16], ['flowers', 24, 10]]),
  slough: chapter('slough', [
    ['Muddy Boot', 'boot', 0x8a6a52, -21, 8, 'Getting stuck is not the end of the story.', 'Psalm 40:2', 'He drew me up from the pit of destruction, out of the miry bog.', 'Before the mire, off the path'],
    ['Smooth Stepping Stone', 'pebble', 0xb9c4cc, 24, -8, 'God gives us firm places to stand.', 'Psalm 18:2', 'The LORD is my rock and my fortress and my deliverer.', 'On the far bank, to the north'],
    ['Helping Heart', 'heart', 0xe88ea0, 32, 7, 'Help often comes when we cannot help ourselves.', 'Psalm 46:1', 'God is our refuge and strength, a very present help in trouble.', 'Across the sunny meadow'],
  ], [['duckling', -21, -5], ['birds', 28, 5], ['flowers', 30, -6], ['hedgehog', 22, 8]]),
  morality: chapter('morality', [
    ['Silk Top-Hat Button', 'button', 0x71658c, -20, -8, 'A smart voice is not always a wise one.', 'Proverbs 14:12', 'There is a way that seems right to a man, but its end is the way to death.', 'Early on the road, to the north'],
    ['Grey Mountain Stone', 'pebble', 0x9a9a9f, 3, 8, 'No one can climb to God by being good enough.', 'Ephesians 2:8', 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God.', 'In the shadow of the mountain'],
    ['Turn-Around Leaf', 'leaf', 0x8fb56f, -14, 8, 'It is never too late to turn back.', 'Isaiah 55:7', 'Let him return to the LORD, that he may have compassion on him.', 'South of the pleasant road'],
  ], [['squirrel', -22, 6], ['bush', -17, -5], ['birds', -12, 4]]),
  wicket: chapter('wicket', [
    ['Brave Knock Bell', 'bell', 0xe5b652, -40, 5, 'Knock, and keep on knocking.', 'Matthew 7:7', 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.', 'Along the approach road, to the south'],
    ['Broken Arrow Feather', 'feather', 0xcf8d8d, -20, -7, 'The enemy aims, but the King guards the door.', 'Psalm 91:5', 'You will not fear the terror of the night, nor the arrow that flies by day.', 'Nearer the Gate, to the north'],
    ['Interpreter’s Lamp', 'lantern', 0xf3c969, 72, 1, 'A wise helper makes hard things clear.', 'John 16:13', 'When the Spirit of truth comes, he will guide you into all the truth.', 'On the narrow highway beyond the cottage'],
  ], [['hedgehog', -50, -4], ['bench', -36, 5], ['birds', -30, -4], ['flowers', 60, 1.2], ['squirrel', 82, -1.1]]),
  cross: chapter('cross', [
    ['Empty Strap', 'ribbon', 0xa98363, -20, 7, 'Jesus carries what we could not carry.', '1 Peter 2:24', 'He himself bore our sins in his body on the tree.', 'At the foot of the green hill'],
    ['White Hill Flower', 'flower', 0xfff8f0, 14, 6, 'Jesus makes us new.', '2 Corinthians 5:17', 'If anyone is in Christ, he is a new creation.', 'Down the hill’s eastern side'],
    ['Sealed Scroll Ribbon', 'scroll', 0xf1dcae, 28, -6, 'You belong to the King.', 'Ephesians 1:13', 'You also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit.', 'Near the light at the road’s end'],
  ], [['birds', -24, -5], ['flowers', 22, 5], ['bench', 25, -4]]),
  highway: chapter('highway', [
    ['Sleeper’s Link', 'button', 0x9fa7b5, -24, 6, 'Wake up, and help others wake.', 'Ephesians 5:14', 'Awake, O sleeper, and arise from the dead, and Christ will shine on you.', 'Before the sleepers, off the road'],
    ['Right-Door Key', 'key', 0xe2b84f, -1, 7, 'Jesus is the door. There is no need for a wall to climb.', 'John 10:9', 'I am the door. If anyone enters by me, he will be saved.', 'Between the sleepers and the wall'],
    ['Evening Star', 'star', 0xffdf87, 30, 6, 'No night is too dark for God.', 'John 1:5', 'The light shines in the darkness, and the darkness has not overcome it.', 'Where the afternoon turns to night'],
  ], [['hedgehog', -20, 5], ['fireflies', 24, 6], ['bench', 10, 6]]),
  hill: chapter('hill', [
    ['Spring Water Cup', 'cup', 0x9cc9d8, -23, -4, 'Stop and drink before the climb.', 'Isaiah 49:10', 'They shall not hunger or thirst.', 'Before the three paths'],
    ['Climber’s Boot', 'boot', 0xb07b56, 0, 3, 'Slow steps still go up.', 'Galatians 6:9', 'Let us not grow weary of doing good, for in due season we will reap, if we do not give up.', 'On the steep way'],
    ['Summit Feather', 'feather', 0xf4f1e6, 30, 4, 'God gives tired climbers new strength.', 'Isaiah 40:31', 'They who wait for the LORD shall renew their strength; they shall mount up with wings like eagles.', 'Over the top, toward the light'],
  ], [['flowers', -25, 4], ['birds', 25, -3], ['squirrel', 28, -5]]),
  palace: chapter('palace', [
    ['Rose of Welcome', 'flower', 0xe98fa6, -24, 6, 'A friend’s welcome is a gift from God.', 'Romans 15:7', 'Welcome one another as Christ has welcomed you, for the glory of God.', 'On the approach, to the south'],
    ['Middle-Path Pebble', 'pebble', 0xe3d4c0, -19, -5, 'Stay on the path. The lions are chained.', 'Psalm 56:3', 'When I am afraid, I put my trust in you.', 'Before the lions, to the north'],
    ['Tiny Shield', 'shield', 0x8fb8d8, 34, 5, 'Faith is a shield for every day.', 'Ephesians 6:16', 'In all circumstances take up the shield of faith.', 'Beyond the east gate'],
  ], [['birds', -22, -4], ['bench', -21, 5], ['fireflies', 32, -4], ['bell', 30, 4]]),
  valley: chapter('valley', [
    ['Humble Lily', 'flower', 0xf4eef7, -24, 4, 'Low places can grow lovely things.', 'James 4:6', 'God opposes the proud but gives grace to the humble.', 'On the way down'],
    ['Spark of Courage', 'star', 0xffb36b, -8, 4, 'Stand firm. You do not stand alone.', 'Joshua 1:9', 'Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.', 'On the valley floor'],
    ['Leaf of Healing', 'leaf', 0x83c28e, 26, -4, 'The King heals his tired soldiers.', 'Psalm 147:3', 'He heals the brokenhearted and binds up their wounds.', 'After the battle'],
  ], [['birds', -26, -4], ['flowers', 28, 4]]),
  shadow: chapter('shadow', [
    ['Little Night Lantern', 'lantern', 0xffd98a, -20, 0, 'God’s light is with us in the dark.', 'Psalm 27:1', 'The LORD is my light and my salvation; whom shall I fear?', 'On the dark narrow path'],
    ['Psalm Heart', 'heart', 0xe9a4b4, 3, 0, 'A song of trust can be sung in the dark.', 'Psalm 23:4', 'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.', 'Where the praying voice was heard'],
    ['Friendship Button', 'button', 0xa8c4a2, 27, 3, 'A good friend makes the road lighter.', 'Ecclesiastes 4:9', 'Two are better than one, because they have a good reward for their toil.', 'In the morning light'],
  ], [['fireflies', -17, 1.6], ['birds', 24, -3], ['flowers', 29, -3]]),
  vanity: chapter('vanity', [
    ['Quiet Feather', 'feather', 0xd9d2ef, -26, 6, 'Good words matter most when we live them.', 'James 1:22', 'Be doers of the word, and not hearers only.', 'Before the city, to the south'],
    ['Not-for-Sale Coin', 'coin', 0xe0b95c, 18, -1.8, 'The best things cannot be bought.', 'Proverbs 23:23', 'Buy truth, and do not sell it; buy wisdom, instruction, and understanding.', 'Among the market stalls'],
    ['Faithful’s Star', 'star', 0xffe6a0, 48, -5, 'Faithfulness is never forgotten.', 'Revelation 2:10', 'Be faithful unto death, and I will give you the crown of life.', 'Outside the eastern wall'],
  ], [['birds', -24, -5], ['bell', -12, 5], ['bench', 47, 5], ['flowers', 51, -5]]),
  lucre: chapter('lucre', [
    ['Fair-Weather Ribbon', 'ribbon', 0xf0c1d4, -25, 6, 'Follow God in sunshine and in rain.', 'Joshua 24:15', 'As for me and my house, we will serve the LORD.', 'At the edge of the plain'],
    ['Plain Grey Pebble', 'pebble', 0xc3bfb8, -8, 6, 'Contentment shines brighter than silver.', '1 Timothy 6:6', 'Godliness with contentment is great gain.', 'Before the Hill Lucre'],
    ['Look-Ahead Star', 'star', 0xf7e08c, 34, 6, 'Keep your eyes on what is ahead.', 'Hebrews 12:2', 'Looking to Jesus, the founder and perfecter of our faith.', 'Past the pillar of salt'],
  ], [['hedgehog', -22, -6], ['squirrel', -11, 5], ['birds', 32, -5], ['bush', 30, 4]]),
  castle: chapter('castle', [
    ['Rough-Road Boot', 'boot', 0x94785f, -18, 0.8, 'The right road may be the rocky one.', 'Matthew 7:14', 'For the gate is narrow and the way is hard that leads to life, and those who find it are few.', 'On the stony highway'],
    ['Bypath Daisy', 'flower', 0xfff3c4, 9, 6, 'Easy paths can lead a long way off.', 'Proverbs 3:6', 'In all your ways acknowledge him, and he will make straight your paths.', 'In the tempting meadow'],
    ['Promise Key Charm', 'key', 0xf2c75c, 48, -0.8, 'God’s promises open locked doors.', '2 Corinthians 1:20', 'For all the promises of God find their Yes in him.', 'On the highway far past the castle'],
  ], [['birds', -20, 3.5], ['flowers', -14, -3], ['squirrel', 54, -1.2], ['bench', 60, 2.8]]),
  mountain: chapter('mountain', [
    ['Shepherd’s Bell', 'bell', 0xe6bd62, -28, 1, 'Good shepherds know the way.', 'Psalm 23:1', 'The LORD is my shepherd; I shall not want.', 'Before the shepherds’ welcome'],
    ['Careful Pebble', 'pebble', 0xd3cbbd, 15, -1, 'A wise warning is a kind gift.', 'Proverbs 13:14', 'The teaching of the wise is a fountain of life, that one may turn away from the snares of death.', 'Between the sights'],
    ['Glimpse of the City', 'crown', 0xf6d77c, 54, 1, 'Our true home is ahead, and it is real.', 'Hebrews 11:16', 'They desire a better country, that is, a heavenly one.', 'On the last stretch of the mountains'],
  ], [['flowers', -26, -3], ['birds', 0, 3], ['hedgehog', 52, -3], ['bench', 57, 3]]),
  enchanted: chapter('enchanted', [
    ['Wide-Awake Bell', 'bell', 0xd8b7e8, -35, 3, 'Keep one another awake.', '1 Thessalonians 5:6', 'So then let us not sleep, as others do, but let us keep awake and be sober.', 'At the start of the drowsy fields'],
    ['Torn Net Thread', 'ribbon', 0xc7b48b, 12, 3, 'Beware of flattery. Love the truth.', 'Proverbs 29:5', 'A man who flatters his neighbor spreads a net for his feet.', 'After the two paths meet again'],
    ['Song for the Road', 'harp', 0xe4c07a, 64, -3, 'Singing together chases sleep away.', 'Colossians 3:16', 'Singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.', 'Where the fields begin to clear'],
  ], [['fireflies', -32, -3.5], ['squirrel', 58, 3.6], ['flowers', 68, 3.5], ['bell', 76, 3.4]]),
  beulah: chapter('beulah', [
    ['Beulah Pear', 'fruit', 0xd8d477, -25, 1, 'God’s gifts are good to enjoy.', 'Psalm 34:8', 'Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!', 'In the golden meadow'],
    ['Songbird Feather', 'feather', 0xa6d4e4, -10, -1, 'After winter comes a song.', 'Song of Solomon 2:12', 'The flowers appear on the earth, the time of singing has come.', 'Near the river'],
    ['River Pebble', 'pebble', 0xb7d7de, 41, 1, 'He never leaves us in deep water.', 'Isaiah 43:2', 'When you pass through the waters, I will be with you.', 'On the far shore'],
  ], [['bush', -22, -3], ['birds', -14, 3], ['bench', -18, 3.2], ['flowers', 38, -3], ['bush', 44, 3.2]]),
  celestial: chapter('celestial', [
    ['Shining Stair Stone', 'pebble', 0xf8e7b0, -22, 1, 'Every step was worth it.', 'Romans 8:18', 'The sufferings of this present time are not worth comparing with the glory that is to be revealed to us.', 'On the shining hill'],
    ['Golden Harp', 'harp', 0xf2cb65, 26, 1.2, 'Everyone here has a song.', 'Psalm 96:1', 'Oh sing to the LORD a new song; sing to the LORD, all the earth!', 'Inside the Gates of Pearl'],
    ['Crown of Joy', 'crown', 0xffd96a, 39, 1.2, 'Faithful steps end in joy.', 'Matthew 25:23', 'Well done, good and faithful servant.', 'Down the street of gold'],
  ], [['birds', -18, -2.6], ['bell', 22, 2.8], ['bush', 43, 2.8], ['flowers', 41, -2.8]]),
} satisfies Record<string, ChapterPlay>;

/** Only on the story's own walk: wandering a finished chapter starts past these. */
export const REPLAY_ONLY = new Set(['castle-2', 'mountain-1', 'mountain-2', 'beulah-1', 'beulah-2', 'celestial-1']);

export type PlayMode = keyof typeof PLAY;
export const ALL_KEEPSAKES: Keepsake[] = Object.values(PLAY).flatMap((c: ChapterPlay) => c.keepsakes);

export type CompanionName = 'Pliable' | 'Faithful' | 'Hopeful';
export const CHATTER: Record<CompanionName, string[]> = {
  Pliable: ['Is it far? My paws are tingling!', 'Tell me about the golden crowns again!', 'Hop, hop, off we go!'],
  Faithful: ['It is good to walk with someone from home.', 'The dark is behind us, friend.', 'Truth is worth more than gold.', 'What has the King done for you today?'],
  Hopeful: ['One step, and then another!', 'I am glad we are walking together.', 'Shall we sing a little?', 'Look how far we have come!', 'I wonder what the City smells like. Flowers, I think.', 'When I feel tired, I remember his promises.'],
};
export const SPOTTED: string[] = ['Look! Something is shining!', 'Over there! Do you see it?', 'I think I spy a treasure!'];
export const PROP_LINES: Record<PropKind, { prompt: string; button: string; lines: string[] }> = {
  hedgehog: { prompt: 'Pet the hedgehog', button: 'Pet', lines: ['Snuffle, snuffle!', 'It uncurls and smiles.'] },
  squirrel: { prompt: 'Say hello to the squirrel', button: 'Hello', lines: ['Chirp! Its tail goes swish.', 'It does a happy little hop.'] },
  duckling: { prompt: 'Pet the duckling', button: 'Pet', lines: ['Peep, peep!', 'So very soft.'] },
  birds: { prompt: '', button: '', lines: [] },
  fireflies: { prompt: '', button: '', lines: [] },
  bell: { prompt: 'Ring the bell', button: 'Ring', lines: ['Ding… dong!', 'What a lovely sound.'] },
  bush: { prompt: 'Pick some fruit', button: 'Pick', lines: ['Sweet and juicy!', 'Thank you, Lord, for good things.'] },
  bench: { prompt: 'Sit and rest', button: 'Sit', lines: ['Ahh. A rest for tired paws.', 'It is good to be still.'] },
  flowers: { prompt: 'Smell the flowers', button: 'Smell', lines: ['Mmm! Like springtime.', 'Not even kings are dressed so well.'] },
};
