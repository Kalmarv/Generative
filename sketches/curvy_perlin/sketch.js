function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  cols = choose(randcols)
  //ellipseMode(CORNER)
  totalRows = 30
  strokeWeight(px(0.05))
  noLoop()
}

function draw() {
  t = frameCount / 100
  background(choose(cols))
  randomSeed(seeed)
  noiseSeed(seeed)
  for (let k = 0; k < totalRows; k++) {
    ch = w / totalRows
    circs = floor(noise((k / totalRows) * 2) * floor(w / ch))
    push()
    translate((w - ch * circs) / 2, k * ch)
    basicGrid(1, circs, ch * circs, ch, k)
    pop()
  }
}

function basicGrid(rows, columns, maxWidth = w, maxHeight = h, lineNum) {
  cw = maxWidth / columns
  ch = maxHeight / rows
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
      push()

      fill(choose(cols))
      noiseScale = totalRows / 5

      r = map(noise(j / noiseScale, lineNum / noiseScale), 0, 1, -PI, PI)
      //rotate(r)

      translate(j * cw + cw / 2, i * ch + ch / 2)
      rotate(r)
      ellipse(0, 0, cw * r * 1.5, ch * r)
      pop()
    }
  }
}
