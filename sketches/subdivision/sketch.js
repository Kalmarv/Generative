const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: false,
})

pane.on("change", (ev) => {
  clear()
  redraw()
})

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

  p = {
    depth: 10,
    xconstrain: 1,
    yconstrain: 1,
    minRangeX: 0.1,
    maxRangeX: 0.9,
    minRangeY: 0.1,
    maxRangeY: 0.9,
  }

  pane.addInput(p, "depth", { min: 0, max: 20, step: 1, label: "Recursion Depth" })
  pane.addInput(p, "xconstrain", { min: 0, max: 100, label: "X Constraint" })
  pane.addInput(p, "yconstrain", { min: 0, max: 100, label: "Y Constraint" })
  pane.addInput(p, "minRangeX", { min: 0, max: 1, label: "Min Range X" })
  pane.addInput(p, "maxRangeX", { min: 0, max: 1, label: "Max Range X" })
  pane.addInput(p, "minRangeY", { min: 0, max: 1, label: "Min Range Y" })
  pane.addInput(p, "maxRangeY", { min: 0, max: 1, label: "Max Range Y" })
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  rect(0, 0, w, h)
  splitIt(0, 0, w, h, p.depth)
}

splitIt = (x1, y1, x2, y2, depth) => {
  let maxWidth = x2 - x1
  let maxHeight = y2 - y1
  let randomX = random(p.minRangeX, p.maxRangeX)
  let randomY = random(p.minRangeY, p.maxRangeY)
  if (depth > 0 && maxWidth > px(p.xconstrain) && maxHeight > px(p.yconstrain)) {
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
