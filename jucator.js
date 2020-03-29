// jucator.js

class Jucator {
	constructor(tip, name) {
		this.tip = tip
		this.name = name
		this.r = RADIUS
		this.pos = createVector(random(WIDTH), random(HEIGHT))
		this.dir = createVector(0, 0)
		this.vel = INITIAL_VEL
		this.scor = 0
		this.teleporting = false
		this.img = pImgs[tip]
		this.img.resize(this.r, this.r)
	}

	show() {
		imageMode(CENTER)
		image(this.img, this.pos.x, this.pos.y)
		this.move()
		push()
		fill(255)
		textSize(12)
		textAlign(CENTER)
		text(names[this.tip], this.pos.x, this.pos.y - (this.r * 3/4))
		pop()
	}

	move() {
		this.pos.x += this.vel * this.dir.x
		this.pos.y += this.vel * this.dir.y
		if (this.pos.x < 0 || this.pos.x > width) this.pos.x = abs(this.pos.x-width)
		if (this.pos.y < 0 || this.pos.y > height) this.pos.y = abs(this.pos.y-height)

		if (game.state == states.PLAYING && this.ate()) {
			sunete[1].play()
			this.scor += game.mancare.points[game.mancare.index]
			if (this.scor >= scoreToWin) {
				game.end(this.tip)
				console.log("A castigat jucatorul " + this.tip)
			} else {
				let multiplier = (game.mancare.index + 1)
				this.vel -= VEL_OFFSET * multiplier
				this.setSize(this.r + RADIUS_OFFSET * multiplier)
				game.mancare.update()
			}
		}
	}

	remove() {
		// this.playerIndex = game.players.indexOf(this)

		// console.log(game.players.indexOf(this) == this.tip)

		if (game.winner > this.tip) {
			game.winner--
		}

		keys.splice(this.tip, 1)
		game.losers.splice(this.tip, 1)
		game.players.splice(this.tip, 1)

		delete this
		// delete this.playerIndex
	}

	eat(loser) {
		if (loser instanceof Jucator) {
			if (dist(this.pos.x, this.pos.y, loser.pos.x, loser.pos.y) <= (loser.r + this.r) / 2) {
				sunete[1].play()
				loser.remove()
			}
		}
	}

	setSize(r) {
		this.r = r
		this.img.resize(r, r)
	}

	action(action) {
		switch (action) {
			case actions.UP:
				this.dir = createVector(0, -1)
				break;
			case actions.DOWN:
				this.dir = createVector(0, 1)
				break;
			case actions.LEFT:
				this.dir = createVector(-1, 0)
				break;
			case actions.RIGHT:
				this.dir = createVector(1, 0)
				break;
			case actions.TELEPORT:
				this.teleport()
				break;
		}
	}

	ate() {
		return dist(this.pos.x, this.pos.y, game.mancare.pos.x, game.mancare.pos.y) < this.r / 2
	}

	teleport() {
		if (this.scor > 0 && game.state == states.PLAYING) {
			if (!this.teleporting) {
				let that = this
				this.teleporting = true
				this.scor--
				setTimeout(function() {
					sunete[0].play()
					that.pos = createVector(random(WIDTH), random(HEIGHT))
					that.vel += VEL_OFFSET
					that.setSize(that.r - RADIUS_OFFSET)
					that.teleporting = false
				}, 1000)
			}
		}
	}
}
