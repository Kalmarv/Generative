function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  _points = random(1, 20)
  _nscale = random(1, 100)
  _bheight = random(1, 100)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(255)
  strokeWeight(px(0.3))
  stroke(0)
  noFill()

  basicGrid(10, 10, 1)
}

function basicGrid(rows, columns = rows, m = -1) {
  cw = w / rows
  ch = h / columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i <= m || j <= m || i >= rows - m - 1 || j >= columns - m - 1) {
        continue
      } else {
        push()
        translate(i * cw, j * ch)
        probf(
          0.5,
          () => wavyRect(0, 0, cw, ch, _points, _nscale, _bheight, frameCount / 100 + random(i * j)),
          () =>
            probf(
              0.5,
              () => lineVertex(0, 0, cw, ch, _points, _nscale, _bheight, frameCount / 100 + random(i * j)),
              () => lineVertex(0, ch, cw, 0, _points, _nscale, _bheight, frameCount / 100 + random(i * j))
            )
        )
        pop()
      }
    }
  }
}

function wavyRect(x1, y1, cw, ch, points, noiseScale, bumpHeight, offset) {
  lineVertex(0, 0, cw, 0, points, noiseScale, bumpHeight, offset)
  lineVertex(cw, 0, cw, ch, points, noiseScale, bumpHeight, offset)
  lineVertex(cw, ch, 0, ch, points, noiseScale, bumpHeight, offset)
  lineVertex(0, cw, 0, 0, points, noiseScale, bumpHeight, offset)
}
