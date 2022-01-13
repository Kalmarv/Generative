function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1, 1, WEBGL)
  pixelDensity(2)
  randomSeed(seeed)
  cols = choose(randcols)
}

function draw() {
  randomSeed(seeed)
  if (frameCount < 2) background(0)
  //orbitControl(4,4)
  rotateY(frameCount / 10)
  rotateX(frameCount / 10)
  rotateZ(sin(frameCount / 100))
  for (i = 0; i < 20; i++) {
    push()
    fill(choose(cols))
    translate(random(-w, w), random(-w, w), random(-w, w))
    a = pc(random(constrain(30 - frameCount / 10, 0, 30)))
    b = pc(random(constrain(30 - frameCount / 10, 0, 30)))
    random() > 0.5 ? box(a, b) : box(a, a * random(0.1, 0.4))
    strokeWeight(px(min(a, b)))
    pop()
  }
}

function pc(x) {
  return (w / 200) * x
}
