// Always create square canvas, fitting to window
function squareCanvas(resMult = 1) {
  createCanvas((w = min(windowWidth, windowHeight) * resMult), (h = min(windowWidth, windowHeight) * resMult))
}

// Custom aspect ratio sketch, with resolution multiplier
// for higher quality sketches to share/print
function ARCanvas(xAspect, yAspect, resMult = 1, mode = P2D) {
  let canvasAspectRatio = xAspect / yAspect
  if (windowHeight * canvasAspectRatio > windowWidth) {
    w = windowWidth * resMult
    h = floor((windowWidth / canvasAspectRatio) * resMult)
  } else {
    w = floor(windowHeight * canvasAspectRatio * resMult)
    h = windowHeight * resMult
  }
  createCanvas(w, h, mode)
}

// percentage of width, for same scaling on different monitor sizes
function px(x) {
  return (width / 100) * x
}

// percentage of height, for same scaling on different monitor sizes
function py(x) {
  return (height / 100) * x
}

// min or max % of width and height for non 1:1 aspect ratio sketches
function pxy(x, mode = 0) {
  if (mode == 0) {
    return min(px(x), py(x))
  } else {
    return max(px(x), py(x))
  }
}

// Change the coordinate system to cartesian
function graphCoords() {
  translate(width / 2, height / 2)
  scale(1, -1)
}

// return true based on probablity, use in ternary operator
function prob(chance = 0.5) {
  if (random(1) > chance) {
    return false
  } else {
    return true
  }
}

// Disable friendly error system (runs way faster)
function speed() {
  p5.disableFriendlyErrors = true
}

// Return an array of points in a grid layout
// Margin option included (but doesn't work all the time)
function arrGrid(cellSize = 100, m = 100) {
  cs = cellSize
  res = new Array([])
  for (var x = (width % cs) / 2 + m / 2; x < width - m / 2 - (width % cs); x += cs) {
    for (var y = (height % cs) / 2 + m / 2; y < height - m / 2 - (height % cs); y += cs) {
      res.push([x, y])
    }
  }
  return res
}

// Array of colors from Coolors URL. Credit to https://openprocessing.org/user/159668
function createCols(_url) {
  let slash_index = _url.lastIndexOf("/")
  let pallate_str = _url.slice(slash_index + 1)
  let arr = pallate_str.split("-")
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "#" + arr[i]
  }
  return arr
}

// return random slice of array
function choose(arr) {
  return arr[floor(random(arr.length))]
}

vChoose = (arr) => arr[floor(vRand(0, arr.length))]

vRand = (min, max) => Math.random() * (max - min) + min

// Do nothing for ternary operators
function nop() {}

/**
 * Reverses a iter
 * @param {number} x Input
 * @param {number} max Highest the number will be
 * @param {number} min Lowest the number will be (default 0)
 * @returns
 */
function invert(x, max, min = 0) {
  return map(x, min, max, max, min)
}

// randrage(10) returns -10 to 10
function randrange(x) {
  return random(-x, x)
}

// % scale number
// randscale(.5, 10) returns 50% of 10 to 150% of 10
function randscale(x, s) {
  return x * random(1 - s, 1 + s)
}

// normalize range to 0 - 1
function norm1(x, min, max) {
  return map(x, min, max, 0, 1)
}

// normalize range to -1 - 1
function norm2(x, min = 0, max = 1) {
  return map(x, min, max, -1, 1)
}

// polygon that makes a circle with specified points and scale
function ngon(p, s) {
  beginShape()
  for (let i = 0; i < p; i++) {
    let x = cos(map(i, 0, p, 0, TAU)) * s
    let y = sin(map(i, 0, p, 0, TAU)) * s
    vertex(x, y)
  }
  endShape(CLOSE)
}

// for generating random seeds outside p5.js functions
function cryptoRandom() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0]
}

// used to get ?seed=YOUR_SEED from url to share sketches with
// predefined seed
function urlSeed(params) {
  if (params.seed != null) {
    seeed = params.seed
    console.log("URL seed used: " + params.seed)
  } else {
    seeed = cryptoRandom()
    console.log("No seed provided, append this to the url to recreate:")
    console.log("?seed=" + seeed)
  }
}

// Stolen from https://github.com/inconvergent
function probf(p, dofx, elsefx = null) {
  //execute dofx with a probability of p,
  //or elsefx with a probability of (1-p)
  if (random() < p) {
    return dofx()
  } else if (elsefx !== null) {
    return elsefx()
  }
  return null
}

/**
 * Creates a bumpy line from (x1,y1) to (x2,y2)
 * @param {number} x1 Starting X
 * @param {number} y1 Starting Y
 * @param {number} x2 Ending X
 * @param {number} y2 Ending Y
 * @param {number} points Number of points in line
 * @param {number} noiseScale Number the index is multiplied by to smooth the noise
 * @param {number} bumpHeight Maximum height the points will travel from the line (perpendicular)
 * @param {number} offset Offset value for noise, so lines are not identical
 */
function lineVertex(x1, y1, x2, y2, points, noiseScale, bumpHeight, offset) {
  dx = x2 - x1
  dy = y2 - y1
  rads = Math.atan2(dx, dy)
  beginShape()
  for (let i = 0; i < points; i++) {
    x = map(i, 0, points - 1, x1, x2)
    y = map(i, 0, points - 1, y1, y2)
    x = x + map(noise(i / noiseScale, offset), 0, 1, -(cos(-rads) * bumpHeight), cos(-rads) * bumpHeight)
    y = y + map(noise(i / noiseScale, offset), 0, 1, -(sin(-rads) * bumpHeight), sin(-rads) * bumpHeight)
    vertex(x, y)
  }
  endShape()
}

/**
 * Normalizes 0 - 1 to -1 to 1
 * @param {number} x
 */
function expand(x) {
  return (x - 0.5) * 2
}
