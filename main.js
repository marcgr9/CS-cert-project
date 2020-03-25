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

function preload() {
	images = [loadImage('/ext/files/mancare.png'), loadImage('/ext/files/mancare2.png')]
	pImgs = [loadImage('/ext/files/steve.png'), loadImage('/ext/files/alex.png')]
	pImgs[0].resize(RADIUS, RADIUS)
	pImgs[1].resize(RADIUS, RADIUS)

	sunete = [loadSound('ext/files/teleportat.mp3'), loadSound('ext/files/mancat.mp3')]
	points = [1, 2]

}

function setup() {
	game = new Game()
	dom = new Dom()

	dom.createMainScreen()
}

function draw() {
	if (game.isPlaying()) {
		game.play()
	}

}
