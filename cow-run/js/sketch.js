let canvasRef;
let deaths = 0;
const maxDeaths = 5;
let gameStarted = false;

function setup() {
  let canvasWidth = windowWidth * 0.4;
  let canvasHeight = windowHeight * 0.6;
  canvasRef = createCanvas(canvasWidth, canvasHeight);
  canvasRef.parent('game-container');

  carLenght = width * 0.12;
  carHeight = height * 0.08;
  
  setupCars();
  setupActor();
  noLoop();
}

function windowResized() {
  if (canvasRef && gameStarted) {
    resizeCanvas(windowWidth * 0.9, windowHeight * 0.8);
  }
}

window.addEventListener('resize', windowResized);

function startGame() {
  gameStarted = true;
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-over-screen").style.display = "none";
  document.getElementById("game-container").style.display = "flex";
  document.getElementById("hud").style.display = "flex";

  myPoints = 0;
  deaths = 0;
  setupActor();

  updateHUD();
  trackSound.loop();
  loop();
}

function draw() {
  if (!gameStarted) return;

  background(0);
  image(roadImage, 0, 0, width, height);

  showActor();
  showCar();
  moveCar();
  moveActor();
  returnCarStartingPosition();
  checkCollision();
  score();
}

function gameOver() {
  noLoop();
  gameStarted = false;
  document.getElementById('hud').style.display = 'none';
  document.getElementById('game-over-screen').style.display = 'block';
  document.getElementById('game-container').style.display = 'none';
}

function resetGame() {
  myPoints = 0;
  deaths = 0;
  yActor = height - 34;
  updateHUD();

  document.getElementById("hud").style.display = "flex";
  document.getElementById("game-over-screen").style.display = "none";
  document.getElementById("game-container").style.display = "flex";

  gameStarted = true;
  loop();
}
