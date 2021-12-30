function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  stroke(255)
  strokeWeight(px(0.2))

  spacing = px(2.75)
  t = 0
}

function draw() {
  noiseSeed(seeed)
  background(0)

  for (i = 0; i < height; i += spacing) {
    for (j = 0; j < width; j += spacing) {
      n = noise(i / 150, j / 150 + t)
      if (n > 0.5) {
        line(i, j, i + spacing, j + spacing)
      } else {
        line(i + spacing, j, i, j + spacing)
      }
    }
  }
  t += 0.01
}
