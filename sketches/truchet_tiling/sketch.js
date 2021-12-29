function setup() {
  squareCanvas();
  angleMode(DEGREES);
  seeed = random(100000000000000);
}

function draw() {
  s = px(10);
  gridx = width / s;
  gridy = height / s;
  randomSeed(seeed);
  background(0);
  stroke(255);
  strokeWeight(px(0.5));
  noFill();
  drawSomething();
}

function drawSomething() {
  for (var i = 0; i < gridy; i++) {
    for (var j = 0; j < gridx; j++) {
      push();
      translate(s * j, s * i);
      prob()
        ? (arc(0, 0, s, s, 0, 90), arc(s, s, s, s, 180, 270))
        : (arc(0, s, s, s, 270, 0), arc(s, 0, s, s, 90, 180));

      pop();
    }
  }
}
