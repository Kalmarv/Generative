function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  strokeWeight(px(1))

  radius = px(25)
}

function draw() {
  noiseSeed(seeed)
  background(220)
  translate(w / 2, h / 2)

  let div = noise(frameCount / 200) * 30

  for (a = 0; a < TAU; a += TAU / div) {
    x = radius * cos(a)
    y = radius * sin(a)
    ellipse(x, y, x, y)
  }
}
