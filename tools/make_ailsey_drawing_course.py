from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit
from reportlab.lib.utils import ImageReader

OUT = "output/pdf/ailseys-drawing-adventure.pdf"
REFERENCE_GRID = "assets/drawing-course/lesson-reference-grid.png"
TECHNIQUE_GRID = "assets/drawing-course/technique-reference-grid.png"
COVER_ART = "assets/drawing-course/cover-ailsey.png"
W, H = A4
M = 42
PURPLE = HexColor("#7653A8")
LILAC = HexColor("#EDE4F7")
INK = HexColor("#342C3D")
PINK = HexColor("#F6DDEB")
MINT = HexColor("#DDF1E6")
GOLD = HexColor("#F6D77B")

pdfmetrics.registerFont(TTFont("BrushScript", "/System/Library/Fonts/Supplemental/Brush Script.ttf"))
pdfmetrics.registerFont(TTFont("NanumScript", "/System/Library/AssetsV2/com_apple_MobileAsset_Font7/6f4c91728bb824d6960725ec479c355eab7eeba8.asset/AssetData/NanumScript.ttc", subfontIndex=0))

LESSONS = [
    ("The Shape Safari", "Pencil", "Draw a Polar Bear", "Circle, oval and soft rectangles", "A polar bear appears when you turn simple shapes into a body, head, paws and face.", ["5 min: Warm up by filling a row with circles, ovals and bean shapes.", "8 min: Sketch a big oval body and a smaller round head. Keep the lines light.", "20 min: Add ears, a muzzle, four paws and a fluffy tail; use a centre line to place both eyes.", "12 min: Darken only your best lines, then add nose, eyes and short fur marks."], "Give your polar bear a scarf, a snowy home, or a polar-bear friend."),
    ("Rabbit Garden", "Pencil + marker", "Draw a Bouncy Rabbit", "Gesture lines and long ears", "A quick curved line can show a rabbit hopping, resting or listening.", ["5 min: Make ten long, curved hopping lines across the warm-up grid.", "8 min: Draw one curved action line, then place a tilted bean body and oval head on it.", "20 min: Add long ears, a small tail and feet that point the way the rabbit moves.", "12 min: Trace only the favourite lines with marker and add three simple garden clues."], "Put three clues in the garden: a carrot, a flower and a secret burrow."),
    ("Gentle Giants", "Pencil", "Draw a Giraffe", "Proportion and patterns", "Artists compare sizes: a giraffe's neck is much longer than its head is tall.", ["5 min: Draw tall and short rectangles side by side to practise comparing height.", "8 min: Build the giraffe from an oval head, two long neck lines and a big bean body.", "20 min: Add four legs, ears, little horns and one friendly eye; check the legs are similar lengths.", "12 min: Add spots that curve around the body, then make a simple ground line so it is not floating."], "Invent a giraffe pattern using hearts, stars, flowers or tiny moons."),
    ("Forest Spirits", "Watercolour + pencil", "A Totoro-Inspired Forest Friend", "Big-to-small shapes and watercolour washes", "Make an original round forest friend using the feeling of a cosy rainy-day adventure.", ["5 min: Paint three light puddles; touch their edges and watch the colours blend.", "8 min: Pencil a large egg body, small ears and a tiny leaf umbrella. Keep it simple.", "20 min: Wet one small area first, add pale paint, then tip the paper gently. Let it dry.", "12 min: Add eyes, whiskers and leaf details only when the paint feels dry to the touch."], "Draw what your forest friend keeps safe in its secret woodland."),
    ("Face Feelings", "Pencil + marker", "Create a Character Face", "Expression, eyes and eyebrows", "Eyebrows, eye shapes and mouths can tell a whole story.", ["5 min: Draw four eyebrow pairs: happy, worried, cross and surprised.", "8 min: Draw a circle with a very light cross; the eye line sits halfway down the face.", "20 min: Make four mini faces, changing only eyebrows, eyes and mouths to compare feelings.", "12 min: Choose one face and add hair, glasses or a hat; trace your final expression with marker."], "What happened just before your character made this face? Draw a speech bubble."),
    ("Character Body Lab", "Pencil", "Draw a Moving Character", "Stick figures, action and clothing", "A simple action line makes a character feel alive before the details arrive.", ["5 min: Draw five tiny stick figures doing different actions.", "8 min: Choose one action and make one long swoosh line from head to foot.", "20 min: Add a circle head, bean torso and simple tube arms and legs around the action line.", "12 min: Add an outfit that tells the story, then redraw the character in one new pose."], "Try a jumping, waving or carrying pose. Keep the head, hands and feet pointing in the action direction."),
    ("Flying Delivery", "Marker + watercolour", "A Little Delivery Adventure", "Storytelling with foreground and background", "A picture can show a beginning, middle and end without using many words.", ["5 min: Draw one tiny flying shape in three different directions.", "8 min: Add a horizon line, then draw your delivery hero above it on a broom, bike or friendly bird.", "20 min: Add a package, destination and one weather clue; make distant things smaller than the hero.", "12 min: Paint a pale sky wash first, then use marker only for the most important details."], "What is in the package? Add three tiny clues, but keep it a surprise."),
    ("Toy Shelf Heroes", "Marker", "Design Three Toy Characters", "Silhouettes and personality", "A silhouette is the outside shape of something. Make each toy easy to recognise from far away.", ["5 min: Fill three simple outline silhouettes: round, tall and wide.", "8 min: Choose a brave, silly and shy toy; give each one a different body shape.", "20 min: Add one clear prop to each toy: badge, cape, teacup, tool or backpack.", "12 min: Add faces last. Cover the faces with your hand: can you still recognise each silhouette?"], "Draw a label for their toy box and name their team."),
    ("Magic Nature", "Watercolour", "Paint a Purple Sunset", "Warm and cool colours", "Purple can be mixed or placed near blue and pink to make a calm evening picture.", ["5 min: Make a strip from pale purple to dark purple using more water on the left.", "8 min: Lightly pencil a horizon near the lower third of the page.", "20 min: Wet the sky once, add pink and purple, then stop touching it so the wash stays soft.", "12 min: When dry, add one dark tree or hill silhouette and a tiny animal or bird."], "Add a small animal silhouette exploring your sunset."),
    ("Weather Watchers", "Pencil + watercolour", "Draw Rain, Wind and Clouds", "Texture and mood", "Different marks can show different weather: dots, zigzags, swirls and long lines.", ["5 min: Make four texture boxes for rain, wind, fog and sunshine.", "8 min: Draw a simple park, street or hill with a big open sky and a horizon line.", "20 min: Choose one weather type and repeat its special mark across the sky in one direction.", "12 min: Add a soft watercolour sky, then make the foreground darker and clearer for contrast."], "How would your picture change if the weather suddenly became magical?"),
    ("My Story Map", "Any materials", "Plan a Picture Story", "Beginning, middle and end", "A story map helps you decide what happens before you start a big final picture.", ["5 min: Draw three tiny thumbnail boxes, each no bigger than your palm.", "8 min: Choose a hero, place and problem. Say the story aloud in one short sentence.", "20 min: Sketch a beginning, middle and end; keep the same hero easy to spot in every box.", "12 min: Circle your strongest plan and choose the pencil, marker or paint you will use next week."], "Tell an adult your story in three sentences: first, then, and finally."),
    ("Grand Gallery", "Mixed media", "Make Your Final Adventure Picture", "Combining everything you learned", "This is your chance to use shapes, action, expression, colour and storytelling together.", ["5 min: Choose one favourite warm-up and one thumbnail plan from the course.", "8 min: Lightly sketch the biggest shapes first: hero, place and problem.", "20 min: Add medium shapes, then small details. Use colour in light layers, letting paint dry between layers.", "12 min: Add a title, sign your artwork and share one thing you solved like a real artist."], "Create a tiny gallery label: Title, Artist Ailsey, and one sentence about your picture.")
]

