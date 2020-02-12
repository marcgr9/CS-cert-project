var imgMancare = [];
var scorPentruVictorie;
var scor = [0, 0];
var vel = [2, 2];
var dir;
var culori = [];
var telep = [false, false];
var gata = false;
var start = false;
var mancat = [false, false];
var castigator;
var inceput = 0
var g_height = 720
var g_width = 1080
var sunet, sunetTeleport, sunetScary
var mancaree

function preload() {
  imgMancare.push(loadImage('ext/files/rsz_mancare.png'));
    imgMancare.push(loadImage('ext/files/mancare2.png'));
	mancaree = imgMancare[0]
  sunet = loadSound('ext/files/mancat.mp3')
  sunetScary = loadSound('ext/files/scarySound.mp3')
  sunetTeleport = loadSound('ext/files/teleportat.mp3')
  dir = [createVector(0, 0), createVector(0, 0)];
}

function setup() {
	greeting = createElement('h2', 'Bile v mere');
	greeting.position(20, 5);
	
	jucator1 = createInput()
	jucator2 = createInput()
	jucator1.position(20, 50);
	jucator2.position(20, 50 + 50);
	
	scorPentruVictorie = createSlider(1, 20, 120);
	button = createButton('incepe');
	button.mousePressed(startJoc)
	button.position(20, 50 + 50 + 50)
	
	culori = [color(244, 188, 66), color(66, 244, 75)];
	B.construct(1); B2.construct(2);
	mancare.update();
}

function startJoc() {
	if (jucator1.value().length > 2 && jucator2.value().length > 2) {
		start = true;
		createCanvas(g_width, g_height)
		button.remove()
		scorPentruVictorie.remove()
		jucator1.remove()
		jucator2.remove()
		greeting.remove()
	}
}

function draw() {
  if (start) {
	background(71);
	if (!gata) {
		mancare.arata(mancaree);
		B.mancat(mancare); B2.mancat(mancare);
	} else {
		if (dist(B.pos.x, B.pos.y, B2.pos.x, B2.pos.y) <= 50)
		  max(scor[0], scor[1]) == scor[0] ? mancat[1] = true : mancat[0] = true;
	}
	
	B.misca(); B2.misca();
	B.arata(); B2.arata();
	B.afara(); B2.afara();
	B.gata(); B2.gata();
	if (!gata) arataTxt();
  }
}
