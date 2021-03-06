let a1
let a2
let a3
let a4
let range
let x = 1
let y = 1

function setup() {
  range = TAU
  a1 = 1.975467633517745
  a2 = 2.115029486376992
  a3 = 2.188931691610449
  a4 = 2.1854727170097394

  blendMode(HARD_LIGHT)
  background(0)
  ARCanvas(1, 1)
  strokeWeight(px(0.1))
}

function draw() {
  if (frameCount < 2) background(0)
  for (i = 0; i < 1; i += random(0, 0.0005)) {
    var oldx = x
    var oldy = y
    x = Math.sin(i * a1 * oldx) * Math.cos(a1 * oldy) - Math.sin(a2 * oldx)
    y = Math.cos(a3 * oldx) - Math.cos(a3 * oldx) * Math.sin(a4 * oldy)
    var scalex = map(x, -2, 2, w * 0.05, w * 0.95)
    var scaley = map(y, -2, 2, w * 0.05, w * 0.95)
    stroke(map(oldx, -2, 2, 0, 255), map(oldy, -2, 2, 0, 255), 255, 50)
    point(scalex, scaley)
  }
}
