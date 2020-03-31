// dom.js

/**
 *  3 screens:
 *		.start -> name0, name1, score, startButton
 *		.inGame -> score0, score1
 *		.end -> restartButton
 *
 *	canvas -> resized accordingly
 *	title -> always visible
 */

class Dom {
	constructor() {
		createCanvas(0, 0)
			.position(20, 70)
			.id('canvas')
	}

	initMainScreen() {
		for (let i = 0; i < playersCount; i++) {
			createInput()
				.id("name" + i)
				.addClass('name')
				.addClass('start')
				.position(20, 60 + 20 * i)
				.value(defaultNames[i])
		}

			// TODO: cauta o solutie mai eleganta

		createSlider(MIN_SCORE, MAX_SCORE, DEFAULT_SCORE, 1)
			.id('slider')
			.addClass('start')
			.position(20, 120)
			.input(() => {
				scoreToWin = select('#slider').value()
				select('#startJoc').html(startGame + until + scoreToWin)
			})

		createButton(startGame + until + scoreToWin)
			.id('startJoc')
			.addClass('start')
			.position(200, 70)
			.mousePressed(() => {
				if (isSafari()) {
 					new Audio('').play()
					console.log("safari detectat")
				}
				game.start()
			})

		createSpan('')
			.id('error')
			.addClass('start')
			.position(200, 110)
			.style('color', '#ff0000')
	}

	initInGameScreen() {
		scoreToWin = select('#slider').value()

		selectAll('.name').forEach((element, index) => {
			names[index] = element.value()
		});
		let ok = true
		names.forEach(name => {
			if (name.length < 3 || name.length > 16) {
				this.updateErrorField(errors.BAD_INPUT)
				ok = false
			}
		})

		if (isMobile()) {
			this.updateErrorField(errors.BAD_BROWSER)
			this.showGitHub()
			ok = false
		}

		if (!ok) return

		selectAll('.start').forEach(element => {
			element.remove()
		})

		for (let i = 0; i < playersCount; i++) {
			createSpan('')
				.id("score" + i)
				.addClass('inGame')
				.addClass('scores')
				.position(WIDTH + 60, 100 + 40 * i)
		}

		resizeCanvas(WIDTH, HEIGHT)
		background(71)
	}

	initEndScreen() {
		createButton(restartGame)
			.id('reset')
			.addClass('end')
			.position(WIDTH + 50, 50)
			.size(100, 100)
			.mousePressed(() => {
				selectAll('.end').forEach(element => {
					element.remove()
				})
				setup()
			})

			selectAll('.inGame').forEach(element => {
				element.remove()
			})
	}

	displayScores() {
		selectAll('.inGame').forEach((element, index) => {
			element.html(scoreText + names[index] + ": " + game.players[index].scor + " / " + scoreToWin)
		})
	}

	updateErrorField(error) {
		select('#error')
			.html(error)
	}

	displayError(errorCode) {
		selectAll('.start').forEach(element => {
			element.remove()
		})

		createP(`A aparut o eroare: ${errorCode}`)
			.position(20, 60)
	}
}
