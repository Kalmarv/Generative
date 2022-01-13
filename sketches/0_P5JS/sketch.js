function setup() {
  let params = getURLParams()
  urlSeed(params)
  speed()
  ARCanvas(1, 1)
  randomSeed(seeed)
  noiseSeed(seeed)
  //cols = choose(randcols)
}

function draw() {
  randomSeed(seeed)
  noiseSeed(seeed)
}
