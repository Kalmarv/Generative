function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  cols = choose(randcols)
  bg = cols[0]
  cols.splice(0, 1)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)

  background(bg + "0F")
  //noStroke()
  //noFill()
  stroke(choose(cols))

  translate(25, 25)
  makeGrid(100, 150)
  strokeWeight(px(0.2))
}

function makeGrid(cs, margin) {
  grid = arrGrid(cs, margin)
  for (i = 1; i < grid.length; i++) {
    x = grid[i][0]
    y = grid[i][1]

    push()
    fill(choose(cols) + "4F")
    translate(x, y)
    rotate(-PI / 2)
    rotate((x + y) / 4 / 200 + frameCount / 75)
    pointyCir(abs(sin(frameCount / 100)) * 3, 60)
    pop()
  }
}

function pointyCir(p, s) {
  beginShape()
  for (j = 0; j < p; j++) {
    let x = cos(map(j, 0, p, 0, TAU)) * s
    let y = sin(map(j, 0, p, 0, TAU)) * s
    vertex(x, y)
  }
  endShape(CLOSE)
}
