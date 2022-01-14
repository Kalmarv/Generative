let a1
let a2
let a3
let a4
let range
let x = 1
let y = 1
let res = []

const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: false,
})

pane.on("change", (ev) => {
  clear()
  redraw()
  background(0)
  t = 0
})

function setup() {
  let params = getURLParams()
  urlSeed(params)
  randomSeed(seeed)
  range = TAU
  a1 = random(-TAU, TAU)
  a2 = random(-TAU, TAU)
  a3 = random(-TAU, TAU)
  a4 = random(-TAU, TAU)

  background(0)
  ARCanvas(1, 1)
  blendMode(HARD_LIGHT)

  generator = pseudoRandom(1)

  for (let i = 0; i < 20; i++) {
    res[i] = generator()
  }

  p = {
    zoom: { x: 2, y: 2 },
    move: { x: 0, y: 0 },
    strokeweight: 25,
    transparency: 50,
  }

  pane.addInput(p, "move", {
    x: {},
    y: {},
  })
  pane.addInput(p, "zoom", {
    x: {},
    y: {},
  })
  pane.addInput(p, "strokeweight", { min: 1, max: 200 })
  pane.addInput(p, "transparency", { min: 1, max: 255 })
  t = frameCount
}

function draw() {
  t++
  randomSeed(seeed)
  strokeWeight(px(p.strokeweight / 1000))
  if (t < 2) background(0)
  for (i = 0; i < 1; i += random(0, 0.0005)) {
    var oldx = x
    var oldy = y
    x = rm(
      rt(rm(a1, oldx, res[12]), res[1]),
      rm(rt(rm(a1, oldy, res[7]), res[0]), rt(rm(a2, oldx, res[8]), res[3]), res[6]),
      res[15]
    )
    y = rm(
      rm(rt(rm(a3, oldx, res[11]), res[2]), rt(rm(a3, oldx, res[10]), res[4]), res[13]),
      rt(rm(a4, oldy, res[9]), res[5]),
      res[14]
    )
    var scalex = map(x + p.move.x, -p.zoom.x, p.zoom.x, w * 0.05, w * 0.95)
    var scaley = map(y + p.move.y, -p.zoom.y, p.zoom.y, w * 0.05, w * 0.95)
    stroke(
      map(oldx + p.move.x, -p.zoom.x, p.zoom.x, 50, 255),
      map(oldy + p.move.y, -p.zoom.y, p.zoom.y, 50, 255),
      map(Math.sin(t / 50), -1, 1, 150, 255),
      p.transparency
    )
    point(scalex, scaley)
  }

  if (keyIsDown(LEFT_ARROW)) {
    p.move.x += 0.1
    background(0)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    p.move.x -= 0.1
    background(0)
  }
  if (keyIsDown(UP_ARROW)) {
    p.move.y += 0.1
    background(0)
  }
  if (keyIsDown(DOWN_ARROW)) {
    p.move.y -= 0.1
    background(0)
  }
  if (keyIsDown(87)) {
    p.zoom.y -= 0.1
    background(0)
  }
  if (keyIsDown(83)) {
    p.zoom.y += 0.1
    background(0)
  }
  if (keyIsDown(68)) {
    p.zoom.x -= 0.1
    background(0)
  }
  if (keyIsDown(65)) {
    p.zoom.x += 0.1
    background(0)
  }
}

rt = (x, seed) => (seed > 0.5 ? Math.sin(x) : Math.cos(x))
rm = (a, b, seed) => (seed > 0.8 ? a + b : seed > 0.6 ? a - b : seed > 0.4 ? a * b : seed > 0.2 ? a / b : a % b)

function pseudoRandom(seed) {
  let value = seed

  return function () {
    value = random()
    return value
  }
}
