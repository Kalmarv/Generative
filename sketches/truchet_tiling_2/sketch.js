function setup() {
  createCanvas((w = 900), (h = 900));
  angleMode(DEGREES);
  colorMode(HSB);
  seeed = random(10000000000000);
}

function draw() {
  s = px(10);
  gridx = w / s;
  gridy = h / s;
  randomSeed(seeed);
  background(0);
  stroke((frameCount / 2) % 360, 100, 100);
  strokeWeight(px(0.5));
  smooth();
  noFill();

  drawSomething();
}

function drawSomething() {
  for (var i = 0; i < gridy; i++) {
    for (var j = 0; j < gridx; j++) {
      if (j == 0 || j == w / s - 1 || i == 0 || i == h / s - 1) {
        if (j == 0 && i == 0) {
          push();
          translate(s * j, s * i);
          arc(s, s, s, s, 180, 270);
          pop();
        }
        if (j == 0 && i == w / s - 1) {
          push();
          translate(s * j, s * i);
          arc(s, 0, s, s, 90, 180);
          pop();
        }
        if (i == w / s - 1 && j != 0 && j != h / s - 1) {
          push();
          translate(s * j, s * i);
          line(0, s / 2, s, s / 2);
          prob() ? arc(0, 0, s, s, 0, 90) : arc(s, 0, s, s, 90, 180);
          pop();
        }
        if (j == 0 && i != 0 && i != h / s - 1) {
          push();
          translate(s * j, s * i);
          line(s / 2, 0, s / 2, s);
          prob() ? arc(s, s, s, s, 180, 270) : arc(s, 0, s, s, 90, 180);
          pop();
        }
        if (j == w / s - 1 && i == h / s - 1) {
          push();
          translate(s * j, s * i);
          arc(0, 0, s, s, 0, 90);
          pop();
        }
        if (j == w / s - 1 && i != 0 && i != h / s - 1) {
          push();
          translate(s * j, s * i);
          line(s / 2, 0, s / 2, s);
          prob() ? arc(0, 0, s, s, 0, 90) : arc(0, s, s, s, 270, 0);
          pop();
        }
        if (j == w / s - 1 && i == 0) {
          push();
          translate(s * j, s * i);
          arc(0, s, s, s, 270, 0);
          pop();
        }
        if (i == 0 && j != 0 && j != h / s - 1) {
          push();
          translate(s * j, s * i);
          line(0, s / 2, s, s / 2);
          prob() ? arc(s, s, s, s, 180, 270) : arc(0, s, s, s, 270, 0);
          pop();
        }
      } else {
        push();
        translate(s * j, s * i);
        prob()
          ? (arc(0, 0, s, s, 0, 90), arc(s, s, s, s, 180, 270))
          : (arc(0, s, s, s, 270, 0), arc(s, 0, s, s, 90, 180));

        pop();
      }
    }
  }
}
