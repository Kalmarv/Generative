let parts = []
let numparts
let partdist

function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  cols = choose(randcols)
  numparts = floor(random(10, 100))
  partdist = random(px(5), px(20))
  max_bounces = 2
  background(choose(cols))
  strokeWeight(px(0.1))
  for (i = 0; i < numparts; i++) {
    parts[i] = new particle(random(w), random(h))
  }
}

function draw() {
  randomSeed(seeed)
  randomSeed(seeed)
  for (i = 0; i < numparts; i++) {
    parts[i].update()
    for (j = 0; j < parts.length; j++) {
      if (parts[i].pos.dist(parts[j].pos) < partdist) {
        line(parts[i].pos.x, parts[i].pos.y, parts[j].pos.x, parts[j].pos.y)
      }
    }
  }
}

class particle {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y)
    this.vel = createVector(
      random(px(-0.2), px(0.2)),
      random(px(-0.2), px(0.2))
    )
    this.col = choose(cols)
    this.bounces = 0
  }

  update() {
    stroke(this.col)
    this.pos.add(this.vel)

    if (this.bounces >= max_bounces) {
      this.pos.x = 10000
      this.pos.y = 10000
    }

    if (this.pos.x > w || this.pos.x < 0) {
      this.vel.x *= -1
      this.bounces++
    }
    if (this.pos.y > h || this.pos.y < 0) {
      this.vel.y *= -1
      this.bounces++
    }
  }
}
