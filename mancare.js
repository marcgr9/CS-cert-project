class Mancare {
	arata(hrana) {
    imageMode(CENTER);
		image(hrana, this.pos.x, this.pos.y);
	}
	update() {
		sunet.play()
					mancaree = imgMancare[floor(random(0,1.9))]

		this.pos = createVector(random(width), random(height));
	}
}

var mancare = new Mancare();