def text(c, s, x, y, size=12, color=INK, font="Helvetica", maxw=None, leading=None):
    c.setFillColor(color); c.setFont(font, size)
    lines = simpleSplit(s, font, size, maxw) if maxw else [s]
    leading = leading or size * 1.3
    for line in lines:
        c.drawString(x, y, line); y -= leading
    return y

def footer(c, n):
    c.setStrokeColor(LILAC); c.line(M, 29, W-M, 29)
    c.setFont("Helvetica", 8); c.setFillColor(PURPLE)
    c.drawString(M, 17, "Ailsey's Drawing Adventure")
    c.drawRightString(W-M, 17, str(n))

def rounded_box(c, x, y, w, h, fill, stroke=None):
    c.setFillColor(fill); c.setStrokeColor(stroke or fill); c.roundRect(x, y, w, h, 12, fill=1, stroke=1)

def draw_star(c, x, y, r, color):
    c.setFillColor(color); c.setStrokeColor(color)
    p = c.beginPath()
    import math
    for i in range(10):
        a = math.pi/2 + i * math.pi/5
        rr = r if i % 2 == 0 else r*.43
        px, py = x + rr*math.cos(a), y + rr*math.sin(a)
        (p.moveTo if i == 0 else p.lineTo)(px, py)
    p.close(); c.drawPath(p, fill=1, stroke=0)

