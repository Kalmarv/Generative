function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)
  noLoop()
  rectMode(CENTER)
  background(0)
  noStroke()
  //strokeWeight(px(0.1))
  //blendMode(HARD_LIGHT)
  cols = createCols("https://coolors.co/efd9ce-dec0f1-b79ced-957fef-7161ef")
  //cols = createCols("https://coolors.co/f1dac4-a69cac-474973-161b33-0d0c1d")
  //cols = createCols("https://coolors.co/fe938c-e6b89c-ead2ac-9cafb7-4281a4")
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)

  flow2()
}

function flow2() {
  for (let i = 0; i < 10000; i++) {
    pillw = random(px(0.5), px(2))
    pillh = pillw * 2.5
    push()
    fill(choose(cols))
    translate((x = random(w)), (y = random(h)))
    pillsize = norm2(noise(x / px(20), y / px(20)), 0, 1) * 2
    rotate(noise(x / px(50), y / px(50)) * TAU)
    rect(0, 0, pillw * pillsize, pillh * pillsize, px(5))
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
