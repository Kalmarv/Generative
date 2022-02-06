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
  noLoop()

  p = {
    totalRows: 30,
    cirw: 1.5,
    cirh: 1,
    rownoise: 2,
    strokeW: 0.05,
    cirNoiseX: 5,
    cirNoiseY: 5,
    extraRows: 0,
    strokecol: "#000000",
    bg: "#ffffff",
    col1: "#ffffff",
    col2: "#ffffff",
    col3: "#ffffff",
    col4: "#ffffff",
    col5: "#ffffff",
    col6: "#ffffff",
    col7: "#ffffff",
    col8: "#ffffff",
    col9: "#ffffff",
  }

  pane.addInput(p, "totalRows", { min: 0, max: 100, label: "Total Rows" })
  pane.addInput(p, "cirw", { min: 0, max: 10, label: "Circe Width" })
  pane.addInput(p, "cirh", { min: 0, max: 10, label: "Circle Height" })
  pane.addInput(p, "rownoise", { min: 0, max: 20, label: "Row Noise Scale" })
  pane.addInput(p, "strokeW", { min: 0, max: 1, label: "Outline Width" })
  pane.addInput(p, "cirNoiseX", { min: 0, max: 10, label: "Circle Noise Scale X" })
  pane.addInput(p, "cirNoiseY", { min: 0, max: 10, label: "Circle Noise Scale Y" })
  pane.addInput(p, "extraRows", { min: -50, max: 50, step: 1, label: "Extra Rows" })
  pane.addInput(p, "strokecol", { label: "Stroke" })
  pane.addInput(p, "bg", { label: "Background" })
  pane.addInput(p, "col1", { label: "Color 1" })
  pane.addInput(p, "col2", { label: "Color 2" })
  pane.addInput(p, "col3", { label: "Color 3" })
  pane.addInput(p, "col4", { label: "Color 4" })
  pane.addInput(p, "col5", { label: "Color 5" })
  pane.addInput(p, "col6", { label: "Color 6" })
  pane.addInput(p, "col7", { label: "Color 7" })
  pane.addInput(p, "col8", { label: "Color 8" })
  pane.addInput(p, "col9", { label: "Color 9" })
  const randomizebtn = pane.addButton({
    title: "Randomize",
  })

  randomizebtn.on("click", () => {
    p.totalRows = vRand(10, 100)
    p.cirw = vRand(0.1, 5)
    p.cirh = vRand(0.1, 5)
    p.rownoise = vRand(0, 20)
    p.strokeW = vRand(0, 0.1)
    p.cirNoiseX = vRand(0, 10)
    p.cirNoiseY = vRand(0, 10)
    p.extraRows = vRand(0, 20)
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
  strokeWeight(px(p.strokeW))
  background(p.bg)
  randomSeed(seeed)
  stroke([p.strokecol])
  noiseSeed(seeed)
  for (let k = 0; k < p.totalRows; k++) {
    ch = w / p.totalRows
    circs = floor(noise((k / p.totalRows) * p.rownoise) * floor(w / ch)) + p.extraRows
    push()
    translate((w - ch * circs) / 2, k * ch)
    basicGrid(1, circs, ch * circs, ch, k)
    pop()
  }
}

function basicGrid(rows, columns, maxWidth = w, maxHeight = h, lineNum) {
  cw = maxWidth / columns
  ch = maxHeight / rows
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
      push()

      fill(choose([p.col1, p.col2, p.col3, p.col4, p.col5, p.col6, p.col7, p.col8, p.col9]))
      noiseScaleX = p.totalRows / p.cirNoiseX
      noiseScaleY = p.totalRows / p.cirNoiseY

      r = map(noise(j / noiseScaleX, lineNum / noiseScaleY), 0, 1, -PI, PI)
      //rotate(r)

      translate(j * cw + cw / 2, i * ch + ch / 2)
      rotate(r)
      ellipse(0, 0, cw * r * p.cirw, ch * r * p.cirh)
      pop()
    }
  }
}
