function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)

  xoff = 0.0

  colorMode(HSB)
  background(0)
}

function draw() {
  noiseSeed(seeed)
  xoff = xoff + 0.005
  let nx = noise(xoff) * (width + width / 3)
  let ny = noise(xoff + 5) * (height + height / 3)
  let c = map(noise(xoff + 10), 0, 1, -100, 460)
  let s = px(50) * noise(xoff + 25)
  strokeWeight(px(0.03))
  fill(c, 100, 100)
  circle(nx, ny, s)
}
