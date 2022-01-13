const p = {
  TreeColor: "#FFFFFF",
  BackgroundColor: "#000000",
  angle: 45,
  animate: false,
  length: Math.min(window.innerWidth, window.innerHeight) * 0.25,
  cutoff: Math.min(window.innerWidth, window.innerHeight) * 0.01,
}

const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: true,
})

function setup() {
  speed()
  ARCanvas(1, 1)

  angleMode(DEGREES)
  pane.addInput(p, "angle", { min: -360, max: 360 })
  pane.addInput(p, "animate")
  pane.addInput(p, "length", { min: 0, max: 500 })
  pane.addInput(p, "cutoff", { min: 1, max: 20 })
  pane.addInput(p, "TreeColor")
  pane.addInput(p, "BackgroundColor")
}

function draw() {
  background(p.BackgroundColor)
  stroke(p.TreeColor)
  p.animate == true ? (p.angle += 1) : (p.angle += 0)

  translate(width / 2, height)
  branch(p.length)
}

function branch(len) {
  line(0, 0, 0, -len)
  translate(0, -len)
  if (len > p.cutoff) {
    push()
    rotate(p.angle)
    branch(len * 0.67)
    pop()
    push()
    rotate(-p.angle)
    branch(len * 0.67)
    pop()
  }
}
