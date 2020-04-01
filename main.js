const v = '1.2'
const snapshot = '20w14c'

const RADIUS = 35
const INITIAL_VEL = 2
const VEL_OFFSET = 0.1
const RADIUS_OFFSET = 3
const MIN_SCORE = 1, MAX_SCORE = 10
const DEFAULT_SCORE = 5
let WIDTH = 720, HEIGHT = 720
const MIN_SIZE = 400, MAX_SIZE = 720

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
const scoreSelectorText = "Scor: "

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
	BAD_INPUT: "Numele jucatorilor nu sunt valide",
	BAD_BROWSER: "Nu poti accesa jocul de pe mobil :(. <br/> In schimb poti vedea codul proiectului <a href=\"https://github.com/marcgr9/Joc_atestat\">aici</a>"
}

function preload() {
	images = [loadImage('/ext/files/mancare.png'), loadImage('/ext/files/mancare2.png')]
	pImgs = [loadImage('/ext/files/steve.png'), loadImage('/ext/files/alex.png')]
	sunete = [new Audio('ext/files/teleportat.mp3'), new Audio('ext/files/mancat.mp3')]

	pImgs.forEach(pic => {
		pic.resize(RADIUS, RADIUS)
	})

	window.onresize = function (){
		resizeScreen()
	}

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
	resizeScreen()
	dom.initMainScreen()

	draw = function() {
		game.play()
	}
}

function resizeScreen() {
	let w = window.innerWidth
	let h = window.innerHeight
	let offset = 0

	if (game.state != states.ENDED) offset = 200
	else offset = 300 // width of score or reset button

	let val = min(w - offset, h - 100) // -100 for padding

	if (val >= MIN_SIZE && val <= MAX_SIZE) {
		WIDTH = val
		HEIGHT = val

		if (game.state != game.NOT_STARTED) {
			resizeCanvas(WIDTH, HEIGHT)
			dom.resize(game.state)
			if (game.mancare.pos.x < 0 || game.mancare.pos.x > WIDTH) game.mancare.pos.x = abs(game.mancare.pos.x-WIDTH)
			if (game.mancare.pos.y < 0 || game.mancare.pos.y > HEIGHT) game.mancare.pos.y = abs(game.mancare.pos.y-HEIGHT)
		}
	}
}
