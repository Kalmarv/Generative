function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  createCanvas((w = 800), (h = w))
  noLoop()
  stroke(255)
  strokeWeight(10)
}

function draw() {
  background(0)
  randomSeed(seeed)
  noiseSeed(seeed)
  basicGrid(5)
}

function basicGrid(rows, columns = rows) {
  cw = w / rows
  ch = h / columns
  for (let i = 0; i < w; i += cw) {
    for (let j = 0; j < h; j += ch) {
      if (i == 0 || j == 0 || i >= cw * rows - cw || j >= ch * columns - ch) {
        continue
      } else {
        random() > 0.5 ? fill(0) : fill(255)
        random() > 0.5
          ? line(
              i + cw / 2,
              j + cw / 2,
              i + cw / 2 + cw / 2,
              j + cw / 2 + cw / 2
            )
          : point(1000, 1000)
        random() > 0.5
          ? line(
              i + cw / 2,
              j + cw / 2,
              i + cw / 2 - cw / 2,
              j + cw / 2 - cw / 2
            )
          : point(1000, 1000)
        random() > 0.5
          ? line(
              i + cw / 2,
              j + cw / 2,
              i + cw / 2 + cw / 2,
              j + cw / 2 - cw / 2
            )
          : point(1000, 1000)
        random() > 0.5
          ? line(
              i + cw / 2,
              j + cw / 2,
              i + cw / 2 - cw / 2,
              j + cw / 2 + cw / 2
            )
          : point(1000, 1000)
        ellipse(i + cw / 2, j + cw / 2, cw * 0.75)
      }
    }
  }
}
