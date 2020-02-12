function keyPressed() {
	if (keyCode === UP_ARROW) {
		dir[0].set(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		dir[0].set(0, 1);
	} else if (keyCode === LEFT_ARROW) {
		dir[0].set(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		dir[0].set(1, 0);
	} else if (keyCode === 87) {
		dir[1].set(0, -1);
	} else if (keyCode === 83) {
		dir[1].set(0, 1);
	} else if (keyCode === 65) {
		dir[1].set(-1, 0);
	} else if (keyCode === 68) {
		dir[1].set(1, 0);
	} else if (keyCode === 81) {
		if (scor[1] > 0) {
			if (!gata) {
				if (!telep[1]) {
					telep[1] = !telep[1];
					console.log("NR2--" + --scor[1]);
					setTimeout(function() {
						sunetTeleport.play()
						B2.r -= 5;
						B2.pos.x = random(width);
						B2.pos.y = random(height);
						telep[1] = !telep[1];
					}, 1000);
				}
			}
		}
	} else if (keyCode === 77) {
		if (!gata) {
			if (scor[0] > 0) {
				if (!telep[0]) {
					telep[0] = !telep[0];
					console.log("NR--" + --scor[0]);
					setTimeout(function() {
						sunetTeleport.play()
						B.r -= 5;
						B.pos.x = random(width);
						B.pos.y = random(height);
						telep[0] = !telep[0];
					}, 1000);
				}
			}
		}
	}
}
