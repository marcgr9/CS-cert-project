class Mancare {
	arata(hrana) {
    imageMode(CENTER);
		image(hrana, this.pos.x, this.pos.y);
	}
	update() {
		sunet.play()
		this.pos = createVector(random(width), random(height));
	}
}

var mancare = new Mancare();
