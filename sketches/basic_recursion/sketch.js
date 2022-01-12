/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  background(255)
  rectMode(CENTER)
  maxI = 8
  rot = 0
}

function draw() {
  background(255)
  translate(w / 2, h / 2)
  again(0, 0, 0, px(15))
  rot += 0.002
}

function again(x, y, i, s) {
  if (i < maxI) {
    i++
    strokeWeight(px(maxI - i) / 10)
    line(x, y, x + s, y + s)
    push()
    translate(x + s, y + s)
    rotate(PI * rot)
    again(0, 0, i, s * 1.1)
    pop()

    line(x, y, x - s, y - s)
    push()
    translate(x - s, y - s)
    rotate(-PI * rot)
    again(0, 0, i, s * 1.1)
    pop()
  }
}
