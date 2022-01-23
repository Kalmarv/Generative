function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  noStroke()
  //cols = choose(randcols)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(0)
  basicGrid(150)
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
        if ((i ^ j) % (frameCount % 150) == 0) {
          rect(0, 0, cw, ch)
        } else {
          //rect(cw * 0.1, ch * 0.1, cw * 0.9, ch * 0.9)
        }
        pop()
      }
    }
  }
}
