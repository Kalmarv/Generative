function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  noLoop()

  randomSeed(seeed)
  cols = choose(randcols)
}

function draw() {
  randomSeed(seeed)
  background(choose(cols))
  asdf(px(10), 0.65, px(10), px(0.1))
  asdf(px(5), 0.6, px(20), px(0.07))
  asdf(px(2.5), 0.35, px(40), px(0.05))
  asdf(px(1), 0.2, px(60), px(0.03))
}

function asdf(cs, chance, margin, strokeMult) {
  grid = badGrid(cs, margin)
  for (i = 0; i < grid.length; i++) {
    x = grid[i][0]
    y = grid[i][1]

    strokeWeight(random(1 * strokeMult, 5 * strokeMult))
    fill(choose(cols))
    prob(chance) ? rect(x, y, cs, cs, random(cs / 2)) : nop()
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
