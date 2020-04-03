const v = '1.2'
const snapshot = '20w14d'

let game, dom
let scoreToWin
let pImgs = []
let images = [], points = []
let sunete = []
let names = []
let keys = []

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
	else offset = 300 // width of score alert or reset button

	let val = min(w - offset, h - 100) // -100 for padding

	if (val >= MIN_SIZE && val <= MAX_SIZE) {
		WIDTH = val
		HEIGHT = val

		if (game.state != states.NOT_STARTED) {
			resizeCanvas(WIDTH, HEIGHT)
			dom.resize(game.state)
			if (game.mancare.pos.x < 0 || game.mancare.pos.x > WIDTH) game.mancare.pos.x = abs(game.mancare.pos.x-WIDTH)
			if (game.mancare.pos.y < 0 || game.mancare.pos.y > HEIGHT) game.mancare.pos.y = abs(game.mancare.pos.y-HEIGHT)
		}
	}
}
