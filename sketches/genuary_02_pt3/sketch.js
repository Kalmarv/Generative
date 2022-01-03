function preload() {
  img = loadImage("../../assets/pictures/david.png")
}

function setup() {
  img.resize(img.width / 4, 0)
  let params = getURLParams()
  urlSeed(params)
  imgscale = 16

  speed()
  createCanvas((w = img.width * imgscale), (h = img.height * imgscale))
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
  //image(img, 0, 0)
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
      rect(x * imgscale + cw * i, y * imgscale + ch * j, cw, ch)
    }
  }
}
