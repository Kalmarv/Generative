/// <reference path="../../lib/p5.global-mode.d.ts" />

var t
const NUM_FRAMES = 250
const NUM_SUBSAMPLES = 5
const SHUTTER_ANGLE = 1
const CHROM_ANGLE = 2
const CHROM_DT = CHROM_ANGLE / NUM_FRAMES / 2
var preview = false
var colorsCS = ["#FF0000", "#00FF00", "#0000FF"]

function setup() {
  ARCanvas(1, 1)
  r = w / 3
  points = 64
}

function draw() {
  blendMode(BLEND)
  background(0)

  blendMode(ADD)
  for (let i = 0; i < NUM_SUBSAMPLES; i++) {
    push()
    t =
      map(
        frameCount - 1 + (i * SHUTTER_ANGLE) / NUM_SUBSAMPLES,
        0,
        NUM_FRAMES,
        0,
        1
      ) % 1
    fill(255)
    translate(w / 2, h / 2)
    for (let c = 0; c < 3; c++) {
      var tc = t - CHROM_DT * c
      colorc = color(colorsCS[c])
      colorc.setAlpha(255 / NUM_SUBSAMPLES)
      fill(colorc)

      // DRAW HERE
      for (let j = 0; j < points; j++) {
        push()
        a = map(
          easeInOutCubic(sin(tc * PI)),
          0,
          1,
          circlef(j)[0],
          circlef2(j)[0]
        )
        b = map(
          easeInOutCubic(sin(tc * PI)),
          0,
          1,
          circlef(j)[1],
          circlef2(j)[1]
        )
        ellipse(a, b, px(3))
        pop()
      }
    }
    pop()
  }
}

function circlef(i) {
  n = sin(map(i, 0, points, 0, TAU)) * r
  m = cos(map(i, 0, points, 0, TAU)) * r
  return [n, m]
}

function circlef2(i) {
  row = floor(i / sqrt(points))
  l = map(row, 0, floor(sqrt(points) - 1), -4, 4) * (r / 4)
  p = map(i % sqrt(points), 0, sqrt(points) - 1, -4, 4) * (r / 4)
  return [l, p]
}

function easeInOutCubic(n) {
  return n < 0.5 ? 4 * n * n * n : 1 - pow(-2 * n + 2, 3) / 2
}
