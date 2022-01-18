function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1, 1, WEBGL)
  randomSeed(seeed)
  noiseSeed(seeed)
  cols = choose(randcols)
  maxHeight = px(25)
  strokeWeight(px(0.2))
  pixelDensity(2)
  noiseScale = 2
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(choose(cols))
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, width * 2)
  rotateX(-PI / 3)
  rotateZ(PI / 4)

  translate(0, 0, -maxHeight / 2)
  basicGrid(20)
}

function basicGrid(rows, columns = rows) {
  cw = w / rows
  ch = h / columns
  for (let i = -rows / 2; i < rows / 2; i++) {
    for (let j = -columns / 2; j < columns / 2; j++) {
      push()
      translate(i * (cw / 2), j * (ch / 2))

      noiseX = map(i, -rows / 2, rows / 2, 0, 1)
      noiseY = map(j, -columns / 2, columns / 2, 0, 1)
      noiseZ = noise(noiseX * noiseScale, noiseY * noiseScale, frameCount / 500)
      blockHeight = noiseZ * maxHeight

      //fill(choose(cols))
      //fill(map(blockHeight, 0, maxHeight, 0, 255))
      from = cols[0]
      to = cols[cols.length - 1]
      blockColor = lerpColor(color(from), color(to), noiseZ)
      fill(blockColor)

      translate(0, 0, blockHeight / 2)
      box(cw * 0.45, ch * 0.45, blockHeight)
      pop()
    }
  }
}
