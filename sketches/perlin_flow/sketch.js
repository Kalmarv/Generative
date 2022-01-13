const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: false,
})

let fillCol
let t

function setup() {
  let params = getURLParams()
  urlSeed(params)
  randomSeed(seeed)
  noiseSeed(seeed)
  speed()
  ARCanvas(1, 1)

  p = {
    cs: floor(random(10, 100)),
    blockw: random(0, 2),
    blockh: random(0, 2),
    strokew: random(0, 0.5),
    speed: random(0, 0.1),
    noises: random(0, 0.35),
    ratio: random(0, 1),
    showl: true,
    anim: true,
    shapes: floor(random(0, 2)), //0 - square, 1 - Ellipse
    seeed: seeed,
    cols: choose(randcols),
    rcol: floor(random(0, 2)),
    swn: floor(random(0, 2)),
    flowdir: floor(random(0, 8)),
  }

  t = 0
  rectMode(CENTER)
  pane.addInput(p, "cs", { min: 10, max: 100, label: "Grid Size" })
  pane.addInput(p, "blockw", { min: 0, max: 10, label: "Shape Width" })
  pane.addInput(p, "blockh", { min: 0, max: 10, label: "Shape Height" })
  pane.addInput(p, "swn", { label: "Change Size" })
  pane.addInput(p, "strokew", { min: 0, max: 5, label: "Stroke Weight" })
  pane.addInput(p, "speed", { min: 0, max: 1, label: "Animation Speed" })
  pane.addInput(p, "noises", { min: 0, max: 1, label: "Noise Scale" })
  pane.addInput(p, "ratio", { min: 0, max: 1, label: "Line/Shape Ratio" })
  pane.addInput(p, "shapes", { options: { Square: 0, Circle: 1 }, label: "Shape" })
  pane.addInput(p, "rcol", { label: "Random Colors" })
  pane.addInput(p, "showl", { label: "Show Lines" })
  pane.addInput(p, "anim", { label: "Animate" })
  pane.addInput(p, "flowdir", {
    options: {
      "Bottom to Top": 0,
      "Top to Bottom": 1,
      "Left to Right": 2,
      "Right to Left": 3,
      "Top Left to Bottom Right": 4,
      "Top Right to Bottom Left": 5,
      "Bottom Right to Top Left": 6,
      "Bottom Left to Top Right": 7,
    },
    label: "Flow Direction",
  })
  const randomizebtn = pane.addButton({
    title: "Randomize",
  })

  randomizebtn.on("click", () => {
    ;(p.cs = floor(random(10, 100))),
      (p.blockw = random(0, 2)),
      (p.blockh = random(0, 2)),
      (p.strokew = random(0, 0.5)),
      (p.speed = random(0, 0.1)),
      (p.noises = random(0, 0.35)),
      (p.ratio = random(0, 1)),
      (p.showl = true),
      (p.anim = true),
      (p.shapes = floor(random(0, 2))), //0 - square, 1 - Ellipse
      (p.seeed = seeed),
      (p.cols = choose(randcols)),
      (p.rcol = floor(random(0, 2))),
      (p.swn = floor(random(0, 2))),
      (p.flowdir = floor(random(0, 8)))
    clear()
    redraw()
    pane.refresh()
  })

  const savebtn = pane.addButton({
    title: "Save Image",
  })

  savebtn.on("click", () => {
    save(str(seeed) + ".png")
  })
}

function draw() {
  p.anim ? (t += 0.1) : (t = t)
  strokeWeight(px(p.strokew))
  randomSeed(p.seeed)
  background(choose(p.cols))
  fillCol = choose(p.cols)
  makeGrid(p.cs, -px(20))
}

function makeGrid(cs, margin) {
  grid = badGrid(cs, margin)
  for (i = 1; i < grid.length; i++) {
    x = grid[i][0]
    y = grid[i][1]

    switch (p.flowdir) {
      case 0:
        r = map(noise(((p.seeed + x) / cs) * p.noises, ((p.seeed + y) / cs) * p.noises + t * p.speed), 0, 1, -PI, PI)
        break
      case 1:
        r = map(noise(((p.seeed + x) / cs) * p.noises, ((p.seeed + y) / cs) * p.noises - t * p.speed), 0, 1, -PI, PI)
        break
      case 2:
        r = map(noise(((p.seeed + x) / cs) * p.noises - t * p.speed, ((p.seeed + y) / cs) * p.noises), 0, 1, -PI, PI)
        break
      case 3:
        r = map(noise(((p.seeed + x) / cs) * p.noises + t * p.speed, ((p.seeed + y) / cs) * p.noises), 0, 1, -PI, PI)
        break
      case 4:
        r = map(
          noise(
            ((p.seeed + x) / cs) * p.noises - (t * p.speed) / 2,
            ((p.seeed + y) / cs) * p.noises - (t * p.speed) / 2
          ),
          0,
          1,
          -PI,
          PI
        )
        break
      case 5:
        r = map(
          noise(
            ((p.seeed + x) / cs) * p.noises + (t * p.speed) / 2,
            ((p.seeed + y) / cs) * p.noises - (t * p.speed) / 2
          ),
          0,
          1,
          -PI,
          PI
        )
        break
      case 6:
        r = map(
          noise(
            ((p.seeed + x) / cs) * p.noises + (t * p.speed) / 2,
            ((p.seeed + y) / cs) * p.noises + (t * p.speed) / 2
          ),
          0,
          1,
          -PI,
          PI
        )
        break
      case 7:
        r = map(
          noise(
            ((p.seeed + x) / cs) * p.noises - (t * p.speed) / 2,
            ((p.seeed + y) / cs) * p.noises + (t * p.speed) / 2
          ),
          0,
          1,
          -PI,
          PI
        )
        break
    }

    push()
    translate(x + cs / 2, y + cs / 2)
    if (random() < p.ratio) {
      p.rcol ? fill(choose(p.cols)) : fill(fillCol)
      rotate(r)
      if (p.shapes == 0) {
        p.swn ? rect(0, 0, cs * p.blockw * r, cs * p.blockh * r) : rect(0, 0, cs * p.blockw, cs * p.blockh)
      } else {
        p.swn ? ellipse(0, 0, cs * p.blockw * r, cs * p.blockh * r) : ellipse(0, 0, cs * p.blockw, cs * p.blockh)
      }
    } else {
      noFill()
      p.showl ? line(-cs / 2, -cs / 2, cs / 2, cs / 2) : nop()
    }
    pop()
  }
}

function badGrid(cellSize = 100, m = 100) {
  cs = cellSize
  res = new Array([])
  for (var x = (width % cs) / 2 + m / 2; x < width - m / 2 - (width % cs); x += cs) {
    for (var y = (height % cs) / 2 + m / 2; y < height - m / 2 - (height % cs); y += cs) {
      res.push([x, y])
    }
  }
  return res
}