TECHNIQUES = [
    ("Build from shapes", "Light shapes first. Add details after the body feels right."),
    ("Use a gesture line", "A swoosh line shows where the animal is moving."),
    ("Compare sizes", "Check: is the neck taller than the head? Are the legs similar lengths?"),
    ("Paint a wash", "Water first, colour second. Let colours meet gently."),
    ("Change the eyebrows", "Tiny eyebrow changes make big feelings."),
    ("Find the action line", "Draw the body around one big moving line."),
    ("Show depth", "Big shapes near us; small shapes far away."),
    ("Test the silhouette", "A clear outside shape makes a character easy to spot."),
    ("Blend light to dark", "Start with pale colour. Add darker colour while the paper is damp."),
    ("Make weather marks", "Repeat marks to show rain, wind or sunshine."),
    ("Thumbnail first", "Try three tiny plans before choosing your favourite."),
    ("Work in layers", "Sketch, colour, details, then a proud signature."),
]

NOTICE = [
    ["Circle head + oval body", "Small ears and paws", "Soft snowy details"],
    ["Long ears point up", "Curved body shows the hop", "Flowers make a simple setting"],
    ["Very long neck", "Four legs are similar length", "Spots repeat across the body"],
    ["Round body is the biggest shape", "Umbrella makes a clear story clue", "Soft rain creates a cosy mood"],
    ["Eyebrows change the feeling", "Eyes can be open, small or wide", "Mouth shape tells us more"],
    ["Head, hands and feet point along the action", "Clothes can show personality", "Leave a little ground shadow"],
    ["Hero leans forward to show flying", "The parcel is the important prop", "Clouds and motion lines show movement"],
    ["Round, tall and wide make three silhouettes", "One feature makes each toy memorable", "Keep colours simple"],
    ["Light sky behind dark tree", "Purple and pink blend softly", "Tiny silhouette tells a story"],
    ["Dots and long lines can show rain", "Swirls can show wind", "Cloud shapes set the mood"],
    ["Each tiny frame has one big idea", "Same hero appears in every frame", "Place and problem change the story"],
    ["Big foreground shapes", "Characters look toward the adventure", "Layers of colour create depth"],
]

