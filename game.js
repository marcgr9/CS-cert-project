// game.js

let self

class Game {
	constructor() {		
		this.p1 = new Jucator(0)
		this.p2 = new Jucator(1)
		this.mancare = new Mancare()
		this.playing = false
		self = this
		print(this.playing)
	}
	
	play() {
		//console.log(this.playing)
		if (self.playing == true) {
			print("marc")//, self.canvas)
			self.canvas.background(71)
			self.mancare.show()
			self.p1.show()
			self.p2.show()
		}
	}
	
	end() {
		self.playing = false
		canvas.remove()
	}
	
	start() {
		print(self.playing)
		self.playing = true
		print(self.playing)
		self.canvas = createCanvas(WIDTH, HEIGHT)
		background(71)
	}
}