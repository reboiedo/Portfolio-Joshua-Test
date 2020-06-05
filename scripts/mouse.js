let x = 1;
let y = 1;
let easing = 0.6;
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('cursor');
  frameRate(60);
}

function draw() {
  clear();
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  let w = windowWidth * 0.025;
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  strokeWeight(2);
  stroke('#444');
  fill('#e6e6e6');
  ellipse(x, y, w, w);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
