var imgMancare;
var scorPentruVictorie;
var scor = [0, 0];
var vel = [2, 2];
var dir;
var culori = [];
var telep = [false, false];
var gata = false;
var start = false;
var mancat = [false, false];

function preload() {
  imgMancare = loadImage('ext/files/rsz_mancare.png');
  imgMancare.resize(10, 10);
  dir = [createVector(0, 0), createVector(0, 0)];
}

function setup() {
  culori = [color(244, 188, 66), color(66, 244, 75)];
  createCanvas(1080, 720);
	B.construct(1); B2.construct(2);
	mancare.update();
  scorPentruVictorie = createSlider(1, 20, 5);
  scorPentruVictorie.position(20, height+10);
}

function draw() {
  if (start) scorPentruVictorie.remove();
	background(71);
	if (!gata) {
    mancare.arata(imgMancare);
  	B.mancat(mancare); B2.mancat(mancare);
  } else
    if (dist(B.pos.x, B.pos.y, B2.pos.x, B2.pos.y) <= 50)
      max(scor[0], scor[1]) == scor[0] ? mancat[1] = true : mancat[0] = true;

	B.misca(); B2.misca();
	B.arata(); B2.arata();
	B.afara(); B2.afara();
  B.gata(); B2.gata();
  if (!gata) arataTxt();
}
