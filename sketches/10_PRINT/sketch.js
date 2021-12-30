function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  angleMode(DEGREES)
  noLoop()

  background(0)
  stroke(255)
  strokeWeight(px(0.5))

  spacing = px(5)
  grid = width / spacing
  orig = 0
}

function draw() {
  randomSeed(seeed)

  for (var i = 0; i < grid; i++) {
    for (var j = 0; j < grid; j++) {
      prob()
        ? line(spacing * j, orig, spacing * j + spacing, spacing + orig)
        : line(spacing * j + spacing, orig, spacing * j, spacing + orig)
    }
    orig += spacing
  }
}
