class Bila {
	construct(tip) {
		this.r = 32;
    this.tip = tip;
    switch (this.tip) {
      case 1: this.pos = createVector(width / 8, height/8); break;
      case 2: this.pos = createVector(width - width/8, height - height/8); break;
    }
	}
	misca() {
		this.pos.x += dir[this.tip-1].x * vel[this.tip-1];
		this.pos.y += dir[this.tip-1].y * vel[this.tip-1];
	}
	mareste() {
		this.r += 5;
	}
	arata() {
		if (!mancat[this.tip-1]) {
			noStroke();
	    fill(culori[this.tip-1]);
			ellipse(this.pos.x, this.pos.y, this.r);
			textSize(24);
			fill(255);
			textAlign(CENTER);
			text(scor[this.tip-1], this.pos.x, this.pos.y+8);
			fill(culori[this.tip-1]);
		}
	}
	afara() {
		if (this.pos.x < 0 || this.pos.x > width) this.pos.x = abs(this.pos.x-width);
		if (this.pos.y < 0 || this.pos.y > height) this.pos.y = abs(this.pos.y-height);
	}
	gata() {
		textSize(32);
		textAlign(CENTER);
		fill(culori[this.tip-1]);
		switch (this.tip) {
			case 1:
				if (vel[0] <= 0 || scor[0] >= scorPentruVictorie.value()) {
					// noLoop();
					sunetScary.loop()
					text(jucator1.value() + " A CASTIGAT", width/2, height/2);
					text("APASA R PENTRU A JUCA DIN NOU", width/2, height/4);
					gata = true;
					vel[0] = 4;
					this.r = 100;
				}
				break;
				case 2:
					if (vel[1] <= 0 || scor[1] >= scorPentruVictorie.value()) {
						// noLoop();
						sunetScary.loop()
						text(jucator2.value() + " A CASTIGAT", width/2, height/2);
						text("APASA R PENTRU A JUCA DIN NOU", width/2, height/4);
						gata = true;
						vel[1] = 4;
						this.r = 100;
					}
				break;
		}
	}
	mancat() {
		if (dist(this.pos.x, this.pos.y, mancare.pos.x, mancare.pos.y) < this.r/2) {
			mancare.update();
			this.mareste();
			//console.log("JUCATOR " + this.tip-1 + ":: " + ++scor[this.tip-1]);
			++scor[this.tip-1];
			vel[this.tip-1] -= 0.1;
		}
	}
}

function tp(B) {
	if (!gata) {
		B.r -= 5;
		B.pos.x = random(width);
		B.pos.y = random(height);
	}
}


var B = new Bila();
var B2 = new Bila();
