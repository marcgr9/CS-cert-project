// keys.js

function keyPressed() {
	if (game || game.state != states.NOT_STARTED) {
		keys.forEach((map, index) => {
			if (map.has(keyCode)) {
				game.players[index].action(map.get(keyCode))
			}
		})
	}
}

function initKeys() {
	keys = [
		new Map()
			.set(87, "up")
			.set(83, "down")
			.set(65, "left")
			.set(68, "right")
			.set(81, "tp"),

		new Map()
			.set(UP_ARROW, "up")
			.set(DOWN_ARROW, "down")
			.set(LEFT_ARROW, "left")
			.set(RIGHT_ARROW, "right")
			.set(77, "tp")
	]
}
