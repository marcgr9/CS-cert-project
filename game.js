// game.js

let self

class Game {
	constructor() {
		this.mancare = new Mancare()
		this.playing = false
		this.state = states.NOT_STARTED
		this.players = []
		self = this
	}

	play() {
		if (self.state == states.PLAYING) {
			background(71)

			select('#p1').html("Scorul lui " + names[0] + ": " + self.players[0].scor + " / " + scoreToWin)
			select('#p2').html("Scorul lui " + names[1] + ": " + self.players[1].scor + " / " + scoreToWin)

			self.mancare.show()
			self.players.forEach(
				player => player.show()
			)
		} else if (self.state == states.ENDED) {
			background(71)
			this.arataTextVictorie()

			// console.log(self.winner, self.losers)
			self.players.forEach((player, index) => {
				player.show()
				if (index == self.winner) {
					self.losers.forEach((loser, _index) => {
						player.eat(self.players[loser])
					})

				}
			})
		}
	}

	end(winnerId) {
		self.winner = winnerId
		console.log(winnerId)
		self.losers = []
		for (let i = 0; i < self.players.length; i++) {
			if (i != winnerId) {
				self.losers.push(i)
			}
		}

		self.mancare.remove()
		self.players[self.winner].vel = 7
		self.players[self.winner].setSize(100, 100)

		self.state = states.ENDED

		dom.createEndScreen()
	}

	start() {
		dom.initCanvas()
		self.players = [new Jucator(0, names[0]), new Jucator(1, names[1])]

		self.state = states.PLAYING
	}

	arataTextVictorie() {
	  push();
		textAlign(CENTER)
	  textSize(64);
	  textStyle(BOLD);
	  noStroke();
	  fill(155, 66, 244, 75);
	  text(self.players[self.winner].name + " a castigat!", width/2, height/6);
	  pop();
	}
}
