function preload() {
  img = loadImage("../../assets/pictures/david.png")
}

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  createCanvas((w = img.width * 4), (h = img.height * 4))
  noLoop()
  noStroke()
  noSmooth()

  bayer4x4 = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ]

  dark = 0
  light = 255
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  image(img, 0, 0)
  basicGrid(img.width, img.height)
}

function basicGrid(rows, columns = rows) {
  cw = w / rows
  ch = h / columns
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      colorz = img.get(i, j)[0]
      dithering(i, j, cw, ch, colorz)
    }
  }
}

function dithering(x, y, cw, ch, height) {
  cw = cw / 4
  ch = ch / 4
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      height < bayer4x4[i][j] * (255 / 16) ? fill(dark) : fill(light)
      rect(x * 4 + cw * i, y * 4 + ch * j, cw, ch)
    }
  }
}
