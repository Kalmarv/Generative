function setup() {
  let params = getURLParams()
  urlSeed(params)
  rectMode(CENTER)
  speed()
  createCanvas((w = 852), (h = w))
  randomSeed(seeed)
  cols = choose(randcols)
  m = -100
  c = 90
}

function draw() {
  randomSeed(seeed)

  background(choose(cols))
  fill(choose(cols))
  stroke(94, 100, 114)

  column(0.2, PI / 2, 1)
  column(0.4, 0, -1)
  column(0.6, PI / 2, 1)
  column(0.8, 0, -1)
}

function column(spacing, displace, neg) {
  for (i = m; i < h - m; i += (h - m * 2) / c) {
    push()
    translate(w * spacing, i)
    rotate(neg * displace)
    rotate(neg * (i / 3.9))
    rotate(neg * (frameCount / 100))
    rect(0, 0, 200, 20)
    pop()
  }
}