def technique_example(c, idx, y):
    name, tip = TECHNIQUES[idx-1]
    x, w, h = M, W-2*M, 140
    rounded_box(c, x, y-h, w, h, MINT)
    text(c, f"Technique focus: {name}", x+13, y-22, 12, PURPLE, "Helvetica-Bold")
    text(c, tip, x+13, y-43, 9, INK, maxw=245)
    # Use a matching raster mini-demonstration from the generated technique grid.
    source = ImageReader(TECHNIQUE_GRID)
    source_w, source_h = source.getSize()
    panel_w, panel_h = source_w / 3, source_h / 4
    col, row = (idx-1) % 3, (idx-1) // 3
    dx, dy, dw, dh = x+360, y-125, 110, 110
    scale = dw / panel_w
    c.saveState()
    clip = c.beginPath(); clip.rect(dx, dy, dw, dh); c.clipPath(clip, stroke=0, fill=0)
    source_y = source_h - (row + 1) * panel_h
    c.drawImage(source, dx - col*panel_w*scale, dy - source_y*scale, width=source_w*scale, height=source_h*scale, mask='auto')
    c.restoreState()
    c.setStrokeColor(PURPLE); c.setLineWidth(1); c.roundRect(dx,dy,dw,dh,7,fill=0,stroke=1)
    return
    base = y-91
    c.setStrokeColor(PURPLE); c.setLineWidth(1.4); c.setFillColor(white)
    if idx == 1:
        c.circle(x+75,base,18,fill=0,stroke=1); c.ellipse(x+104,base-16,x+164,base+16,fill=0,stroke=1)
        c.setStrokeColor(HexColor("#B7A4D0")); c.line(x+190,base,x+240,base)
        c.setStrokeColor(PURPLE); c.circle(x+278,base+7,17,fill=0,stroke=1); c.ellipse(x+292,base-14,x+350,base+15,fill=0,stroke=1); c.circle(x+267,base+25,5,fill=0,stroke=1)
    elif idx in (2,6):
        c.setStrokeColor(PURPLE); c.setDash(3,2); c.arc(x+55,base-24,x+165,base+30,205,130); c.setDash()
        c.circle(x+115,base+17,10,fill=0,stroke=1); c.line(x+108,base+7,x+83,base-13); c.line(x+108,base+7,x+138,base-12); c.line(x+93,base-6,x+75,base-26); c.line(x+128,base-6,x+150,base-22)
    elif idx == 3:
        for xx, hh in [(x+65,20),(x+105,48),(x+145,75)]: c.rect(xx,base-28,22,hh,fill=0,stroke=1)
        c.setFont("Helvetica",8); c.setFillColor(INK); c.drawString(x+195,base+15,"short") ; c.drawString(x+195,base-2,"medium"); c.drawString(x+195,base-19,"tall")
    elif idx in (4,9):
        c.setFillColor(HexColor("#D9CBF0")); c.circle(x+82,base,24,fill=1,stroke=0); c.setFillColor(HexColor("#B9D9F3")); c.circle(x+112,base,24,fill=1,stroke=0); c.setFillColor(HexColor("#E8B7D0")); c.circle(x+97,base+17,24,fill=1,stroke=0)
        c.setFont("Helvetica-Oblique",8); c.setFillColor(INK); c.drawString(x+150,base,"let colours touch")
    elif idx == 5:
        for xx, brow, mouth in [(x+70,5,8),(x+145,-4,-8),(x+220,0,0)]:
            c.circle(xx,base+8,23,fill=0,stroke=1); c.line(xx-12,base+19,xx-3,base+19+brow); c.line(xx+3,base+19+brow,xx+12,base+19); c.arc(xx-10,base-8,xx+10,base+3,180,mouth if mouth else 180)
    elif idx == 7:
        c.setFillColor(HexColor("#C9B6E2")); c.circle(x+82,base,29,fill=1,stroke=0); c.setFillColor(HexColor("#A47CCC")); c.circle(x+165,base,19,fill=1,stroke=0); c.setFillColor(PURPLE); c.circle(x+225,base,11,fill=1,stroke=0)
        c.setFont("Helvetica",8); c.setFillColor(INK); c.drawString(x+55,base-44,"near"); c.drawString(x+150,base-44,"middle"); c.drawString(x+214,base-44,"far")
    elif idx == 8:
        c.setFillColor(PURPLE); c.roundRect(x+66,base-25,42,52,8,fill=1,stroke=0); c.setFillColor(white); c.circle(x+87,base+8,5,fill=1,stroke=0)
        c.setStrokeColor(HexColor("#B7A4D0")); c.line(x+130,base,x+190,base); c.setFillColor(PURPLE); c.circle(x+220,base,24,fill=1,stroke=0); c.setFillColor(white); c.circle(x+212,base+7,4,fill=1,stroke=0)
    elif idx == 10:
        c.setStrokeColor(HexColor("#6FA8DC"));
        for xx in range(int(x+62),int(x+220),18): c.line(xx,base+25,xx-8,base-12)
        c.setStrokeColor(PURPLE); c.arc(x+240,base-6,x+280,base+25,20,120); c.arc(x+275,base-6,x+315,base+25,40,100)
    elif idx == 11:
        for n in range(3):
            xx=x+55+n*92; c.roundRect(xx,base-27,68,50,4,fill=0,stroke=1); c.circle(xx+18,base+7,7,fill=0,stroke=1); c.line(xx+25,base,xx+55,base-15+n*9)
    else:
        for n,label in enumerate(["1. sketch","2. colour","3. details"]):
            xx=x+55+n*100; c.setFillColor(white); c.roundRect(xx,base-25,70,48,6,fill=1,stroke=1); c.setFont("Helvetica",7); c.setFillColor(INK); c.drawCentredString(xx+35,base-37,label)
            if n==0: c.setStrokeColor(HexColor("#B7A4D0")); c.circle(xx+35,base,14,fill=0,stroke=1)
            elif n==1: c.setFillColor(HexColor("#D2BEE8")); c.circle(xx+35,base,14,fill=1,stroke=0)
            else: c.setFillColor(PURPLE); c.circle(xx+35,base,14,fill=1,stroke=0); c.setFillColor(white); c.circle(xx+29,base+4,2,fill=1,stroke=0)

