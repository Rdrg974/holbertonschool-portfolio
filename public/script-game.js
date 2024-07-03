if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // Mobile device style: fill the whole browser client area with the game canvas:
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
  document.getElementsByTagName('head')[0].appendChild(meta);

  var canvas = document.querySelector("#unity-canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.position = "fixed";

  document.body.style.textAlign = "left";
}

createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: "Build/Game.data",
  frameworkUrl: "Build/Game.framework.js",
  codeUrl: "Build/Game.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Portfolio Project",
  productVersion: "0.1",
  // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
  // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});

function resizeGame() {
  var gameContainer = document.getElementById('gameContainer');
  var aspectRatio = 16 / 9; // Adjust the ratio to fit your game's aspect ratio

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var newWidth, newHeight;

  if (windowWidth / windowHeight > aspectRatio) {
    newHeight = windowHeight * 0.8; // Adjust to change the size
    newWidth = newHeight * aspectRatio;
  } else {
    newWidth = windowWidth * 0.6; // Adjust to change the size
    newHeight = newWidth / aspectRatio;
  }

  gameContainer.style.width = newWidth + 'px';
  gameContainer.style.height = newHeight + 'px';
}

window.addEventListener('resize', resizeGame);
window.addEventListener('load', resizeGame);