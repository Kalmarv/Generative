function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
  background(0)
  colorMode(HSB)
  noFill()
  stroke(255)
  strokeWeight(px(0.2))

  lines = 50
  xoff = 0
}

function draw() {
  noiseSeed(seeed)
  background(0, 0.05)
  xoff = xoff + 0.0075
  let nx = noise(xoff) * width
  let ny = noise(xoff + 5) * height
  let na = noise(xoff + 10) * width
  let nb = noise(xoff + 15) * height
  let nc = noise(xoff + 20) * width
  let nd = noise(xoff + 25) * height
  beginShape()
  vertex(nx, ny)
  vertex(na, nb)
  vertex(nc, nd)
  vertex(nx, ny)
  endShape()
}