def cover(c):
    c.drawImage(ImageReader(COVER_ART), 0, 0, width=W, height=H, mask='auto')
    # A soft shadow keeps the title legible while leaving the cover art completely open.
    c.setFillColor(white); c.setFont("NanumScript", 68); c.drawCentredString(W/2+1.5, 638-1.5, "Ailsey's")
    c.setFillColor(PURPLE); c.setFont("NanumScript", 68); c.drawCentredString(W/2, 638, "Ailsey's")
    c.setFillColor(white); c.setFont("NanumScript", 56); c.drawCentredString(W/2+1.5, 570-1.5, "Drawing Adventure")
    c.setFillColor(PURPLE); c.setFont("NanumScript", 56); c.drawCentredString(W/2, 570, "Drawing Adventure")
    c.setFillColor(INK); c.setFont("Times-Roman", 15); c.drawCentredString(W/2, 525, "12 playful lessons for a brilliant young artist")
    c.setFont("Times-Bold", 12); c.setFillColor(PURPLE); c.drawCentredString(W/2, 495, "Animals  -  Characters  -  Nature  -  Big imagination")
    footer(c,1); c.showPage()

def overview(c, page):
    c.setFillColor(PURPLE); c.rect(0,H-105,W,105,fill=1,stroke=0)
    c.setFillColor(white); c.setFont("Helvetica-Bold",25); c.drawString(M,H-62,"Welcome, Artist Ailsey!")
    y = H-140
    y = text(c,"Each chapter is one 45-minute adventure. An adult can read the prompts aloud, cheer you on, and help with water and clean-up. Keep every picture - your sketchbook is a record of your ideas growing.",M,y,12,maxw=W-2*M)
    y -= 16
    rounded_box(c,M,y-95,W-2*M,88,MINT)
    text(c,"A friendly 45-minute rhythm",M+16,y-25,14,PURPLE,"Helvetica-Bold")
    text(c,"5 min warm-up  |  10 min learn and watch  |  20 min draw  |  7 min creative challenge  |  3 min share",M+16,y-52,10,INK,maxw=W-2*M-30)
    y -= 135
    c.setFont("Helvetica-Bold",15); c.setFillColor(PURPLE); c.drawString(M,y,"Your 12 adventures")
    y -= 25
    for i,(title,mat,project,*_) in enumerate(LESSONS,1):
        col = LILAC if i%2 else PINK
        rounded_box(c,M,y-23,W-2*M,23,col)
        c.setFont("Times-Bold",10); c.setFillColor(PURPLE); c.drawString(M+10,y-15,f"{i:02d}")
        c.setFont("Times-Roman",10); c.setFillColor(INK); c.drawString(M+40,y-15,f"{title}: {project} ({mat})")
        y -= 25
    footer(c,page); c.showPage()

