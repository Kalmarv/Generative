/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1, 1, WEBGL)
  pixelDensity(2)

  points = 3000
  r = px(25)
  stroke("#001d3d")
  strokeWeight(px(0.5))
}

function draw() {
  randomSeed(seeed)
  background("#f6eee3")
  lerpShape(ease(sin(frameCount / 100)))
}

function lerpShape(t) {
  beginShape(POINTS)
  for (i = 0; i < points; i++) {
    x = map(t, 0, 1, circlef(i)[0], squaref(i)[0])
    y = map(t, 0, 1, circlef(i)[1], squaref(i)[1])
    vertex(x, y, 0)
  }
  endShape()
}

function ease(n) {
  return 1 - pow(1 - n, 4)
}
function circlef(i) {
  a = sin(i) * r
  b = cos(i) * r
  return [a, b]
}

function squaref(i) {
  c = sin(random(i)) * r
  d = cos(random(i)) * r
  return [c, d]
}
