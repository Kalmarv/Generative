// Always create square canvas, fitting to window
function squareCanvas(resMult = 1) {
  createCanvas(
    (w = min(windowWidth, windowHeight) * resMult),
    (h = min(windowWidth, windowHeight) * resMult)
  );
}

function ARCanvas(xAspect, yAspect, resMult = 1) {
  let canvasAspectRatio = xAspect / yAspect;
  if (windowHeight * canvasAspectRatio > windowWidth) {
    w = windowWidth * resMult;
    h = floor((windowWidth / canvasAspectRatio) * resMult);
  } else {
    w = floor(windowHeight * canvasAspectRatio * resMult);
    h = windowHeight * resMult;
  }
  createCanvas(w, h);
}

// percentage of height, for same scaling on different monitor sizes
function px(x) {
  return (width / 100) * x;
}

// percentage of height, for same scaling on different monitor sizes
function py(x) {
  return (height / 100) * x;
}

// min % of width and height for non 1:1 aspect ratio sketches
function p(x, mode = 0) {
  if (mode == 0) {
    return min(px(x), py(x));
  } else {
    return max(px(x), py(x));
  }
}

// Change the coordinate system to graph based, starting at center, positive to top right, negative to bottom left
function graphCoords() {
  translate(width / 2, height / 2);
  scale(1, -1);
}

// Random choice two, use ternary operator
function prob(chance = 0.5) {
  if (random(1) > chance) {
    return false;
  } else {
    return true;
  }
}

// Disable friendly error system (runs way faster)
function speed() {
  p5.disableFriendlyErrors = true;
}

// Return an array of points in a grid layout. Margin option included
function arrGrid(cellSize = 100, m = 100) {
  cs = cellSize;
  res = new Array([]);
  for (
    var x = (width % cs) / 2 + m / 2;
    x < width - m / 2 - (width % cs);
    x += cs
  ) {
    for (
      var y = (height % cs) / 2 + m / 2;
      y < height - m / 2 - (height % cs);
      y += cs
    ) {
      res.push([x, y]);
    }
  }
  return res;
}

// Array of colors from Coolors URL. Credit to https://openprocessing.org/user/159668
function createCols(_url) {
  let slash_index = _url.lastIndexOf("/");
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "#" + arr[i];
  }
  return arr;
}

// return random slice of array
function choose(arr) {
  return arr[floor(random(arr.length))];
}

// Do nothing for ternary operators
function nop() {}

// to reverse a iter, 10-0 becomes 0-10
function invert(x, max, min = 0) {
  return map(x, min, max, max, min);
}

// randrage(10) returns -10 to 10
function randrange(x) {
  return random(-x, x);
}

// % scale number
// randscale(.5, 10) returns 50% of 10 to 150% of 10
function randscale(x, s) {
  return x * random(1 - s, 1 + s);
}

// scale range to 0 - 1
function norm1(x, min, max) {
  return map(x, min, max, 0, 1);
}

// squish but -1 to 1
function norm2(x, min, max) {
  return map(x, min, max, -1, 1);
}

function ngon(p, s) {
  beginShape();
  for (let i = 0; i < p; i++) {
    let x = cos(map(i, 0, p, 0, TAU)) * s;
    let y = sin(map(i, 0, p, 0, TAU)) * s;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// for generating random seeds outside p5.js functions
function cryptoRandom() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}

// helper for urlseed functionality
function urlSeed(params) {
  if (params.seed != null) {
    seeed = params.seed;
    console.log("URL seed used: " + params.seed);
  } else {
    seeed = cryptoRandom();
    console.log("No seed provided, append this to the url to recreate:");
    console.log("?seed=" + seeed);
  }
}
