/// <reference path="../../lib/p5.global-mode.d.ts" />

function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  colorMode(HSB)
  noLoop()
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)

  ra = random(10, 300)
  rb = random(10, 300)
  rc = random(10, 300)

  rs = random(85, 100)
  rv = random(85, 100)

  for (x = 0; x < w; x++) {
    for (y = 0; y < h; y++) {
      x1 = map(x, 0, w, 0, 100)
      y1 = map(y, 0, w, 0, 100)
      col = warp(x1, y1, 0, ra, 0)
      col2 = warp(col[0], col[1], col[2], rb, 200)
      col3 = warp(col2[0], col2[1], col2[2], rc, 400)

      stroke(color(col3))
      point(x, y)
    }
  }
}

function warp(x, y, z, s, off) {
  n = noise(map(x, 0, w, 0, px(100)) / s, map(y, 0, w, 0, px(100)) / s, off)
  return [map(n, 0, 1, -100, 460), rs, rv]
}
