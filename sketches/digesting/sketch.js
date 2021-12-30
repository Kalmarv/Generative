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
  noStroke()
  rect(px(5), px(90), px(90), px(5))
  rect(px(90), px(5), px(5), px(90))

  stroke(255)
  //translate(m,m)
  for (let i = 0; i < runs; i++) {
    push()
    xi = map(i, 0, runs, -100, w + 100)
    yi = map(i, 0, runs, -100, w + 100)
    translate(
      xi + sin(i / 10 + frameCount / 100) * 100,
      yi + cos(i / 10 + frameCount / 100) * 100
    )
    rotate(i / 20 + frameCount / 100)
    ngon(
      2 + abs(noise(i / 20, frameCount / 200)) * 3,
      50 + abs(noise(i / 10, frameCount / 100)) * 100
    )
    pop()
  }

  noStroke()
  rect(px(5), px(5), px(90), px(5))
  rect(px(5), px(5), px(5), px(90))
}
