let a1
let a2
let a3
let a4
let x = 1
let y = 1

function setup() {
  let params = getURLParams()
  urlSeed(params)

  blendMode(HARD_LIGHT)
  background(0)
  ARCanvas(16, 9)
}

function draw() {
  randomSeed(seeed)
  a1 = random(-TAU, TAU)
  a2 = random(-TAU, TAU)
  a3 = random(-TAU, TAU)
  a4 = random(-TAU, TAU)

  if (frameCount < 2) {
    background(0)
  }

  if (frameCount > 150) {
    noLoop()
  }

  strokeWeight(px(0.1))
  for (i = 0; i < 1; i += random(0, 0.0005)) {
    var oldx = x
    var oldy = y
    x = Math.sin(a1 * oldx) * Math.cos(a1 * oldy) - Math.sin(a2 * oldx)
    y = Math.cos(a3 * oldx) - Math.cos(a3 * oldx) * Math.sin(a4 * oldy)
    var scalex = map(x, -2, 2, px(10), px(90))
    var scaley = map(y, -2, 2, py(10), py(90))
    stroke(map(oldx, -2, 2, 0, 255), map(oldy, -2, 2, 0, 255), 255, 50)
    point(scalex, scaley)
  }
}
