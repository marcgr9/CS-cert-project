let RADIUS = 35
let INITIAL_VEL = 2
let pImgs
let game
let images, points
let sunete

function preload() {
	images = [loadImage('/ext/files/mancare.png'), loadImage('/ext/files/mancare2.png')]
	pImgs = [loadImage('/ext/files/steve.png'), loadImage('/ext/files/alex.png')]
	pImgs[0].resize(RADIUS, RADIUS)
	pImgs[1].resize(RADIUS, RADIUS)
	
	sunete = [loadSound('ext/files/teleportat.mp3'), loadSound('ext/files/mancat.mp3')]
	points = [1, 2]
}

function setup() {
	let jucator1 = new Jucator(0)
	let jucator2 = new Jucator(1)
	let mancare = new Mancare()
	game = new Game(jucator1, jucator2, mancare)
	createCanvas(720, 720)
}

function draw() {
	background(71)
	game.play()
}