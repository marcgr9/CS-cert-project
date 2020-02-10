function arataTxt() {
  push();
  textSize(64);
  textStyle(BOLD);
  noStroke();
  fill(155, 66, 244, 75);
  text("Scor pentru victorie: " + scorPentruVictorie.value(), width/2, height/6);
  pop();
}
