function setup() {
  speed()
  ARCanvas(1, 1)
  background("#ddbea9")
}

function draw() {
  stroke("#6b705c")
  strokeWeight(px(0.1))
  translate(width / 2, -width * 0.2)
  dotCircle(cos(frameCount / 40) * px(10), frameCount * px(0.3), px(6), px(12))
  dotCircle(-cos(frameCount / 40) * px(10), frameCount * px(0.3), px(6), px(12))
}

function dotCircle(x, y, r, detail) {
  push()
  translate(x, y)
  for (let i = 0; i < detail; i++) {
    rand = random(i)
    if (sin(rand) > 0) {
      point(cos(rand) * r, sin(rand) * r)
    }
  }
  pop()
}
