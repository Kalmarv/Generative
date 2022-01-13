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
  numparts = 7
  partsize = 5
  partdist = windowWidth
  partspeed = 2
  cols = choose(randcols)
  bg = cols[0]
  cols.splice(0, 1)
  blendMode(HARD_LIGHT)
  max_bounces = 200
  background(bg)
  for (i = 0; i < numparts; i++) {
    parts[i] = new particle(partsize + random(w - partsize * 2), partsize + random(h - partsize * 2))
  }
}

function draw() {
  randomSeed(seeed)
  noStroke()
  fill(bg + "0F")
  rect(0, 0, width, height)
  strokeWeight(px(0.2))
  //background(bg)
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
    this.vel = createVector(random(-partspeed, partspeed), random(-partspeed, partspeed))
    this.parts = random(0, partsize)
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

    if (this.pos.x > w - this.parts / 2 || this.pos.x < 0 + this.parts / 2) {
      this.vel.x *= -1
      this.bounces++
    }
    if (this.pos.y > h - this.parts / 2 || this.pos.y < 0 + this.parts / 2) {
      this.vel.y *= -1
      this.bounces++
    }
  }
}
