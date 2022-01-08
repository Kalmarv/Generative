/// <reference path="../../lib/p5.global-mode.d.ts" />

stars = []

function setup() {
  speed()
  ARCanvas(1, 1)
}

function draw() {
  background(0)
  translate(width / 2, height / 2)

  stars.push(new Star())
  stars.push(new Star())

  for (var i = 0; i < stars.length; i++) {
    stars[i].show()
    stars[i].update()
    if (stars[i].life > 200) {
      stars.splice(i, 1)
    }
  }
}

class Star {
  constructor() {
    this.x = 0
    this.y = 0
    this.speed = random(1, 5)
    this.life = 0
    this.angle = random(TWO_PI)
    this.size = random(2, 5)
  }

  update() {
    this.life += 1
    this.x += (cos(this.angle) * this.speed * this.life) / 30
    this.y += (sin(this.angle) * this.speed * this.life) / 30
  }

  show() {
    stroke(2 * this.life)
    strokeWeight((this.size * this.life) / 40)
    point(this.x, this.y)
  }
}