def lesson_page(c, idx, lesson, page):
    title, material, project, skill, intro, steps, challenge = lesson
    c.setFillColor(PURPLE); c.rect(0,H-118,W,118,fill=1,stroke=0)
    c.setFillColor(white); c.setFont("Helvetica-Bold",10); c.drawString(M,H-35,f"CHAPTER {idx:02d}")
    c.setFont("Helvetica-Bold",24); c.drawString(M,H-70,title)
    c.setFont("Helvetica",11); c.drawString(M,H-94,f"Today's project: {project}")
    y = H-150
    rounded_box(c,M,y-40,W-2*M,32,GOLD)
    c.setFillColor(INK); c.setFont("Helvetica-Bold",11)
    c.drawCentredString(W/2, y-20, f"You will learn: {skill}")
    y -= 65
    y = text(c,intro,M,y,12,maxw=W-2*M)
    y -= 16
    c.setFont("Helvetica-Bold",14); c.setFillColor(PURPLE); c.drawString(M,y,"Make it in 45 minutes")
    y -= 29
    for n,step in enumerate(steps,1):
        lines = simpleSplit(step, "Helvetica", 11, W-2*M-40)
        row_h = max(28, len(lines)*14 + 8)
        centre = y - row_h/2
        c.setFillColor(PURPLE); c.circle(M+11,centre,11,fill=1,stroke=0)
        c.setFillColor(white); c.setFont("Helvetica-Bold",10); c.drawCentredString(M+11,centre-3.5,str(n))
        c.setFillColor(INK); c.setFont("Helvetica",11)
        for line_no, line in enumerate(lines): c.drawString(M+34, y-15-line_no*14, line)
        y -= row_h
    technique_example(c, idx, 410)
    rounded_box(c,M,96,W-2*M,72,PINK)
    text(c,"Creative challenge",M+13,145,12,PURPLE,"Helvetica-Bold")
    text(c,challenge,M+13,124,10,INK,maxw=W-2*M-28)
    c.setFont("Helvetica-Bold",10); c.setFillColor(PURPLE); c.drawString(M,72,f"Materials: {material}")
    footer(c,page); c.showPage()

def activity_page(c, idx, lesson, page):
    title, material, project, skill, intro, steps, challenge = lesson
    c.setFillColor(LILAC); c.rect(0,H-75,W,75,fill=1,stroke=0)
    c.setFillColor(PURPLE); c.setFont("Helvetica-Bold",20); c.drawString(M,H-46,f"Chapter {idx:02d} studio page")
    c.setFont("Helvetica",10); c.setFillColor(INK); c.drawRightString(W-M,H-45,project)
    c.setFont("Helvetica-Bold",12); c.setFillColor(PURPLE); c.drawString(M,H-105,"Warm-up marks")
    c.setStrokeColor(HexColor("#CFC2DD")); c.setLineWidth(.8)
    grid_top, grid_bottom, cell_w, cell_h = H-130, H-202, 26, 18
    x_positions = list(range(int(M), int(W-M), cell_w)) + [int(W-M)]
    for x in x_positions: c.line(x,grid_bottom,x,grid_top)
    for i in range(5): c.line(M,grid_top-i*cell_h,W-M,grid_top-i*cell_h)
    c.setFont("Helvetica-Oblique",9); c.setFillColor(INK); c.drawString(M,H-215,"Try the warm-up from page 1 here. Quick marks are welcome!")
    c.setFont("Helvetica-Bold",12); c.setFillColor(PURPLE); c.drawString(M,H-245,"Main artwork")
    c.setStrokeColor(PURPLE); c.setLineWidth(1.2); c.roundRect(M,165,W-2*M,H-435,12,fill=0,stroke=1)
    c.setFont("Helvetica-Oblique",11); c.setFillColor(HexColor("#9F8FB5")); c.drawCentredString(W/2, (165+H-270)/2, "My drawing space")
    rounded_box(c,M,78,W-2*M,57,MINT)
    text(c,"I am proud because:",M+12,112,10,PURPLE,"Helvetica-Bold")
    c.setStrokeColor(INK); c.setLineWidth(.6); c.line(M+122,107,W-M-12,107)
    text(c,"Next time I want to try:",M+12,91,10,PURPLE,"Helvetica-Bold")
    c.line(M+145,86,W-M-12,86)
    footer(c,page); c.showPage()

