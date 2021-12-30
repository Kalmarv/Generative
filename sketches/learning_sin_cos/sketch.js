function setup() {
  speed()
  ARCanvas(1, 1)

  background(0)
  angleMode(DEGREES)

  pointx = 0
  pointy = 0
  whiteWeight = px(0.6)
  greenWeight = px(0.4)
}

function draw() {
  stroke(255)
  strokeWeight(whiteWeight)
  translate(width / 2, height / 2)
  point(cos(pointx) * (frameCount / 10), (sin(pointy) * (frameCount / 10)) / 2)
  stroke(0, 225, 0)
  strokeWeight(greenWeight)
  point(cos(pointx) * (frameCount / 10), (-sin(pointy) * (frameCount / 10)) / 2)
  pointx += 1
  pointy += 1
}
