let img;
let portal;
let bebbia;
let bamx;
let unveil;
let unchained;
let family;
let images = {};

function preload() {}

function setup() {
  console.log('setup');
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('c2');

  unveil = select('#unveil');
  console.log(document.querySelectorAll('.project-hover'));
  document.querySelectorAll('.project-hover').forEach(function (item) {
    images[item.dataset.image] = loadImage(item.dataset.image);
    item.addEventListener('mouseenter', unveilImage.bind(this));
    item.addEventListener('mousemove', unveilImage.bind(this));
    item.addEventListener('mouseout', clearImage.bind(this));
  });
}

function unveilImage(e) {
  console.log(e.currentTarget.dataset.image);
  imageMode(CENTER);
  image(images[e.currentTarget.dataset.image], mouseX, mouseY);
}

function clearImage(e) {
  clear();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
