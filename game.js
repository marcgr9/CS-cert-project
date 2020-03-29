// game.js


class Game {
	constructor() {
		this.mancare = new Mancare()
		this.playing = false
		this.state = states.NOT_STARTED
		this.players = []
	}

	play() {
		if (this.state == states.PLAYING) {
			background(71)

			dom.displayScores()

			this.mancare.show()
			this.players.forEach(player =>
				player.show()
			)
		} else if (this.state == states.ENDED) {
			background(71)
			this.players[this.winner].show()

			this.players.forEach((player, index) => {
				if (index == this.winner) {
					this.losers.forEach(loser => {
						player.eat(this.players[loser])
					})
				} else {
					player.show()
				}
			})
			this.arataTextVictorie()
		}
	}

	end(winnerId) {
		this.winner = winnerId
		console.log(winnerId)
		this.losers = []
		for (let i = 0; i < playersCount; i++) {
			if (i != winnerId) {
				this.losers.push(i)
			}
		}

		this.mancare.remove()
		this.players[this.winner].vel = 7
		this.players[this.winner].setSize(100, 100)

		this.state = states.ENDED

		dom.initEndScreen()
	}

	start() {
		dom.initInGameScreen()
		this.players = [new Jucator(0, names[0]), new Jucator(1, names[1])]
		console.log(this.players.length)
		this.state = states.PLAYING
	}

	arataTextVictorie() {
	  push()
		textAlign(CENTER)
	  textSize(64)
	  textStyle(BOLD)
	  noStroke()
	  fill(155, 66, 244, 75)
	  text(this.players[this.winner].name + won, width/2, height/6)
	  pop()
	}
}
