function setup() {
  let cnv = createCanvas(windowWidth * 1.1, windowHeight * 1.1)
  p5.DisableFriendlyErrors = true
  cnv.parent("bg-sketch")
  colorMode(HSB)

  start1 = random(360)
  start2 = random(360)
  speed = 400
  scale = width / 3
}

function draw() {
  noStroke()

  translate(width / 2, height / 2)
  x1 = cos(frameCount / speed) * scale
  y1 = sin(frameCount / speed) * scale
  x2 = -cos(frameCount / speed) * scale
  y2 = -sin(frameCount / speed) * scale

  // Debug for gradient stops
  // background(255)
  // stroke(0, 0, 0)
  // strokeWeight(10)
  // point(x1, y1)
  // point(x2, y2)

  let gradient = drawingContext.createLinearGradient(x1, y1, x2, y2)
  gradient.addColorStop(0, color((start1 + frameCount / 20) % 360, 50, 100))
  gradient.addColorStop(1, color((start2 + frameCount / 10) % 360, 50, 100))
  drawingContext.fillStyle = gradient

  rect(-width / 2, -height / 2, width, height)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
