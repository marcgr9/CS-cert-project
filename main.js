let RADIUS = 35
let INITIAL_VEL = 2
let scoreToWin = 3
let pImgs = []
let game, dom
let images = [], points = []
let sunete = []
let WIDTH = 720
let HEIGHT = 720
let names = []

let keys = []

const players = 2

const defaultNames = ["Jucator1", "Jucator2"]
const title = "Jocul lui marc"
const startGame = "Start joc"
const restartGame = "Joaca din nou"
const scoreText = "Scorul lui "

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
	})


	sunete = [loadSound('ext/files/teleportat.mp3'), loadSound('ext/files/mancat.mp3')]
	points = [1, 2]
}

function setup() {
	dom = new Dom()
	game = new Game()

	initKeys()
	dom.createMainScreen()
}

function draw() {
	game.play()
}
