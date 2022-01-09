/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  speed()
  ARCanvas(1, 1)
}

function draw() {
  background(0, 50)
  stroke(255)
  strokeWeight(px(0.3))
  translate(width / 2, height / 2)
  dotCircle(
    cos(frameCount / 40) * px(10),
    sin(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    sin(frameCount / 40) * px(10),
    cos(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    -cos(frameCount / 40) * px(10),
    -sin(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    -sin(frameCount / 40) * px(10),
    -cos(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    -cos(frameCount / 40) * px(10),
    sin(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    sin(frameCount / 40) * px(10),
    -cos(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    cos(frameCount / 40) * px(10),
    -sin(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
  dotCircle(
    -sin(frameCount / 40) * px(10),
    cos(frameCount / 40) * px(10),
    px(20),
    px(20)
  )
}

function dotCircle(x, y, r, detail) {
  push()
  translate(x, y)
  for (let i = 0; i < detail; i++) {
    rand = random(i)
    point(cos(rand) * r, sin(rand) * r)
  }
  pop()
}
