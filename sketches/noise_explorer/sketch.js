function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  gap = px(2)
  noiseScale = 0.0075
  colorMode(HSB)
  off = {
    x: 1000.0,
    y: 1000.0,
    z: 1000.0,
  }
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  for (x = 0; x < px(100); x += gap) {
    for (y = 0; y < px(100); y += gap) {
      fill(
        map(
          noise(
            map(x, 0, w, 0, 750) * noiseScale + off.x,
            map(y, 0, w, 0, 750) * noiseScale + off.y,
            off.z
          ),
          0,
          1,
          0,
          360
        ),
        360,
        360
      )
      noStroke()
      rect(x, y, gap)
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    off.x -= 0.1
  }
  if (keyIsDown(RIGHT_ARROW)) {
    off.x += 0.1
  }
  if (keyIsDown(UP_ARROW)) {
    off.y -= 0.1
  }
  if (keyIsDown(DOWN_ARROW)) {
    off.y += 0.1
  }
  if (keyIsDown(SHIFT)) {
    noiseScale += 0.0005
  }
  if (keyIsDown(ENTER)) {
    noiseScale -= 0.0005
  }
}
