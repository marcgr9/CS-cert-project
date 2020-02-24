// game.js

class Game {
	constructor(jucator1, jucator2, mancare) {
		this.p1 = jucator1
		this.p2 = jucator2
		this.mancare = mancare
		this.playing = true
	}
	
	play() {
		this.mancare.show()
		this.p1.show()
		this.p2.show()
	}
	
	end() {
		this.playing = false
	}
}