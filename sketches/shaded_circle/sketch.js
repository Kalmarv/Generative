/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  speed()
  ARCanvas(1, 1)
  noLoop()
  background("#ddbea9")
  stroke("#6b705c")
  strokeWeight(px(0.1))
}

function draw() {
  translate(width / 2, height / 2)
  translate(-50, 50)

  for (let i = 0; i < 100; i++) {
    translate(i / 100, -i / 100)
    dotCircle(0, 0, i * 2, i * 20)
  }
}

function dotCircle(x, y, r, detail) {
  push()
  translate(x, y)
  for (let i = 0; i < detail; i++) {
    rand = random(i + 1)
    point(cos(rand) * r, sin(rand) * r)
  }
  pop()
}
