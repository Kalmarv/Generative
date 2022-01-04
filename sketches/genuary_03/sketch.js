function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1, 1, WEBGL)
  angleMode(DEGREES)
  dark = "#242234"
  light = "#facab8"
  r = px(50)

  strokeWeight(px(0.25))
  density = 5
  points = 7500
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(dark)
  orbitControl(4, 4)

  stroke(0)
  fill(0)
  sphere(px((asdf = noise(frameCount / 200) * 25)))
  stroke("#52b69a")
  for (let j = 0; j < 5; j++) {
    push()
    prob() ? rotateX(random(1000) + frameCount) : nop()
    prob() ? rotateY(random(1000) + frameCount) : nop()
    galaxy2(sqrt(j))
    pop()
  }
  stroke(light)
  galaxy()
}

function galaxy() {
  beginShape(POINTS)
  for (let i = 0; i < points; i++) {
    scale = random(r)
    speed = random(0.25, 1)

    x = sin(i + frameCount * speed) * scale
    y = cos(i + frameCount * speed) * scale
    z = 2 * tan(sin(x) + cos(y)) * tan(scale) * (i / 10)
    vertex(x, y, z)
  }
  endShape()
}

function galaxy2(sdfg) {
  beginShape(POINTS)
  for (let i = 0; i < 3600; i++) {
    x = (sin(i + frameCount) * r) / sdfg
    y = (cos(i + frameCount) * r) / sdfg
    z = random(-asdf, asdf)
    vertex(x, y, z)
  }
  endShape()
}
