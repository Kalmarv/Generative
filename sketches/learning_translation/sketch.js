let x = 0
let a = 0
let c = 0
let d = 0

function setup() {
  speed()
  ARCanvas(1, 1)
  strokeWeight(px(0.5))
  background(30)
  SegmentOneSlider = createSlider(0, 0.1, 0.05, 0.005)
  SegmentOneSlider.position(10, 10)
  SegmentTwoSlider = createSlider(0, 0.1, 0.06, 0.005)
  SegmentTwoSlider.position(10, 30)
  SegmentThreeSlider = createSlider(0, 0.1, 0.05, 0.005)
  SegmentThreeSlider.position(10, 50)
  SegmentFourSlider = createSlider(0, 0.1, 0.06, 0.005)
  SegmentFourSlider.position(10, 70)
  scl = px(12)
}

function draw() {
  stroke(255)
  translate(height / 2, width / 2)
  strokeWeight(1)
  stroke(247, 220, 111, 100)
  line(0, 0, cos(x) * scl, sin(x) * scl)
  translate(cos(x) * scl, sin(x) * scl)
  strokeWeight(1)
  stroke(130, 224, 170, 100)
  line(0, 0, cos(a) * scl * 0.9, sin(a) * scl * 0.9)
  translate(cos(a) * scl * 0.9, sin(a) * scl * 0.9)
  strokeWeight(1)
  stroke(84, 153, 199, 100)
  line(0, 0, cos(c) * scl * 0.8, sin(c) * scl * 0.8)
  translate(cos(c) * scl * 0.8, sin(c) * scl * 0.8)
  strokeWeight(1)
  stroke(241, 148, 138, 100)
  line(0, 0, cos(d) * scl * 0.7, sin(d) * scl * 0.7)
  strokeWeight(1)
  stroke(255)
  x -= SegmentOneSlider.value()
  a += SegmentTwoSlider.value()
  c -= SegmentThreeSlider.value()
  d += SegmentFourSlider.value()
}
