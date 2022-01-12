function setup() {
  createCanvas((w = 800), (h = 800))
  speed()
  noLoop()
  background("#f6eee3")
  stroke("#001d3d")
}

function draw() {
  translate(w * 0.25, h * 0.33)
  gentleSquare(100, 10000) // radius, dots
  translate(w * 0.25, 0)
  dotCircle(100, 300) // radius, dots
  translate(-w * 0.25, h * 0.33)
  uniformNoiseSquare(100, 5000)
  translate(w * 0.25, 0)
  uniformCircle(100, 5000)
  translate(w * 0.25, h * -0.33)
  badCircle(100, 20000)
  translate(-100, h * 0.33 - 100)
  displayCurve()
}

function gentleSquare(r, detail) {
  for (let i = 0; i < detail; i++) {
    point(sin(random(i)) * r, cos(random(i)) * r)
  }
}

function dotCircle(r, detail) {
  for (let i = 0; i < detail; i++) {
    rand = random(i)
    point(sin(rand) * r, cos(rand) * r)
  }
}

function uniformNoiseSquare(r, detail) {
  for (let i = 0; i < detail; i++) {
    point(random(-r, r), random(-r, r))
  }
}

function uniformCircle(r, detail) {
  for (let i = 0; i < detail; i++) {
    a = random() * 2 * PI
    rn = r * sqrt(random())
    x = rn * cos(a)
    y = rn * sin(a)
    point(x, y)
  }
}

function badCircle(r, detail) {
  for (let i = 0; i < detail; i++) {
    a = random() * 2 * PI
    rn = r * sqrt(random())
    x = rn * cos(a)
    y = rn * sin(a)
    prob(ccurves(rn * 0.01)) ? point(x, y) : nop()
  }
}

// Not really a function I made to use, just trying to visualize the
// the function that distributes the dots on the circle
function displayCurve() {
  numlines = 50
  noFill()
  rect(0, 0, 200, 200)
  for (i = 0; i < numlines; i++) {
    push()
    translate(i * (200 / numlines), 200)
    a = map(i, 0, numlines, 0, 1)
    b = map(ccurves(a), 0, 1, 0, -200)
    rect(0, 0, 200 / numlines, b)
    pop()
  }
}

// http://tobyschachman.com/Shadershop/editor/ to find some cool ones
function ccurves(x) {
  return (x % 0.5) * 2
  //return x*x
}
