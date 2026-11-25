"""Episode descriptions + parent guides.

One source of truth for:
  film/<ep>/description.md   plain text to paste into the video platform
  film/out/guides.html       the shareable guide page (all episodes)
  src/guides/episodes.json   the episode guides inside the game

Run:  python3 film/guides.py
Bible quotations: ESV (see ESV_NOTICE).
"""
import html
import json
import os

ROOT = os.path.dirname(os.path.abspath(__file__))


def stamp(ep, beat_id):
    """Chapter timestamp (m:ss) of a beat in the rendered episode."""
    path = os.path.join(ROOT, 'out', ep, 'timeline.json')
    tl = json.load(open(path))
    for b in tl['beats']:
        if b['id'] == beat_id:
            s = int(b['start'])
            return f'{s // 60}:{s % 60:02d}'
    raise KeyError(beat_id)


CREDITS = (
    "Based on John Bunyan's The Pilgrim's Progress (1678). Animated from the "
    "Pilgrim's Progress voxel adventure game. Character voices are computer-generated."
)

ESV_NOTICE = 'Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved.'

EPISODES = [
    {
        'id': 'ep1',
        'number': 1,
        'title': 'The Heavy Burden',
        'logline': 'Christian the bear carries a heavy burden he cannot take off. '
                   'A kind stranger named Evangelist points him toward a shining light, '
                   'and Christian runs for the gate, even when his neighbours chase after him.',
        'chapters': [('title', 'A city called Destruction'), ('cw1', 'Christian’s family'),
                     ('n3', 'Down the east road'), ('ev1', 'Meeting Evangelist'),
                     ('reveal', 'The shining light'), ('c1', 'Obstinate and Pliable give chase'),
                     ('n6', 'Through the gate')],
        'big_idea': 'Everyone carries a burden of wrong things they have done, and we cannot take it off by ourselves. '
                    'Jesus invites us to come to him.',
        'verses': [
            ('Matthew 11:28', 'Come to me, all who labor and are heavy laden, and I will give you rest.'),
            ('Psalm 119:105', 'Your word is a lamp to my feet and a light to my path.'),
            ('John 10:9', 'I am the door. If anyone enters by me, he will be saved.'),
        ],
        'meaning': [
            ('The burden', 'The heavy pack stands for sin: the wrong things we think, say and do, and the guilt that comes with them. '
             'Christian tries, but he cannot take it off himself. That is the whole problem of the story.'),
            ('The book', 'Christian learns about his burden by reading a book. In Bunyan’s story it is the Bible, '
             'which shows us both our need and God’s way out.'),
            ('Evangelist', 'His name means someone who brings good news. He doesn’t carry Christian; he points him to the way. '
             'God often uses people to show us where to look.'),
            ('The shining light and the Wicket Gate', 'Christian can’t see the gate yet, but he can see the light, so he walks toward what he can see. '
             'The light is God’s Word; the narrow gate is Jesus himself, the way in (John 10:9).'),
            ('Obstinate and Pliable', 'Two ways people respond. Obstinate refuses and mocks. Pliable gets excited about golden crowns, '
             'but he hasn’t thought about what following will cost. Episode 2 shows what happens to him.'),
            ('Leaving home', 'In the book, Christian’s wife Christiana and their children follow him later (that is Part Two). '
             'Following Jesus is about putting him first, not abandoning the people we love. Christian begs his family to come.'),
        ],
        'ask_young': [
            'What was on Christian’s back? How do you think it felt to carry it every day?',
            'Who helped Christian know which way to go?',
            'Christian couldn’t see the gate. What could he see?',
            'What did Obstinate do? What did Pliable do?',
        ],
        'ask_older': [
            'What do you think Christian’s burden stands for? Why couldn’t he take it off himself?',
            'Have you ever felt “heavy” inside after doing something wrong? What helped?',
            'Obstinate wanted Christian to stay where everything was familiar. Why is it hard to choose differently from your friends?',
            'Christian walked toward the light before he could see the gate. What does that teach about trusting God one step at a time?',
        ],
        'activity': 'Put a few heavy books or stones in a backpack. Let your child wear it while you talk: each one is like a wrong thing we’ve done. '
                    'Ask how it feels after a minute. Then take it off together and talk about Jesus inviting us to bring our burdens to him. '
                    'Tell them the story will show where Christian’s burden finally falls off.',
        'prayer': 'Dear God, thank you that you see the heavy things we carry. Thank you for sending Jesus to be the way to you. '
                  'Help us to keep our eyes on your light and follow you, even when others don’t. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #JohnBunyan',
    },
    {
        'id': 'ep2',
        'number': 2,
        'title': 'The Slough of Despond',
        'logline': 'Christian and Pliable are so busy dreaming about the golden city that they fall straight into a deep, muddy bog. '
                   'Pliable gives up and goes home, but Christian keeps struggling forward, until a kind helper named Help pulls him out.',
        'chapters': [('title', 'On the road together'), ('splash', 'Into the mud!'), ('climb', 'Pliable turns back'),
                     ('n3', 'Stuck and alone'), ('h1', 'Help arrives'), ('c11', 'On solid ground'),
                     ('n5', 'Onward to the light')],
        'big_idea': 'Following Jesus doesn’t mean life is always easy. When we feel stuck, scared or discouraged, '
                    'God doesn’t leave us there. He gives us his promises to stand on and sends help.',
        'verses': [
            ('Psalm 40:2', 'He drew me up from the pit of destruction, out of the miry bog, and set my feet upon a rock, making my steps secure.'),
            ('Isaiah 41:10', 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.'),
        ],
        'meaning': [
            ('The Slough of Despond', '“Despond” means losing hope. Help explains it: when someone first realises how much they need God, '
             'fears and doubts come rushing in and settle in this low place. Feeling discouraged doesn’t mean you’re on the wrong road.'),
            ('The Steps', 'Solid stones run through the middle of the bog, but Christian was too frightened to look for them. '
             'In Bunyan’s book the steps are God’s promises, the things that hold firm when our feelings sink.'),
            ('Pliable goes home', 'Pliable wanted crowns and adventure. When it got hard, he quit. Jesus describes this in the parable of the sower '
             '(Mark 4:16–17): some people receive the message with joy, but without roots they fall away when trouble comes.'),
            ('Help', 'Help stands for the help God gives, very often through other people. Christian couldn’t climb out alone, and the story doesn’t pretend he could.'),
            ('Still carrying the burden', 'Christian is rescued from the mud, but the burden is still on his back. '
             'Being helped through a hard time isn’t the same as being forgiven. That comes later, at the Cross.'),
        ],
        'ask_young': [
            'Why did Christian and Pliable fall into the mud?',
            'How did Pliable feel when he was covered in mud? What did he decide to do?',
            'Who helped Christian get out?',
            'Have you ever felt stuck or sad? Who helped you?',
        ],
        'ask_older': [
            'Pliable followed for the crowns and glory. Why do you think he gave up so quickly?',
            'Help asked why Christian didn’t look for the Steps. What are some of God’s promises you could “stand on” when you feel low?',
            'Who has been a “Help” to you? How could you be a Help to someone else this week?',
            'Christian was out of the mud but still carrying his burden. What’s the difference between being helped and being forgiven?',
        ],
        'activity': 'Make paper stepping stones and write one of God’s promises on each (try Isaiah 41:10, Psalm 40:2, Matthew 28:20, Hebrews 13:5). '
                    'Lay them across the floor as a path over the “bog”. Your child crosses by reading each promise aloud as they step on it.',
        'prayer': 'Dear God, when we feel stuck and sad, help us remember your promises. Thank you for the people you send to help us. '
                  'Make us good helpers for others, and help us keep going with you. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #SloughOfDespond',
    },
    {
        'id': 'ep3',
        'number': 3,
        'title': 'The Mountain of Fire',
        'logline': 'A smooth-talking gentleman named Mr. Worldly Wiseman offers Christian an easier way to get rid of his burden. '
                   'But the shortcut leads beneath a frightening mountain of fire, until Evangelist comes to find him.',
        'chapters': [('title', 'A fine gentleman'), ('w5', 'An easier road?'), ('n3', 'Mount Sinai'),
                     ('e1', 'Evangelist finds him'), ('e7', 'There is hope'), ('n4', 'Back to the true road')],
        'big_idea': 'We can’t get rid of our sin by trying harder to be good. God’s rules show us what is wrong, '
                    'but only God’s grace can take the burden away. When we wander, God calls us back.',
        'verses': [
            ('Ephesians 2:8–9', 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.'),
            ('Romans 3:20', 'Through the law comes knowledge of sin.'),
            ('1 John 1:9', 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.'),
        ],
        'meaning': [
            ('Mr. Worldly Wiseman', 'He sounds sensible and kind, and he offers exactly what Christian wants: no mud, a nice house, an easy fix. '
             'He stands for advice that makes sense by the world’s standards but leads away from God.'),
            ('Mr. Legality and Morality', 'Legality means “keeping the rules”. The idea is that if you are good enough, your burden will go away. '
             'Bunyan says no one has ever been set free that way.'),
            ('Mount Sinai', 'Sinai is where God gave the Ten Commandments. In the story the mountain shows Christian everything he has done wrong, '
             'but it cannot lift the burden. God’s law is good, and it shows us that we need a rescuer.'),
            ('Evangelist returns', 'Evangelist is honest about Christian’s mistake, but he doesn’t give up on him. '
             '“There is hope.” Turning around and going back to God’s way is what the Bible calls repentance.'),
        ],
        'ask_young': [
            'What did Mr. Worldly Wiseman promise Christian?',
            'How did Christian feel under the big mountain?',
            'What did Evangelist tell Christian to do?',
            'When you do something wrong, can you fix it all by yourself? Who can help?',
        ],
        'ask_older': [
            'Why did Mr. Worldly Wiseman’s idea sound so good? What made it wrong?',
            'Christian said, “I have not loved perfectly, spoken perfectly, or obeyed perfectly.” Can anyone? Why does that matter?',
            'What’s the difference between trying to be good so God will accept you, and being good because God already loves you?',
            'Evangelist said the true road was “exactly where you left it”. What does that tell us about coming back to God after we’ve wandered?',
        ],
        'activity': 'Draw a simple map with two roads: a pleasant, easy one that ends at a mountain, and a narrow one that leads to a gate. '
                    'Talk about shortcuts that look easy (blaming someone else, hiding a mistake) and what God’s way looks like instead (telling the truth, saying sorry).',
        'prayer': 'Dear God, thank you that we don’t have to earn your love. When we take the wrong road, please call us back like Evangelist did, '
                  'and help us turn around quickly. Thank you for your grace. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #GraceNotWorks',
    },
    {
        'id': 'ep4',
        'number': 4,
        'title': 'The Wicket Gate',
        'logline': 'Worried that he’ll be turned away, Christian finally reaches the little gate and knocks. '
                   'Goodwill, a great golden lion, throws it open, pulls him inside just as arrows fly from a dark castle, '
                   'and welcomes him onto the King’s Highway.',
        'chapters': [('title', 'The long, straight road'), ('n2', 'The Wicket Gate'), ('n3', 'Who knocks?'),
                     ('g3', 'Goodwill the lion'), ('volley', 'Arrows from the castle'), ('g5', 'Safe inside'),
                     ('g9', 'The King’s Highway')],
        'big_idea': 'Jesus welcomes everyone who comes to him, no matter how muddy their story is. '
                    'We don’t have to clean ourselves up first. We just knock.',
        'verses': [
            ('Matthew 7:7', 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.'),
            ('John 6:37', 'Whoever comes to me I will never cast out.'),
            ('John 10:28', 'No one will snatch them out of my hand.'),
        ],
        'meaning': [
            ('The Wicket Gate', 'A wicket gate is a small door set in a big wall. It stands for Jesus, the way in (John 10:9). '
             'It is narrow, but it is open to anyone who knocks.'),
            ('Christian’s worries', 'On the road he remembers every mistake and fears he’ll be turned away. '
             'Many people feel this way about coming to God. The gate answers the fear: “We turn no one away who knocks.”'),
            ('Goodwill', 'Goodwill is a lion, a picture of Jesus, the Lion of Judah (Revelation 5:5). He already knows Christian’s name '
             'and has been waiting for him. When Christian confesses where he has been, Goodwill isn’t angry: the door was made for the bruised and muddy.'),
            ('Beelzebub’s arrows', 'Beelzebub is a name for the devil. His arrows show that the enemy tries hardest to stop people right at the moment they come to Jesus. '
             'Goodwill pulls Christian in, and no arrow reaches past the wall.'),
            ('The burden stays on (for now)', 'Christian hopes to lose his burden at the gate, but Goodwill says, “Not here. Ahead is the place of rescue.” '
             'Bunyan is showing that coming to Jesus is the start of the road; at the Cross, Christian will see clearly what Jesus has done for him.'),
        ],
        'ask_young': [
            'What did the words above the gate say?',
            'How did Christian feel before he knocked? Why?',
            'Who opened the gate? What kind of animal was he?',
            'What did Goodwill do when the arrows came?',
        ],
        'ask_older': [
            'Christian was afraid his mistakes would keep the gate shut. What did Goodwill say about that?',
            'Why do you think the arrows started flying right when Christian reached the gate?',
            'Goodwill already knew Christian’s name. What does that tell us about how God knows us?',
            'Why didn’t the burden come off at the gate? What do you think will happen at “the place of rescue”?',
        ],
        'activity': 'Play “Knock and it will be opened”: one person waits behind a door, the other knocks and says one true thing about themselves, '
                    'even a mistake. Every single time, the door opens with a big welcome. Talk about how God always opens to us when we come to him.',
        'prayer': 'Dear Jesus, thank you that your door is open to everyone who knocks. Thank you that you know our names, '
                  'and that you keep us safe in your hands. Help us come to you just as we are. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #KnockAndItWillBeOpened',
    },
    {
        'id': 'ep5',
        'number': 5,
        'title': 'The Interpreter’s House',
        'logline': 'A wise old owl called the Interpreter shows Christian three strange rooms: a dusty floor that sweeping only makes worse, '
                   'two little bears named Passion and Patience, and a fire that keeps burning no matter how much water is poured on it.',
        'chapters': [('title', 'A warm cottage'), ('n2', 'The dusty room'), ('n3', 'Passion and Patience'),
                     ('n5', 'The fire that won’t go out'), ('n6', 'The secret oil')],
        'big_idea': 'God’s rules show us our sin, but only his grace can clean our hearts. '
                    'His gifts are worth waiting for, and Jesus keeps our faith burning even when we can’t see him at work.',
        'verses': [
            ('Ezekiel 36:25', 'I will sprinkle clean water on you, and you shall be clean.'),
            ('Matthew 6:20', 'Lay up for yourselves treasures in heaven, where neither moth nor rust destroys.'),
            ('Philippians 1:6', 'He who began a good work in you will bring it to completion at the day of Jesus Christ.'),
        ],
        'meaning': [
            ('The dusty room', 'The dust is sin hidden in the heart. Sweeping it (the Law) just stirs it up so you can see how much there is. '
             'Sprinkling water first (the good news of grace) is what settles it and makes the room clean. That’s why Christian couldn’t find rest at Mount Sinai.'),
            ('Passion and Patience', 'Passion wants everything right now, and soon has nothing. Patience waits and receives treasure that lasts. '
             'Bunyan uses them to compare living only for today with trusting God’s promises for the future.'),
            ('The fire and the hidden oil', 'The fire is God’s work of grace in a believer’s heart. The Devil keeps trying to put it out, '
             'but Christ secretly keeps pouring in oil, so it burns brighter. When faith feels weak, it may be that we can’t see the hand still feeding it.'),
            ('The Interpreter', 'He explains what Christian sees. Bunyan often pictured the Holy Spirit this way: helping us understand God’s truth.'),
        ],
        'ask_young': [
            'What happened when the little mouse swept the dusty floor? What made it clean?',
            'What did Passion want? What happened to all his treasures?',
            'Why didn’t the fire go out when the dark figure poured water on it?',
            'Who was pouring the oil?',
        ],
        'ask_older': [
            'The broom only stirred up the dust. How do God’s rules show us our sin without being able to take it away?',
            'Where do you see “Passion” thinking in everyday life (wanting things right now)? What helps us be patient?',
            'Have you ever felt like your faith was going out? What does the hidden oil tell you about those times?',
            'Why do you think Christ’s hand was hidden behind the wall?',
        ],
        'activity': 'Try the dust lesson for real: sprinkle a little flour on a tray and brush it with a dry brush (it puffs up), '
                    'then mist it with water first and wipe it (it cleans up). Talk about the difference between rules and grace.',
        'prayer': 'Dear God, thank you that your grace cleans our hearts in a way our own trying never could. Help us wait for the treasures that last, '
                  'and thank you that Jesus keeps our faith burning, even when we can’t see him. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #InterpretersHouse',
    },
    {
        'id': 'ep6',
        'number': 6,
        'title': 'The Knight, the Cage and the Dream',
        'logline': 'In the last rooms of the Interpreter’s House, Christian watches a brave knight fight his way into a shining palace, '
                   'meets a sad man locked in an iron cage, and hears about a dream that made a man tremble. Then he sets off down the road again.',
        'chapters': [('title', 'Deeper into the house'), ('n2', 'The palace and the guards'), ('n4', 'The brave knight'),
                     ('n6', 'The man in the iron cage'), ('n7', 'The dream'), ('n8', 'Goodbye, Interpreter')],
        'big_idea': 'Following Jesus takes courage, and it is worth it. Keep your heart soft toward God, '
                    'and when you go wrong, run straight back to him. Live each day ready to meet the King, with joy instead of fear.',
        'verses': [
            ('Acts 14:22', 'Through many tribulations we must enter the kingdom of God.'),
            ('Hebrews 3:13', 'Exhort one another every day… that none of you may be hardened by the deceitfulness of sin.'),
            ('1 John 1:9', 'If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.'),
            ('1 John 4:18', 'There is no fear in love, but perfect love casts out fear.'),
        ],
        'meaning': [
            ('The brave knight', 'Everyone in the crowd wants to go into the palace, but only one man writes down his name and pushes through. '
             'The Christian life has hard days. Jesus never promised it would be easy, but he did promise it would be worth it. '
             'The song from inside, “Come in, come in!”, is God’s welcome.'),
            ('The man in the iron cage', 'He didn’t fall all at once. He stopped watching over his heart, and one small wrong choice led to another until his heart felt hard. '
             'Bunyan gives him as a warning, not as the end of the story for anyone watching: the way to stay out of that cage is to keep a soft heart and run back to God quickly whenever we go wrong.'),
            ('The dream', 'The man dreamed of the day everyone will stand before God, and he wasn’t ready. '
             'The Interpreter doesn’t want Christian to be frightened. He wants him to live ready, trusting Jesus, so that day will be a day of joy.'),
            ('Leaving the house', 'Christian thanks the Interpreter and carries every lesson with him. He still has his burden, but the next episode brings him to the Cross.'),
        ],
        'ask_young': [
            'Why was everyone in the crowd afraid to go into the palace? What did the brave knight do?',
            'How do you think the man in the cage felt? What did the Interpreter say to do when we get something wrong?',
            'Why was the man in bed shaking?',
            'Which room do you think Christian will remember most? Which one will you remember?',
        ],
        'ask_older': [
            'What “guards” might try to stop someone from following Jesus today? What helps us keep going?',
            'The caged man said it was “one wrong choice… then another… then another.” What small choices help keep a heart soft toward God?',
            'Some people think about God’s judgment and feel only fear. How does knowing Jesus change that? (Read 1 John 4:18 together.)',
            'Christian said the dream made him “a little afraid… and very glad I’m on the King’s road.” How can both be true at the same time?',
        ],
        'activity': 'Make a “knight’s scroll”: write your name at the top of a piece of paper, like the knight at the writer’s table, '
                    'and underneath draw or write one brave thing you can do this week because you belong to Jesus. Put it somewhere you’ll see it.',
        'prayer': 'Dear Jesus, give us courage when following you is hard. Keep our hearts soft, and when we go wrong, help us run straight back to you. '
                  'Thank you that because of you we can look forward to meeting the King with joy. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #InterpretersHouse',
    },
    {
        'id': 'ep7',
        'number': 7,
        'title': 'The Cross',
        'logline': 'Christian climbs a sunny green hill with his heavy burden. He looks up at the Cross, the straps come loose, and the burden '
                   'rolls down into the empty tomb. Three Shining Ones bring him forgiveness, new clothes and a sealed scroll, and he goes on his way singing.',
        'chapters': [('title', 'Up the green hill'), ('n2', 'The Cross'), ('c3', 'The burden falls'), ('n4b', 'The empty tomb'),
                     ('n5', 'Three Shining Ones'), ('n7', 'Three leaps for joy')],
        'big_idea': 'Jesus carried our sin for us on the cross and rose again. Forgiveness is a gift we receive, not something we earn.',
        'verses': [
            ('1 Peter 2:24', 'He himself bore our sins in his body on the tree.'),
            ('Psalm 103:12', 'As far as the east is from the west, so far does he remove our transgressions from us.'),
            ('Isaiah 61:10', 'He has clothed me with the garments of salvation.'),
        ],
        'meaning': [
            ('The burden falls', 'Christian tried to lose it in the mud, under the mountain and at the gate. Here he only looks, and it falls. '
             'Bunyan wants us to see that guilt is taken away by what Jesus did, not by how hard we try.'),
            ('The empty tomb', 'The burden goes in and is never seen again. Jesus was buried and rose again, so the tomb is empty and the debt is finished.'),
            ('“Your sins are forgiven”', 'The first Shining One gives Christian peace. God doesn’t forgive with a frown.'),
            ('New clothes', 'His worn clothes are swapped for clean, shining ones. God doesn’t only take the bad away, he gives us Jesus’ goodness to wear.'),
            ('The mark and the scroll', 'The mark says Christian belongs to the King. The scroll is the King’s promise, to comfort him along the way and to hand in at the gate of the Celestial City.'),
        ],
        'ask_young': [
            'What happened when Christian looked up at the Cross?',
            'Where did the burden go? What was inside the tomb?',
            'What did the three Shining Ones give him?',
            'How many leaps for joy did Christian do? Can you do them too?',
        ],
        'ask_older': [
            'Why do you think Bunyan made the burden fall off by itself?',
            'Christian says, “He rose… and my guilt did not!” What does he mean?',
            'Forgiven, clothed and sealed: which of those gifts means the most to you, and why?',
            'Christian still has a long road ahead. What is different about walking it now?',
        ],
        'activity': 'Write something you are sorry about on a piece of paper, or draw it. Talk to God about it, then crumple it up and roll it down a ramp into a box “tomb”. '
                    'Read Psalm 103:12 together and do three leaps for joy.',
        'prayer': 'Thank you, Jesus, for carrying our sins on the cross and rising again. Thank you that we are forgiven, made new, and yours for ever. Amen.',
        'tags': '#PilgrimsProgress #BibleStoriesForKids #ChristianAnimation #KidsDevotional #TheCross',
    },
]


def description(ep):
    chapters = '\n'.join(f'{stamp(ep["id"], b)} {label}' for b, label in ep['chapters'])
    ref, text = ep['verses'][0]
    return (
        f"Pilgrim's Progress, Episode {ep['number']}: {ep['title']}\n\n"
        f"{ep['logline']}\n\n"
        f"{ep['big_idea']}\n\n"
        f"“{text}” ({ref}, ESV)\n\n"
        f"Chapters\n{chapters}\n\n"
        f"For parents: each episode has a free discussion guide with questions for ages 4–7 and 8–12, a family activity and a short prayer.\n\n"
        f"{CREDITS}\n{ESV_NOTICE}\n\n{ep['tags']}\n"
    )


def ready(ep):
    path = os.path.join(ROOT, 'out', ep['id'], 'timeline.json')
    return os.path.exists(path) and json.load(open(path)).get('engine') == 'chatterbox'


def main():
    eps = [e for e in EPISODES if ready(e)]
    for ep in eps:
        with open(os.path.join(ROOT, ep['id'], 'description.md'), 'w') as f:
            f.write(description(ep))
    # page data, consumed by the guide page template
    data = [{**ep, 'description': description(ep)} for ep in eps]
    tpl = open(os.path.join(ROOT, 'guides.template.html')).read()
    out = tpl.replace('/*__DATA__*/[]', json.dumps(data, ensure_ascii=False))
    os.makedirs(os.path.join(ROOT, 'out'), exist_ok=True)
    with open(os.path.join(ROOT, 'out', 'guides.html'), 'w') as f:
        f.write(out)
    # the same guides inside the game (Family Guide > Episodes)
    game = [{
        'title': e['title'], 'story': e['logline'], 'bigIdea': e['big_idea'], 'verses': e['verses'],
        'meaning': e['meaning'], 'young': e['ask_young'], 'older': e['ask_older'],
        'activity': e['activity'], 'prayer': e['prayer'],
    } for e in eps]
    with open(os.path.join(ROOT, '..', 'src', 'guides', 'episodes.json'), 'w') as f:
        json.dump(game, f, ensure_ascii=False, indent=1)
    print('episodes:', ', '.join(e['id'] for e in eps))


if __name__ == '__main__':
    main()
