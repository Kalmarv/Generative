/// <reference path="../../lib/p5.global-mode.d.ts" />

let xoff = 0.0
let blobbies = []

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
  background(0)
  colorMode(HSB)
  noStroke()

  for (var i = 0; i < 10; i++) {
    blobbies[i] = new Blobbie(i * 5)
  }
}

function draw() {
  noiseSeed(seeed)
  background(0, 0.1)

  for (var i = 0; i < blobbies.length; i++) {
    blobbies[i].show()
  }

  xoff = xoff + 0.01
}

class Blobbie {
  constructor(offset) {
    this.x = random(width)
    this.y = random(height)
    this.offset = offset
  }

  show() {
    this.nx = noise(xoff + this.offset) * width
    this.ny = noise(xoff + this.offset * 2) * height
    this.c = map(noise(xoff + this.offset * 3), 0, 1, -100, 460)
    this.s = (height / 3) * noise(xoff + this.offset * 4)
    fill(this.c, 360, 360)
    circle(this.nx, this.ny, this.s)
  }
}
