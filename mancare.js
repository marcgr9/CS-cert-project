// mancare.js

class Mancare {
	constructor() {
		this.pos = createVector(random(width), random(height))
		this.index = 0
		this.imgs = images
		this.points = points
	}
	
	update() {
		this.pos = createVector(random(width), random(height))
		this.index = Math.floor(Math.random() * this.imgs.length)
	}
	
	show() {
		imageMode(CENTER)
		image(this.imgs[this.index], this.pos.x, this.pos.y)
	}
}