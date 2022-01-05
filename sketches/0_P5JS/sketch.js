/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
}
