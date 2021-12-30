// what is this monstrosity
// this one also seems to break the randomseed, not sure why
// also don't care enough to fix it, I would do this one
// a lot different if I did it again

function setup() {
  let params = getURLParams()
  urlSeed(params)

  speed()
  ARCanvas(1, 1)

  stroke(255)
  strokeWeight(px(0.25))

  spacing = px(4)
  gridx = width / spacing
  gridy = height / spacing

  directions = {
    // only works with n#, 0-index, don't change this
    n0() {
      return line(0, 0, spacing, 0)
    },
    n1() {
      return line(spacing, 0, spacing, spacing)
    },
    n2() {
      return line(spacing, spacing, 0, spacing)
    },
    n3() {
      return line(0, spacing, 0, 0)
    },
    n4() {
      return line(0, 0, spacing, spacing)
    },
    n5() {
      return line(0, spacing, spacing, 0)
    },
  }
}

function draw() {
  randomSeed(seeed)
  background(0)
  drawSomething()
}

function drawSomething() {
  for (var i = 0; i < gridy; i++) {
    for (var j = 0; j < gridx; j++) {
      push()
      translate(spacing * j, spacing * i)
      randomFunc(directions)
      pop()
    }
  }
}

// yeah this is terrible lol
function randomFunc(list) {
  x = "n" + floor(random(0, Object.keys(list).length)).toString()
  return list[x]()
}
