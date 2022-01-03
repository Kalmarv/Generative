const p = {
  mins: 0.5,
  maxs: 2,
  pillrmin: 2.5,
  pillrmax: 2.5,
  noisex: 20,
  noisey: 20,
  roundness: 10,
  ramt: 3.141592 * 2,
  pillscale: 2,
  rotx: 50,
  roty: 50,
  iters: 10000,
}
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
  noLoop()
  rectMode(CENTER)
  background(0)
  noStroke()
  cols = createCols("https://coolors.co/efd9ce-dec0f1-b79ced-957fef-7161ef")
  //cols = createCols("https://coolors.co/f1dac4-a69cac-474973-161b33-0d0c1d")
  //cols = createCols("https://coolors.co/fe938c-e6b89c-ead2ac-9cafb7-4281a4")

  pane.addInput(p, "mins", { min: 0, max: 10, label: "Minimum pill size" })
  pane.addInput(p, "maxs", { min: 0, max: 10, label: "Maximum pill size" })
  pane.addInput(p, "pillrmin", { min: 0, max: 10, label: "Minimum size ratio" })
  pane.addInput(p, "pillrmax", { min: 0, max: 10, label: "Maximum size ratio" })
  pane.addInput(p, "noisex", { min: 0, max: 100, label: "Noise scale x" })
  pane.addInput(p, "noisey", { min: 0, max: 100, label: "Noise scale y" })
  pane.addInput(p, "roundness", { min: 0, max: 10, label: "Roundness" })
  pane.addInput(p, "ramt", { min: 0, max: TAU, label: "Rotation amount" })
  pane.addInput(p, "rotx", { min: 0, max: 100, label: "Rotation scale x" })
  pane.addInput(p, "roty", { min: 0, max: 100, label: "Rotation scale y" })
  pane.addInput(p, "pillscale", { min: 0, max: 5, label: "Pill scale" })
  pane.addInput(p, "iters", { min: 0, max: 20000, label: "Pills" })
  const randomizebtn = pane.addButton({
    title: "Randomize",
  })

  randomizebtn.on("click", () => {
    p.mins = random(0, 10)
    p.maxs = random(0, 10)
    p.pillrmin = random(0, 10)
    p.pillrmax = random(0, 10)
    p.noisex = random(0, 100)
    p.noisey = random(0, 100)
    p.roundness = random(0, 10)
    p.ramt = random(0, TAU)
    p.pillscale = random(0, 5)
    p.rotx = random(0, 100)
    p.roty = random(0, 100)
    p.iters = random(0, 10000)
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
  background(0)
  randomSeed(seeed)
  noiseSeed(seeed)

  flow2()
}

function flow2() {
  for (let i = 0; i < p.iters; i++) {
    pillw = random(px(p.mins), px(p.maxs))
    pillh = pillw * random(p.pillrmin, p.pillrmax)
    push()
    fill(choose(cols))
    translate((x = random(w)), (y = random(h)))
    pillsize =
      norm2(noise(x / px(p.noisex), y / px(p.noisey)), 0, 1) * p.pillscale
    rotate(noise(x / px(p.rotx), y / px(p.roty)) * p.ramt)
    rect(0, 0, pillw * pillsize, pillh * pillsize, px(p.roundness))
    pop()
  }
}
function flow1() {
  for (let i = 0; i < 10000; i++) {
    pillw = random(px(0.5), px(2))
    pillh = pillw * 2.5
    push()
    fill(choose(cols))
    translate((x = random(w)), (y = random(h)))
    rotate(noise((x + y) / px(50)) * TAU)
    rect(0, 0, pillw, pillh, px(5))
    pop()
  }
}
