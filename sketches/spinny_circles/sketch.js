function setup() {
  angleMode(DEGREES)
  speed()
  ARCanvas(1, 1)

  runs = 250
  spacing = px(0.3)

  strokeWeight(px(0.75))
  stroke(255)
}

function draw() {
  background(0)

  push()
  translate(width / 2, height / 2)
  for (var i = 0; i < runs; i++) {
    point(i * spacing, 0)
    point(0, i * spacing)
    point(-i * spacing, 0)
    point(0, -i * spacing)
    rotate(frameCount / 10)
  }
  pop()
}
