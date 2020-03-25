// dom.js

class Dom {
	constructor() {
		createCanvas(0, 0)
	}

	initCanvas() {
		// removing unused dom elements
		names[0] = select('#p1').value()
		names[1] = select('#p2').value()

		select('#title').remove()
		select('#p1').remove()
		select('#p2').remove()
		select('#startJoc').remove()

		createSpan('')
			.id('p1')
			.position(WIDTH + 30, 20)

		createSpan('')
			.id('p2')
			.position(WIDTH + 30, 40)

		resizeCanvas(WIDTH, HEIGHT)
		background(71)
	}

	createMainScreen() {
		this.createTitle()
		this.createInputs()
	}

	createEndScreen() {
		createButton('Restart game')
			.position(WIDTH + 30, HEIGHT + 50)
			.id('reset')
			.mousePressed(() => {
				setup()
			})
	}

	createTitle() {
		createSpan('Titlu')
			.id('title')
			.position(20, 20)
			.style('font-weight', 'bold')
			.style('font-size', '200%')
	}

	createInputs() {
		createInput()
			.id('p1')
			.value('Jucator1')
			.position(20, 60)

		createInput()
			.id('p2')
			.value('Jucator2')
			.position(20, 80)

		createButton('startJoc')
			.id('startJoc')
			.mousePressed(() => {
				game.start()
			})
			.position(200, 70)
	}


}
