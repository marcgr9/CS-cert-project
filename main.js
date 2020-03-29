const RADIUS = 35
const INITIAL_VEL = 2
const VEL_OFFSET = 0.1
const RADIUS_OFFSET = 3
const MIN_SCORE = 1, MAX_SCORE = 10
const DEFAULT_SCORE = 5
const WIDTH = 720, HEIGHT = 720

let game, dom
let scoreToWin
let pImgs = []
let images = [], points = []
let sunete = []
let names = []
let keys = []

const playersCount = 2

const defaultNames = ["Jucator1", "Jucator2"]
const title = "Jocul lui marc"
const startGame = "Start joc"
const restartGame = "Joaca din nou"
const scoreText = "Scorul lui "
const won = " a castigat!"
const until = " pana la "

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

const errors = {
	PLAYERS_MISMATCH: "Number of players does not match",
	BAD_INPUT: "Numele jucatorilor nu sunt valide"
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
	initKeys()

	if (playersCount != pImgs.length || playersCount != keys.length || playersCount != defaultNames.length) {
		dom.displayError("PLAYERS_MISMATCH")
		noLoop()
		return
	}

	scoreToWin = DEFAULT_SCORE
	game = new Game()
	dom.initMainScreen()

	draw = function() {
		game.play()
	}
}
