function setup() {
  createCanvas((w = 800), (h = 800))
  speed()
  noLoop()
  background("#f6eee3")
  stroke("#001d3d")
  seeed = random(1000000000000)
}

function draw() {
  randomSeed(seeed)
  background("#f6eee3")
  translate(-200, h * 0.5)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  translate(100, 0)
  badCircle(100, 20000)
  //translate(-100, (h * 0.5)-100)
  //displayCurve()
}

function badCircle(r, detail) {
  for (let i = 0; i < detail; i++) {
    a = random() * 2 * PI
    rn = r * sqrt(random())
    x = rn * tan(a)
    y = rn * sin(a)
    prob(ccurves(rn * 0.01)) ? point(x, y) : nop() // rn * VAR - more sections
  }
}

// http://tobyschachman.com/Shadershop/editor/ to find some cool ones
function ccurves(x) {
  return (x % 0.5) * 2
  //return x*x
}
