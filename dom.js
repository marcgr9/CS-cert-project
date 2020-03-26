// dom.js

class Dom {
	constructor() {
		createCanvas(0, 0)
	}

	initCanvas() {
		names[0] = select('#p1').value()
		names[1] = select('#p2').value()

		select('#title').remove()
		select('#p1').remove()
		select('#p2').remove()
		select('#startJoc').remove()

		createSpan('')
			.id('p1')
			.position(WIDTH + 60, 100)

		createSpan('')
			.id('p2')
			.position(WIDTH + 60, 140)

		resizeCanvas(WIDTH, HEIGHT)
		background(71)
	}

	createMainScreen() {
		this.createTitle()
		this.createInputs()
	}

	createEndScreen() {
		createButton(restartGame)
			.position(WIDTH + 50, 50)
			.id('reset')
			.size(100, 100)
			.mousePressed(() => {
				select('#reset').remove()
				setup()
			})

			select('#p1').remove()
			select('#p2').remove()
	}

	createTitle() {
		createSpan(title)
			.id('title')
			.position(20, 20)
			.style('font-weight', 'bold')
			.style('font-size', '200%')
	}

	createInputs() {
		createInput()
			.id('p1')
			.value(defaultNames[0])
			.position(20, 60)

		createInput()
			.id('p2')
			.value(defaultNames[1])
			.position(20, 80)

		createButton(startGame)
			.id('startJoc')
			.mousePressed(() => {
				game.start()
			})
			.position(200, 70)
	}

	displayScores() {
		select('#p1').html(scoreText + names[0] + ": " + game.players[0].scor + " / " + scoreToWin)
		select('#p2').html(scoreText + names[1] + ": " + game.players[1].scor + " / " + scoreToWin)
	}
}
