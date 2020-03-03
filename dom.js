// dom.js

class Dom {
	constructor() {
		console.log("print")
		let button = createButton()
		button.mousePressed(game.start)
	}
}