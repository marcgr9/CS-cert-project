// keys.js

function keyPressed() {
	if (keyCode === UP_ARROW) {
		game.p1.setDir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		game.p1.setDir(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		game.p1.setDir(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		game.p1.setDir(1, 0);
	} else if (keyCode === 87) {
		game.p2.setDir(0, -1);
	} else if (keyCode === 83) {
		game.p2.setDir(0, 1);
	} else if (keyCode === 65) {
		game.p2.setDir(-1, 0);
	} else if (keyCode === 68) {
		game.p2.setDir(1, 0);
	} else if (keyCode === 81) {
		game.p1.teleport()
	} else if (keyCode === 77) {
		game.p2.teleport()
	}
}