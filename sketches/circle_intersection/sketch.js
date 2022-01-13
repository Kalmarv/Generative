function setup() {
  speed()
  ARCanvas(1, 1)

  background(0)
  stroke(255)
  noFill()

  circles = []
  circles2 = []
}

function draw() {
  background(0, 5)
  translate(width / 2, height / 2)
  scale(1, -1)
  strokeWeight(px(0.1))

  if (frameCount % 50 == 0) {
    circles.push(new CircleEmit(0, 0, px(0.2)))
  }

  if (frameCount % 10 == 0) {
    circles2.push(new CircleEmit(-width, 0, px(0.32)))
  }

  for (i = 0; i < circles.length; i++) {
    circles[i].show()
    circles[i].update()
    if (circles[i].life > 500) {
      circles.splice(i, 1)
    }
  }
  for (i = 0; i < circles2.length; i++) {
    circles2[i].show()
    circles2[i].update()
    if (circles2[i].life > 500) {
      circles2.splice(i, 1)
    }
  }

  if (frameCount > 50) {
    for (i = 0; i < circles.length; i++) {
      for (j = 0; j < circles2.length; j++) {
        circleIntersect(circles[i], circles2[j])
      }
    }
  }
}

function circleIntersect(A, B) {
  d = Math.hypot(B.x - A.x, B.y - A.y)
  if (d <= A.r + B.r && d >= abs(B.r - A.r)) {
    ex = (B.x - A.x) / d
    ey = (B.y - A.y) / d
    x = (A.r * A.r - B.r * B.r + d * d) / (2 * d)
    y = sqrt(A.r * A.r - x * x)
    P1 = {
      x: A.x + x * ex - y * ey,
      y: A.y + x * ey + y * ex,
    }
    P2 = {
      x: A.x + x * ex + y * ey,
      y: A.y + x * ey - y * ex,
    }
  } else {
    P1 = P2 = null
  }
  try {
    strokeWeight(px(1))
    stroke(map(P1.x, 0, width, 0, 255), map(P1.y, 0, width / 3, 0, 255), 255)
    point(P1.x, P1.y)
    stroke(255, map(P2.x, 0, width, 0, 255), map(P2.y, 0, width / 3, 0, 255))
    point(P2.x, P2.y)
  } catch (err) {}
}

class CircleEmit {
  constructor(_x, _y, _growRate) {
    this.x = _x
    this.y = _y
    this.r = 0
    this.growRate = _growRate
    this.life = 0
  }

  show() {
    //circle(this.x, this.y, this.r * 2)
  }

  update() {
    this.r += this.growRate
    this.life += 1
  }
}
