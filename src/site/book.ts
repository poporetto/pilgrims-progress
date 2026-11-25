// "What is The Pilgrim's Progress about?": summary, people and places.
import { CHAPTER_GUIDES } from '../guides/chapters';
import { CHAPTER_SLUGS } from '../guides/videos';
import { SITE, chapterPath, crumbData, esc, type Page } from './pages';

// [portrait, name, who they are in Bunyan's story]
const CAST: Array<[string, string, string]> = [
  ['christian', 'Christian', 'The pilgrim. He leaves the City of Destruction carrying a burden of sin and travels to the Celestial City.'],
  ['evangelist', 'Evangelist', 'He points Christian to the Wicket Gate and corrects him when he strays.'],
  ['obstinate', 'Obstinate', 'A neighbour who refuses to leave home and mocks the journey.'],
  ['pliable', 'Pliable', 'A neighbour who sets out eagerly and turns back at the first trouble.'],
  ['help', 'Help', 'He pulls Christian out of the Slough of Despond.'],
  ['worldly-wiseman', 'Mr. Worldly Wiseman', 'He persuades Christian to look for relief in good behaviour instead of at the Gate.'],
  ['goodwill', 'Goodwill', 'The keeper of the Wicket Gate, who welcomes those who knock.'],
  ['interpreter', 'The Interpreter', 'He shows Christian pictures and scenes that teach him about the road ahead.'],
  ['apollyon', 'Apollyon', 'The monster who fights Christian in the Valley of Humiliation.'],
  ['faithful', 'Faithful', 'Christian’s friend and companion, who dies for his faith at Vanity Fair.'],
  ['hopeful', 'Hopeful', 'He joins Christian after Vanity Fair and travels with him to the end.'],
  ['by-ends', 'By-ends', 'He follows religion only while it is comfortable and popular.'],
  ['giant-despair', 'Giant Despair', 'The owner of Doubting Castle, who locks Christian and Hopeful in his dungeon.'],
  ['ignorance', 'Ignorance', 'He trusts his own goodness, skips the Gate and is turned away at the end.'],
];

// [heading, summary, game chapters it covers]
const STORY: Array<[string, string, number[]]> = [
  ['Leaving the City of Destruction', 'Christian reads in a book that his city will be destroyed, and he feels the weight of a burden on his back. Evangelist points him to a distant Wicket Gate. His family and neighbours won’t come, except Pliable, who gives up when the two of them fall into the Slough of Despond. Help pulls Christian out.', [1, 2]],
  ['The wrong road and the right Gate', 'Mr. Worldly Wiseman sends Christian toward the village of Morality to be rid of his burden. The road leads under a hill that flashes with fire, and he is afraid to go on. Evangelist turns him back. At the Wicket Gate, Goodwill lets him in, and the Interpreter shows him what faith looks like.', [3, 4]],
  ['The Cross', 'At a cross on a rise, the burden falls from Christian’s back and rolls into an empty tomb. Three Shining Ones tell him his sins are forgiven, give him new clothes and hand him a sealed roll.', [5]],
  ['Hill Difficulty and Palace Beautiful', 'Christian passes the sleepers Simple, Sloth and Presumption, meets Formalist and Hypocrisy, and climbs the Hill Difficulty. He falls asleep in an arbour, loses his roll and has to go back for it. He walks between two chained lions to the Palace Beautiful, where he rests and is given armour.', [6, 7, 8]],
  ['Two dark valleys', 'In the Valley of Humiliation he fights Apollyon and wins with his sword. In the Valley of the Shadow of Death he walks a narrow path in the dark, praying, and is comforted by a voice ahead trusting in God.', [9, 10]],
  ['Vanity Fair', 'Christian catches up with Faithful. In the town of Vanity the two pilgrims refuse to buy what the fair sells. They are arrested, and Faithful is put on trial and killed. Christian escapes, and Hopeful, who saw it all, goes with him.', [11]],
  ['Hill Lucre and Doubting Castle', 'They turn down Demas and his silver mine. Later they leave the road for an easier path, and Giant Despair throws them into the dungeon of Doubting Castle. Christian remembers a key called Promise, which opens its locks.', [12, 13]],
  ['The Delectable Mountains and the Enchanted Ground', 'Shepherds warn the pilgrims and show them the gates of the Celestial City through a perspective glass. They are caught by the Flatterer, laughed at by Atheist, and keep each other awake by talking as they cross the Enchanted Ground.', [14, 15]],
  ['Beulah Land and the Celestial City', 'The last barrier is a river with no bridge. Christian begins to sink, and Hopeful holds up his head until they reach the other side. Shining Ones lead them up to the City, where they are welcomed with joy. Ignorance arrives as well, but he has no certificate and is turned away.', [16, 17]],
];

