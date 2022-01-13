const p = {
  gap: Math.min(window.innerWidth, window.innerHeight) * 0.01,
  ol: 0.45,
  sh: 0.05,
  fh: 0.16,
  ms: 0.1,
  oceanTop: {
    r: 86,
    g: 166,
    b: 198,
  },
  oceanBottom: {
    r: 2,
    g: 62,
    b: 138,
  },
  sandBottom: {
    r: 255,
    g: 215,
    b: 186,
  },
  sandTop: {
    r: 220,
    g: 169,
    b: 125,
  },
  forestBottom: {
    r: 62,
    g: 105,
    b: 84,
  },
  forestTop: {
    r: 93,
    g: 169,
    b: 126,
  },
  mountBottom: {
    r: 120,
    g: 120,
    b: 120,
  },
  mountTop: {
    r: 255,
    g: 255,
    b: 255,
  },
}
const pane = new Tweakpane.Pane({
  title: "Parameters",
  expanded: false,
})

function setup() {
  let params = getURLParams()
  urlSeed(params)

  ARCanvas(1, 1)
  pane.addInput(p, "ms", {
    label: "Move Speed",
    min: 0.01,
    max: 0.5,
  })
  pane.addInput(p, "gap", {
    label: "Grid Size",
    min: 2,
    max: 50,
  })
  pane.addInput(p, "ol", {
    label: "Ocean Level",
    min: 0,
    max: 1,
  })
  pane.addInput(p, "sh", {
    label: "Sand Height",
    min: 0,
    max: 1,
  })
  pane.addInput(p, "fh", {
    label: "Forest Height",
    min: 0,
    max: 1,
  })
  pane.addInput(p, "oceanBottom", {
    label: "Ocean Bottom",
  })
  pane.addInput(p, "oceanTop", {
    label: "Ocean Top",
  })
  pane.addInput(p, "sandBottom", {
    label: "Sand Bottom",
  })
  pane.addInput(p, "sandTop", {
    label: "Sand Top",
  })
  pane.addInput(p, "forestBottom", {
    label: "Forest Bottom",
  })
  pane.addInput(p, "forestTop", {
    label: "Forest Top",
  })
  pane.addInput(p, "mountBottom", {
    label: "Mountain Bottom",
  })
  pane.addInput(p, "mountTop", {
    label: "Mountain Top",
  })
  noiseScale = 0.0075
  //colorMode(HSB)
  //noLoop()
  off = {
    x: 1000.0,
    y: 1000.0,
    z: 1000.0,
  }
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
  for (x = 0; x < px(100); x += p.gap) {
    for (y = 0; y < px(100); y += p.gap) {
      nValue = noise(
        map(x, 0, w, 0, 750) * noiseScale + off.x + 0.5,
        map(y, 0, w, 0, 750) * noiseScale + off.y + 0.5,
        off.z
      )
      noStroke()
      if (nValue <= p.ol) {
        fill(
          map(nValue, 0, p.ol, p.oceanBottom.r, p.oceanTop.r),
          map(nValue, 0, p.ol, p.oceanBottom.g, p.oceanTop.g),
          map(nValue, 0, p.ol, p.oceanBottom.b, p.oceanTop.b)
        )
        rect(x, y, p.gap)
      } else if (nValue <= p.ol + p.sh) {
        fill(
          map(nValue, p.ol, p.ol + p.sh, p.sandBottom.r, p.sandTop.r),
          map(nValue, p.ol, p.ol + p.sh, p.sandBottom.g, p.sandTop.g),
          map(nValue, p.ol, p.ol + p.sh, p.sandBottom.b, p.sandTop.b)
        )
        rect(x, y, p.gap)
      } else if (nValue <= p.ol + p.sh + p.fh) {
        fill(
          map(
            nValue,
            p.ol + p.sh,
            p.ol + p.sh + p.fh,
            p.forestBottom.r,
            p.forestTop.r
          ),
          map(
            nValue,
            p.ol + p.sh,
            p.ol + p.sh + p.fh,
            p.forestBottom.g,
            p.forestTop.g
          ),
          map(
            nValue,
            p.ol + p.sh,
            p.ol + p.sh + p.fh,
            p.forestBottom.b,
            p.forestTop.b
          )
        )
        rect(x, y, p.gap)
      } else if (nValue > p.ol) {
        fill(
          map(nValue, p.ol + p.sh + p.fh, 1, p.mountBottom.r, p.mountTop.r),
          map(nValue, p.ol + p.sh + p.fh, 1, p.mountBottom.g, p.mountTop.g),
          map(nValue, p.ol + p.sh + p.fh, 1, p.mountBottom.b, p.mountTop.b)
        )
        rect(x, y, p.gap)
      }
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    off.x -= p.ms
  }
  if (keyIsDown(RIGHT_ARROW)) {
    off.x += p.ms
  }
  if (keyIsDown(UP_ARROW)) {
    off.y -= p.ms
  }
  if (keyIsDown(DOWN_ARROW)) {
    off.y += p.ms
  }
  if (keyIsDown(SHIFT)) {
    noiseScale += 0.00025
  }
  if (keyIsDown(ENTER)) {
    noiseScale -= 0.00025
  }
}
