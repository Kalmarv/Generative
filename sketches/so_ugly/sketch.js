let pops = []
let n_cir
let n_pops

function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  cols = choose(randcols)
  noLoop()
  n_cir = 1000
  n_pops = 10
  colorMode(HSB)
  colorrange = 200
  asdf = new iris(random(w), random(h))
}

function draw() {
  randomSeed(seeed)
  a = random(360)
  noStroke()
  asdf.show()
}

class iris {
  constructor(_x, _y, _s) {
    this.x = _x
    this.y = _y
    this.s = 200
  }

  show() {
    push()
    translate(this.x, this.y)
    for (let i = 0; i < n_cir; i++) {
      fill(
        random(a, a + colorrange > 360 ? random(360 - a + colorrange, a + colorrange - 360) : a + colorrange),
        random(50, 100),
        100,
        0.1
      )
      var j = invert(i, n_cir)
      var offx = expand(noise(this.x + i)) * j * 2
      var offy = expand(noise(this.y + i)) * j * 2
      ellipse(offx, offy, (j * n_cir) / this.s)
    }
    pop()
  }
}