export function bookPage(): Page {
  const path = 'about-the-book/';
  const title = 'What Is The Pilgrim’s Progress About? Summary & Characters';
  const description = 'A clear summary of John Bunyan’s The Pilgrim’s Progress: the story from start to finish, the main characters, its meaning and sharing it with kids.';
  return {
    path, title, description,
    image: `${SITE}chapters/${CHAPTER_SLUGS[0]}.jpg`,
    data: [
      {
        '@context': 'https://schema.org', '@type': 'Article', headline: title, description, url: SITE + path, inLanguage: 'en',
        image: `${SITE}chapters/${CHAPTER_SLUGS[0]}.jpg`, author: { '@type': 'Person', name: 'Poporetto' },
        about: { '@type': 'Book', name: "The Pilgrim's Progress", author: { '@type': 'Person', name: 'John Bunyan' }, datePublished: '1678' },
      },
      crumbData(['Home', ''], ['About the book', path]),
    ],
    body: (root) => `<h1>What is The Pilgrim’s Progress about?</h1>
<p class="lead">The Pilgrim’s Progress is John Bunyan’s story of a man named Christian, who travels from the City of Destruction to the Celestial City and sets out with a heavy burden on his back. It is an allegory: the people and places stand for parts of the Christian life.</p>
<img class="hero" src="${root}chapters/${CHAPTER_SLUGS[0]}.jpg" width="1200" height="630" alt="Christian in the City of Destruction, from the Pilgrim’s Progress game">
<h2>About the author</h2>
<p>John Bunyan (1628–1688) was a tinker and preacher from Elstow, near Bedford in England. He spent about twelve years in Bedford jail for preaching without permission. The first part of The Pilgrim’s Progress was published in 1678. A second part, about Christian’s wife Christiana and their children, followed in 1684.</p>
<h2>The Pilgrim’s Progress summary</h2>
<p>Bunyan tells the story as a dream. This summary covers the first part, and includes the ending.</p>
${STORY.map(([h, t, ch]) => `<h3>${esc(h)}</h3>\n<p>${esc(t)}</p>\n<p class="more">Talk about it: ${ch.map((n) => `<a href="${root}${chapterPath(n)}">${esc(CHAPTER_GUIDES[n - 1].title)}</a>`).join(', ')}</p>`).join('\n')}
<h2>Main characters</h2>
<ul class="cast">${CAST.map(([img, n, t]) => `<li><img src="${root}portraits/${img}.webp" width="72" height="72" loading="lazy" alt="${esc(n)} as drawn in the game"><span><strong>${esc(n)}</strong>${esc(t)}</span></li>`).join('')}</ul>
<h2>What does it mean?</h2>
<p>The burden is sin and its guilt. Christian can’t remove it by trying harder; it falls away at the Cross. The rest of the road shows the life that follows: learning, hardship, temptation, friendship, doubt and hope, until the pilgrim reaches home with God.</p>
<h2>Is it suitable for children?</h2>
<p>Yes, with help. The original has old-fashioned language, some frightening scenes and Faithful’s death, so younger children usually meet it in a retelling. Our game and films tell it with animal characters and simple modern English.</p>
<p class="actions"><a class="btn" href="${root}">Play the free game</a><a class="btn soft" href="${root}episodes/">Watch the episodes</a><a class="btn soft" href="${root}family-guide/">Family Guide</a></p>`,
  };
}
