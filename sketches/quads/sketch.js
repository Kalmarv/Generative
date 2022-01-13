function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  //noLoop()
  ARCanvas(1, 1)
  randomSeed(seeed)
  cols = choose(randcols)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(choose(cols))
  strokeWeight(px(0.1))
  translate(w / 2, h / 2)

  for (let j = 0; j < 50; j++) {
    fill(choose(cols))
    bumpyLine(
      -width * 0.5,
      width * 0.5,
      24,
      map(j, 0, 50, px(5), px(56)),
      10,
      frameCount / 300 + j * 10
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
