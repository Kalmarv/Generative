function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  cols = createCols("https://coolors.co/1d3461-1f487e-376996-6290c8-829cbc")
  background(0)
  snakes = []
  ellipseMode(CENTER)
}

function draw() {
  noStroke()
  background(0, 17)
  snake(10, 0, 0.02)
}

class Snake {
  constructor(_x, _y, _cs, _col) {
    this.x = _x
    this.y = _y
    //this.cs = _cs
    this.dir = floor(random(4))
    this.col = _col
    this.speed = random(0, cs * 0.7)
    this.cs = random(_cs, _cs * 1.5)
  }

  show() {
    fill(this.col)
    ellipse(this.x, this.y, this.cs)
  }

  wander() {
    // 0-3 = N,W,S,E
    if (this.x < 0) {
      this.x = w
    }
    if (this.x > w) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = y
    }
    if (this.y > h) {
      this.y = 0
    }

    if (this.dir == 0) {
      this.y += this.speed
    }
    if (this.dir == 1) {
      this.x += this.speed / 10
      this.y += this.speed / 20
    }
    if (this.dir == 2) {
      this.y += this.speed
    }
    if (this.dir == 3) {
      this.x -= this.speed / 10
      this.y += this.speed / 20
    }
  }

  decide() {
    prob(0.1) ? (this.dir = changeDir(this.dir)) : nop()
    prob(0.01) ? (this.speed = random(1, cs * 0.7)) : nop()
  }
}

function changeDir(dir) {
  let newDir
  if (dir == 0) {
    prob() ? (newDir = 3) : (newDir = 1)
  } else if (dir == 3) {
    prob() ? (newDir = 2) : (newDir = 0)
  } else {
    prob() ? (newDir = dir - 1) : (newDir = dir + 1)
  }
  return newDir
}

function snake(cs, margin, chance) {
  grid = badGrid(cs, margin)
  if (frameCount == 1) {
    for (i = 0; i < grid.length; i++) {
      x = grid[i][0]
      y = grid[i][1]
      prob(chance) ? snakes.push(new Snake(x, y, cs, choose(cols))) : nop()
    }
  }

  for (i = 0; i < snakes.length; i++) {
    snakes[i].show()
    snakes[i].decide()
    snakes[i].wander()
  }
}
function badGrid(cellSize = 100, m = 100) {
  cs = cellSize
  res = new Array([])
  for (
    var x = (width % cs) / 2 + m / 2;
    x < width - m / 2 - (width % cs);
    x += cs
  ) {
    for (
      var y = (height % cs) / 2 + m / 2;
      y < height - m / 2 - (height % cs);
      y += cs
    ) {
      res.push([x, y])
    }
  }
  return res
}
