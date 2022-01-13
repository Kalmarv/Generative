const p = {
  s: 000,
  loop: false,
  loopSpeed: 0.05,
}
colors = [
  "#212529",
  "#ffffff",
  "#ffed31",
  "#9ef01a",
  "#f04242",
  "#ff6d00",
  "#64b5f6",
  "#d4a276",
  "#ffa6c1",
  "#deaaff",
]

rot = 0.0

function preload() {
  myFont = loadFont("../../assets/OpenSans-Regular.ttf")
}

const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: true,
})

function setup() {
  speed()
  ARCanvas(1, 1, 1, WEBGL)
  pane.addInput(p, "s", { label: "Number", min: 0, max: 999, step: 1 })
  pane.addInput(p, "loop", { label: "Loop" })
  pane.addInput(p, "loopSpeed", {
    label: "Loop Speed",
    min: 0,
    max: 0.2,
    step: 0.001,
  })
  textAlign(CENTER, CENTER)
}

function draw() {
  s = 000

  bg = str(Math.floor(p.s)).padStart(3, "0")[0]
  fg = str(Math.floor(p.s)).padStart(3, "0")[1]
  shp = str(Math.floor(p.s)).padStart(3, "0")[2]

  textFont(myFont)
  textSize(60)

  background(colors[bg])
  fill(colors[fg])
  colors[fg] == colors[bg] ? strokeWeight(2.5) : strokeWeight(1)
  stroke("#6c757d")

  push()
  translate(0, 225)
  rotateX(0.4)
  colors[fg] == colors[bg] ? fill("#6c757d") : fill(colors[fg])
  text(str(Math.floor(p.s)).padStart(3, "0"), 0, 0)
  pop()

  camera(0, -150, 400)
  rotateY(rot)
  pickShape(shp)

  rot += 0.01
  p.loop == true ? (p.s > 999 ? (p.s = 0) : (p.s += p.loopSpeed)) : (p.s = p.s)
}

function pickShape(shp) {
  if (shp == 0) {
    torus(80, 25, 20, 10)
  }
  if (shp == 1) {
    ellipsoid(50, 50, 50, 4, 2)
  }
  if (shp == 2) {
    rotateX(PI / 4)
    box(15, 200, 15)
    rotateX(PI / 2)
    box(15, 200, 15)
  }
  if (shp == 3) {
    rotateX(-PI)
    cone(89, 144, 3)
  }
  if (shp == 4) {
    box(150, 150, 0)
  }
  if (shp == 5) {
    rotateX(PI / 2)
    cylinder(100, 0, 6, 1)
  }
  if (shp == 6) {
    box(150, 150, 150)
  }
  if (shp == 7) {
    torus(25, 50, 3, 3)
    rotateZ(PI)
    torus(25, 50, 3, 3)
    push()
    rotateX(PI / 2)
    torus(25, 50, 3, 3)
    rotateZ(PI)
    torus(25, 50, 3, 3)
    pop()
  }
  if (shp == 8) {
    cylinder(100, 0, 9, 1)
  }
  if (shp == 9) {
    translate(0, 20)
    box(100, 100, 100)
    translate(0, -88)
    rotateX(-PI)
    rotateY(PI / 4)
    cone(71, 75, 5)
  }
}
