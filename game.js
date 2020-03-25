// game.js

let self

class Game {
	constructor() {
		this.p1 = new Jucator(0)
		this.p2 = new Jucator(1)
		this.mancare = new Mancare()
		this.playing = false
		self = this
	}

	play() {
			background(71)

			select('#p1').html("Scorul lui " + names[0] + ": " + self.p1.scor + " / " + scoreToWin)
			select('#p2').html("Scorul lui " + names[1] + ": " + self.p2.scor + " / " + scoreToWin)


			self.mancare.show()
			self.p1.show()
			self.p2.show()
	}

	end(winnerId) {
		// TODO:
		this.winner = (winnerId == 0)?this.p1:this.p2

		this.arataTxt(winnerId)

		dom.createEndScreen()
	}

	start() {
		self.playing = true
		dom.initCanvas()
	}

	isPlaying() {
		return self.playing
	}

	arataTxt(winnerId) {
	  push();
		textAlign(CENTER)
	  textSize(64);
	  textStyle(BOLD);
	  noStroke();
	  fill(155, 66, 244, 75);
	  text(names[winnerId] + " a castigat!", width/2, height/6);
	  pop();
	}
}
