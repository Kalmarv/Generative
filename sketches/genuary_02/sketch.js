function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
  noStroke()
  noSmooth()

  dark = "#001219"
  light = "#ffe8d6"

  bayer4x4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ]
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  basicGrid(30)
}

function basicGrid(rows, columns = rows) {
  cw = w / rows
  ch = h / columns
  for (let i = 0; i < w; i += cw) {
    for (let j = 0; j < h; j += ch) {
      let x = map(i, 0, w, 0, px(100))
      let y = map(j, 0, h, 0, py(100))
      let noise1 = noise(
        frameCount / 200 + x / px(25),
        frameCount / 200 + y / px(25),
        frameCount / 75
      )
      let noiseLevel = map(noise1, 0, 1, -50, 375)
      //fill(noiseLevel)
      //rect(x, y, cw, ch)
      dithering(x, y, cw, ch, noiseLevel)
    }
  }
}

function dithering(x, y, cw, ch, height) {
  cw = cw / 4
  ch = ch / 4
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      height > bayer4x4[i][j] * (255 / 16) ? fill(dark) : fill(light)
      rect(x + cw * i, y + ch * j, cw, ch)
    }
  }
}
