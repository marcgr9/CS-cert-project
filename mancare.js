// mancare.js

class Mancare {
	constructor() {
		this.pos = createVector(random(WIDTH), random(HEIGHT))
		this.index = 0
		this.imgs = images
		this.points = points
	}

	update() {
		this.pos = createVector(random(WIDTH), random(HEIGHT))
		this.index = Math.floor(Math.random() * this.imgs.length)
	}

	show() {
		imageMode(CENTER)
		image(this.imgs[this.index], this.pos.x, this.pos.y)
	}

	remove() {
		this.pos = createVector(-10, -10)
	}
}
