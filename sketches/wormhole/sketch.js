stars = []

function setup() {
  speed()
  ARCanvas(1, 1)
  colorMode(HSB)
}

function draw() {
  background(0, 0.2)
  translate(width / 2, height / 2)

  for (var i = 0; i < stars.length; i++) {
    stars[i].show()
    stars[i].update()
    if (stars[i].life > 200) {
      stars.splice(i, 1)
    }
  }

  for (var j = 0; j < 5; j++) {
    stars.push(new Star())
  }

  fill(0)
}

class Star {
  constructor() {
    this.x = cos(frameCount / 50) * 100
    this.y = sin(frameCount / 50) * 100
    this.speed = 2
    this.life = 0
    this.angle = random(TWO_PI)
    this.size = random(2, 5)
    this.color = random(1)
  }

  update() {
    this.life += 1
    this.x += (cos(this.angle) * this.speed * this.life) / 30
    this.y += (sin(this.angle) * this.speed * this.life) / 30
  }

  show() {
    this.color > 0.9 ? stroke(200, 200, 2 * this.life) : stroke(2 * this.life)
    strokeWeight((this.size * this.life) / 40)
    point(this.x, this.y)
  }
}
