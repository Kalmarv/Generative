/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  //noLoop()
  ARCanvas(16, 9)
  randomSeed(seeed)
  a = cryptoRandom()
  speeed = 10000
}

function draw() {
  if (frameCount % speeed == 0) {
    a = cryptoRandom()
  }
  randomSeed(floor(a + frameCount / speeed))
  noiseSeed(seeed)
  cols = choose(randcols)
  background(choose(cols))
  strokeWeight(px(0.1))
  translate(w / 2, h / 2)

  for (let j = 0; j < 50; j++) {
    fill(choose(cols))
    bumpyLine(
      -width * 0.45,
      width * 0.45,
      36,
      map(j, 0, 50, px(5), px(35)),
      10,
      frameCount / 500 + j * 10
    )
  }
}

function bumpyLine(x1, x2, points, bumpScale, noiseScale, offset) {
  beginShape(QUADS)
  for (i = 0; i < points; i++) {
    x = map(i, 0, points - 1, x1, x2)
    y = map(noise(offset + i / noiseScale), 0, 1, -bumpScale, bumpScale)
    vertex(x, y)
  }
  endShape()
}
