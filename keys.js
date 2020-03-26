// keys.js

// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		game.players[0].setDir(0, -1);
// 	} else if (keyCode === DOWN_ARROW) {
// 		game.players[0].setDir(0, 1);
// 	} else if (keyCode === LEFT_ARROW) {
// 		game.players[0].setDir(-1, 0);
// 	} else if (keyCode === RIGHT_ARROW) {
// 		game.players[0].setDir(1, 0);
// 	} else if (keyCode === 87) {
// 		game.players[1].setDir(0, -1);
// 	} else if (keyCode === 83) {
// 		game.players[1].setDir(0, 1);
// 	} else if (keyCode === 65) {
// 		game.players[1].setDir(-1, 0);
// 	} else if (keyCode === 68) {
// 		game.players[1].setDir(1, 0);
// 	} else if (keyCode === 81) {
// 		game.players[0].teleport()
// 	} else if (keyCode === 77) {
// 		game.players[1].teleport()
// 	}
// }

function keyPressed() {
	keys.forEach((map, index) => {
		if (map.has(keyCode)) {
			game.players[index].action(map.get(keyCode))
		}
	})

}

function searchInMap(keyCode) {

}
