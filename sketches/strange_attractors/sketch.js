let a1;
let a2;
let a3;
let a4;
let range;
let x = 1;
let y = 1;

function setup() {
  let params = getURLParams();
  if (params.seed != null) {
    randomSeed(params.seed);
    console.log(params.seed);
  } else {
    randomSeed((seeed = cryptoRandom()));
    console.log("No seed provided, using: \n" + seeed);
  }

  range = TAU;
  a1 = random(-range, range);
  a2 = random(-range, range);
  a3 = random(-range, range);
  a4 = random(-range, range);

  blendMode(HARD_LIGHT);
  background(0);
  ARCanvas(16, 9);
}

function draw() {
  if (frameCount < 2) {
    background(0);
  }
  strokeWeight(px(0.1));
  for (i = 0; i < 1; i += random(0, 0.0005)) {
    var oldx = x;
    var oldy = y;
    x = sin(a1 * oldx) * cos(a1 * oldy) - sin(a2 * oldx);
    y = cos(a3 * oldx) - cos(a3 * oldx) * sin(a4 * oldy);
    var scalex = map(x, -2, 2, px(10), px(90));
    var scaley = map(y, -2, 2, py(10), py(90));
    stroke(map(oldx, -2, 2, 0, 255), map(oldy, -2, 2, 0, 255), 255, 50);
    point(scalex, scaley);
  }
}
