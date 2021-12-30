function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  runs = 100
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  background(255)
  fill(0)

  strokeWeight(px(0.25))
  noStroke()

  rect(px(5), px(90), px(90), px(5))
  rect(px(90), px(5), px(5), px(90))

  stroke(255)

  strokeWeight(px(0.1))
  for (let i = 0; i < runs; i++) {
    push()
    xi = map(i, 0, runs, -px(10), w + px(20))
    yi = map(i, 0, runs, -px(10), w + px(20))
    translate(
      xi + sin(i / 10 + frameCount / 100) * px(10),
      yi + cos(i / 10 + frameCount / 100) * px(10)
    )
    rotate(i / 20 + frameCount / 100)
    ngon(
      2 + abs(noise(i / 20, frameCount / 200)) * 3,
      px(7) + abs(noise(i / 10, frameCount / 100)) * px(10)
    )
    pop()
  }

  noStroke()
  rect(px(5), px(5), px(90), px(5))
  rect(px(5), px(5), px(5), px(90))
  stroke(255)
  strokeWeight(px(0.25))
  strokeCap(SQUARE)
  line(px(5), px(5), px(95), px(5))
  line(px(10), px(10), px(90), px(10))
  line(px(5), px(5), px(5), px(95))
  line(px(10), px(10), px(10), px(90))
}
