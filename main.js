let RADIUS = 35
let INITIAL_VEL = 2
let scoreToWin = 3
let pImgs
let game, dom
let images, points
let sunete
let WIDTH = 720
let HEIGHT = 720
let context
let cv
let names = []

let keys = []

const states = {
	NOT_STARTED: "not_started",
	PLAYING: "playing",
	ENDED: "ended"
}

const actions = {
	UP: "up",
	DOWN: "down",
	LEFT: "left",
	RIGHT: "right",
	TELEPORT: "tp"
}

function preload() {
	images = [loadImage('/ext/files/mancare.png'), loadImage('/ext/files/mancare2.png')]
	pImgs = [loadImage('/ext/files/steve.png'), loadImage('/ext/files/alex.png')]

	pImgs.forEach(pic => {
		pic.resize(RADIUS, RADIUS)
	});


	sunete = [loadSound('ext/files/teleportat.mp3'), loadSound('ext/files/mancat.mp3')]
	points = [1, 2]

	keys = [
		new Map()
			.set(87, "up")
			.set(83, "down")
			.set(65, "left")
			.set(68, "right")
			.set(81, "tp"),

		new Map()
			.set(UP_ARROW, "up")
			.set(DOWN_ARROW, "down")
			.set(LEFT_ARROW, "left")
			.set(RIGHT_ARROW, "right")
			.set(77, "tp")
	]

}

function setup() {
	dom = new Dom()
	game = new Game()

	dom.createMainScreen()
}

function draw() {
	game.play()
}
