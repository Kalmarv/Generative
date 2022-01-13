let cells = []
let cellCount = 200
let xoff = 0.0

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  colorMode(HSB)
  background(0)
  for (let i = 0; i < cellCount; i++) {
    cells[i] = new Cell(random(width), random(height))
  }
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)

  background(0, 0.075)
  stroke((frameCount / 5) % 360, 360, 360)
  strokeWeight(10)
  for (let i = 0; i < cells.length; i++) {
    cells[i].show()
    cells[i].move(i)
  }

  xoff += 0.02
}

class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  show() {
    point(this.x, this.y)
  }

  move(i) {
    this.x += noise(xoff + i * 5) * 5 - 0.5 * 5
    this.y += noise(xoff + i * 5 + 5) * 5 - 0.5 * 5
  }
}
function mousePressed() {
  mouseSpawn = new Cell(mouseX, mouseY)
  cells.push(mouseSpawn)
}
