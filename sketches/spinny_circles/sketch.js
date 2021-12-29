function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  speed();
  ARCanvas(1, 1);

  runs = 250;
  spacing = px(0.35);

  strokeWeight(px(0.25));
  stroke(255);
}

function draw() {
  background(0);

  push();
  translate(width / 2, height / 2);
  for (var i = 0; i < runs; i++) {
    circle(i * spacing, 0, spacing);
    circle(0, i * spacing, spacing);
    circle(-i * spacing, 0, spacing);
    circle(0, -i * spacing, spacing);
    rotate(frameCount / 10);
  }
  pop();
}
