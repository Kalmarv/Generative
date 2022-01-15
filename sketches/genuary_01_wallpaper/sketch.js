function setup() {
  let params = getURLParams()
  urlSeed(params)
  randomSeed(seeed)
  noiseSeed(seeed)
  speed()
  ARCanvas(16, 9)
  //noLoop()
  rectMode(CENTER)
  background(0)
  noStroke()
}

function draw() {
  p = {
    mins: random(1, 5),
    maxs: random(1, 5),
    pillrmin: random(1, 5),
    pillrmax: random(1, 5),
    noisex: random(0, 100),
    noisey: random(0, 100),
    roundness: random(0, 2),
    ramt: random(0, TAU),
    pillscale: random(0, 5),
    rotx: random(0, 100),
    roty: random(0, 100),
    iters: random(2000, 10000),
    cols: choose(randcols),
  }
  background(0)
  flow2()
  if (frameCount == 1) {
    frameRate(1)
  } else {
    frameRate(0.001)
  }
  //print(hexToRbg(choose(p.cols)))
}

function flow2() {
  background(hexToRbg(choose(p.cols)))
  for (let i = 0; i < p.iters; i++) {
    pillw = random(px(p.mins), px(p.maxs))
    pillh = pillw * random(p.pillrmin, p.pillrmax)
    push()
    fill(choose(p.cols))
    translate((x = random(w)), (y = random(h)))
    pillsize = norm2(noise(x / px(p.noisex), y / px(p.noisey)), 0, 1) * p.pillscale
    rotate(noise(x / px(p.rotx), y / px(p.roty)) * p.ramt)
    rect(0, 0, pillw * pillsize, pillh * pillsize, px(p.roundness))
    pop()
  }
}

// https://stackoverflow.com/a/5624139
hexToRbg = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null
}
