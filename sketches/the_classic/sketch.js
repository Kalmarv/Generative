let parts = []
let numparts
let partsize
let partdist

function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  cols = choose(randcols)
  numparts = 60
  partsize = px(5)
  partdist = 150
  for (i = 0; i < numparts; i++) {
    parts[i] = new particle(partsize + random(w - partsize * 2), partsize + random(h - partsize * 2))
  }
}

function draw() {
  randomSeed(seeed)
  background(10)
  strokeWeight(px(0.1))
  for (i = 0; i < numparts; i++) {
    parts[i].update()
    parts[i].show()
    for (j = 0; j < parts.length; j++) {
      if (parts[i].pos.dist(parts[j].pos) < partdist) {
        d = parts[i].pos.dist(parts[j].pos)
        stroke(255, map(d, 0, partdist, 255, 0))
        line(parts[i].pos.x, parts[i].pos.y, parts[j].pos.x, parts[j].pos.y)
      }
    }
  }
}

class particle {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y)
    this.vel = createVector(random(-2, 2), random(-2, 2))
    this.parts = random(0, partsize)
    this.col = choose(cols)
  }

  update() {
    fill(this.col)
    noStroke()
    this.pos.add(this.vel)

    if (this.pos.x > w - this.parts / 2 || this.pos.x < 0 + this.parts / 2) {
      this.vel.x *= -1
    }
    if (this.pos.y > h - this.parts / 2 || this.pos.y < 0 + this.parts / 2) {
      this.vel.y *= -1
    }
  }

  show() {
    stroke(this.col)
    ellipse(this.pos.x, this.pos.y, this.parts)
  }
}
