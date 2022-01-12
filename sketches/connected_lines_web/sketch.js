/// <reference path="../../lib/p5.global-mode.d.ts" />

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
  numparts = floor(random(10, 200))
  partdist = random(px(5), px(10))
  partsize = w * 0.49
  max_bounces = 1
  background(choose(cols))
  strokeWeight(px(0.1))
  for (i = 0; i < numparts; i++) {
    parts[i] = new particle(
      partsize + random(w - partsize * 2),
      partsize + random(h - partsize * 2)
    )
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
