function noise(container, tile, globalAlpha) {
  tile = tile || 256;
  globalAlpha = globalAlpha || 0.08;
  var canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);
  var ref = document.createElement('canvas');
  var width = container.offsetWidth * window.devicePixelRatio;
  var height = container.offsetHeight * window.devicePixelRatio;
  ref.width = ref.height = tile;
  var ctx = canvas.getContext('2d');
  _update();

  window.addEventListener('resize', _resize.bind(this));

  function _update() {
    _noise(ref.getContext('2d'));
    var tileWidth = Math.ceil(width / tile);
    var tileHeight = Math.ceil(height / tile);
    var x = 0;
    var y = 0;
    canvas.width = width;
    canvas.height = height;
    ctx.save();
    ctx.globalAlpha = globalAlpha;
    for (var i = 0; i < tileWidth; i++) {
      for (var j = 0; j < tileHeight; j++) {
        ctx.drawImage(ref, x, y);
        y += tile;
      }
      x += tile;
      y = 0;
    }
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.restore();
    window.requestAnimationFrame(_update);
  }

  function _noise(context) {
    var image = context.createImageData(tile, tile);
    for (
      let dataBuffer = new Uint32Array(image.data.buffer),
        bufferLength = dataBuffer.length,
        i = 0;
      i < bufferLength;

    ) {
      dataBuffer[i++] = ((255 * Math.random()) | 0) << 24;
    }
    context.putImageData(image, 0, 0);
  }

  function _resize() {
    width = container.offsetWidth * window.devicePixelRatio;
    height = container.offsetHeight * window.devicePixelRatio;
  }
}

var noiseContainer = document.getElementById('container');

noise(noiseContainer, 128, 0.16);