def reference_page(c, idx, lesson, page):
    title, material, project, skill, intro, steps, challenge = lesson
    c.setFillColor(PINK); c.rect(0,H-88,W,88,fill=1,stroke=0)
    c.setFillColor(PURPLE); c.setFont("Helvetica-Bold",21); c.drawString(M,H-52,"Look, then draw")
    c.setFont("Helvetica",10); c.setFillColor(INK); c.drawRightString(W-M,H-51,f"Chapter {idx:02d}: {project}")
    c.setFont("Helvetica-Oblique",10); c.drawString(M,H-112,"This is one possible example. Yours can look completely different - that is the fun part!")
    # Display the matching cell from the original 3-column x 4-row generated reference grid.
    source = ImageReader(REFERENCE_GRID)
    source_w, source_h = source.getSize()
    panel_w, panel_h = source_w / 3, source_h / 4
    col, row = (idx-1) % 3, (idx-1) // 3
    dx, dy, dw, dh = 95, 284, 405, 405
    scale = dw / panel_w
    c.saveState()
    clip = c.beginPath(); clip.rect(dx, dy, dw, dh); c.clipPath(clip, stroke=0, fill=0)
    source_y = source_h - (row + 1) * panel_h
    c.drawImage(source, dx - col*panel_w*scale, dy - source_y*scale, width=source_w*scale, height=source_h*scale, mask='auto')
    c.restoreState()
    c.setStrokeColor(PURPLE); c.setLineWidth(1.5); c.roundRect(dx,dy,dw,dh,10,fill=0,stroke=1)
    c.setFont("Helvetica-Bold",14); c.setFillColor(PURPLE); c.drawString(M,245,"Three things to notice")
    bx, by, bw = M, 200, (W-2*M-24)/3
    for n, note in enumerate(NOTICE[idx-1]):
        xx = bx + n*(bw+12)
        rounded_box(c,xx,by,bw,35,LILAC)
        c.setFont("Helvetica-Bold",9); c.setFillColor(PURPLE); c.drawString(xx+9,by+20,str(n+1))
        text(c,note,xx+22,by+21,8,INK,maxw=bw-28,leading=9)
    rounded_box(c,M,112,W-2*M,58,MINT)
    text(c,"Try it your way",M+12,145,12,PURPLE,"Helvetica-Bold")
    text(c,"Copy one idea you like, then change at least one thing: the pose, place, colours, character or story.",M+12,125,9,INK,maxw=W-2*M-25)
    footer(c,page); c.showPage()

def main():
    c = canvas.Canvas(OUT,pagesize=A4)
    c.setTitle("Ailsey's Drawing Adventure")
    cover(c); overview(c,2)
    p=3
    for i,lesson in enumerate(LESSONS,1):
        lesson_page(c,i,lesson,p); reference_page(c,i,lesson,p+1); activity_page(c,i,lesson,p+2); p+=3
    c.save()

if __name__ == "__main__": main()
