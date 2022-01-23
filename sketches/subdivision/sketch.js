function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  cols = choose(randcols)
  noLoop()
  strokeWeight(px(0.1))
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  rect(0, 0, w, h)
  splitIt(0, 0, w, h, 10)
}

splitIt = (x1, y1, x2, y2, depth) => {
  let maxWidth = x2 - x1
  let maxHeight = y2 - y1
  let randomX = random(0.1, 0.9)
  let randomY = random(0.1, 0.9)
  if (depth > 0 && maxWidth > px(1) && maxHeight > px(1)) {
    probf(
      0.5,
      () => {
        // horizontal split
        //line(x1 + maxWidth * randomX, y1, x1 + maxWidth * randomX, y2)
        // left side
        fill(choose(cols))
        rect(x1, y1, x1 + maxWidth * randomX, y2)
        splitIt(x1, y1, x1 + maxWidth * randomX, y2, depth - 1)
        // right side
        fill(choose(cols))
        rect(x1 + maxWidth * randomX, y1, x1 + maxWidth, y2)
        splitIt(x1 + maxWidth * randomX, y1, x1 + maxWidth, y2, depth - 1)
      },
      () => {
        // vertical split
        //line(x1, y1 + maxHeight * randomY, x2, y1 + maxHeight * randomY)
        // left side
        fill(choose(cols))
        rect(x1, y1, x2, y1 + maxHeight * randomY)
        splitIt(x1, y1, x2, y1 + maxHeight * randomY, depth - 1)
        // right side
        fill(choose(cols))
        rect(x1, y1 + maxHeight * randomY, x2, y1 + maxHeight)
        splitIt(x1, y1 + maxHeight * randomY, x2, y1 + maxHeight, depth - 1)
      }
    )
  }
}
