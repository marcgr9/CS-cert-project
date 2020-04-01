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
				.addClass('form-control')
				.size(150, 40)
				.attribute('placeholder', `Nume jucator ${i+1}`)
				.position(20, 80 + 50 * i)
				//.value(defaultNames[i])
		}

			// TODO: cauta o solutie mai eleganta

		createP(scoreSelectorText)
			.id('scoreSelectorText')
			.addClass('start')
			.position(20, 180)
			.style('font-size', '150%')

		createSlider(MIN_SCORE, MAX_SCORE, DEFAULT_SCORE, 1)
			.id('slider')
			.addClass('start')
			.addClass('form-control-range')
			.position(90, 195)
			.input(() => {
				scoreToWin = select('#slider').value()
				select('#startJoc').html(startGame + until + scoreToWin)
			})

		createButton(startGame + until + scoreToWin)
			.id('startJoc')
			.addClass('start')
			.addClass('btn btn-primary')
			.position(200, 100)
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
			.position(200, 150)
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
			createDiv()
				.id("score" + i)
				.addClass('inGame')
				.addClass('score')
				.addClass('alert alert-info')
				.position(WIDTH + 30, 100 + 80 * i)
		}

		resizeCanvas(WIDTH, HEIGHT)
		background(71)
	}

	initEndScreen() {
		createButton(restartGame)
			.id('reset')
			.addClass('end')
			.addClass('btn btn-success')
			.position(WIDTH + 50, 50)
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
		selectAll('.score').forEach((element, index) => {
			element.html(`${scoreText}  ${names[index]}: ${game.players[index].scor} / ${scoreToWin}`)
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

  resize(state) {
    if (state == states.PLAYING) {
      selectAll('.score').forEach((element, index) => {
        console.log(width)
  			element.position(WIDTH + 30, 100 + 80 * index)
  		})
    } else if (state == states.ENDED) {
      select('#reset')
        .position(WIDTH + 50, 50)
    }
  }
}
