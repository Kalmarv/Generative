function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
}

function draw() {
  randomSeed(seeed)
  background(frameCount % 255)
}