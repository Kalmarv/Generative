function setup() {
  createCanvas((w = 800), (h = 800))
  speed()
  noLoop()
  background("#f6eee3")
  stroke("#001d3d")
  seeed = random(1000000000000)
  rectMode(CENTER)
}

function draw() {
  t = frameCount
  randomSeed(seeed)
  background("#f6eee3")
  noFill()
  translate(w * 0.5, h * 0.5)
  push()
  rotate(PI / 4)
  badCircle(200, 50000)
  pop()
}

function badCircle(r, detail) {
  for (let i = 0; i < detail; i++) {
    a = random() * 2 * PI
    rn = r * sqrt(random())
    x = rn * cos(a + PI / 2 + 1)
    y = rn * sin(a)
    prob(ccurves(rn * 0.03)) ? point(x, y) : nop() // rn * VAR - more sections
  }
}

// http://tobyschachman.com/Shadershop/editor/ to find some cool ones
function ccurves(x) {
  return (x % 0.5) * 2
  //return x*x
}
