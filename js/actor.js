//actor code
let xActor, yActor;
let actorWidth, actorHeight;
let collision = false;
let myPoints = 0;
let collisionCooldown = false;
let sidewalkHeight;

function setupActor() {
  actorWidth = width * 0.09;
  actorHeight = height * 0.075;
  sidewalkHeight = height * 0.01;

  xActor = width / 2 - actorWidth / 2;
  yActor = height - actorHeight - sidewalkHeight;
}

function showActor() {
  image(actorImage, xActor, yActor, actorWidth, actorHeight);
}

function moveActor() {
  let actorSpeed = 8;

  if (keyIsDown(UP_ARROW)) {
    yActor = max(0, yActor - actorSpeed);
  }
  if ((keyIsDown(DOWN_ARROW)) && yActor + actorHeight < height) {
    yActor += actorSpeed;
  }
}

function pulseElement(id) {
  const el = document.getElementById(id);
  el.classList.add('pulse');
  setTimeout(() => {
    el.classList.remove('pulse');
  }, 300);
}

function checkCollision() {
  for (let i = 0; i < xCars.length; i++) {
    collision = collideRectRect(xCars[i], yCars[i], carLenght, carHeight, xActor, yActor, actorWidth, actorHeight);

    if (!collisionCooldown && collision) {
      deaths++;
      pulseElement('deaths');
      collisionSound.play();
      updateHUD();
      returnActorToStartigPosition();
      shakeCanvas();
    }
  }

  if (yActor >= height - 50) {
    collisionCooldown = false;
  }

  if (deaths >= maxDeaths) {
    gameOver();
  }
}

function shakeCanvas() {
  const container = document.getElementById('game-container');
  container.style.transform = `translate(${random(-5, 5)}px, ${random(-5, 5)}px)`;
  setTimeout(() => container.style.transform = 'translate(0,0)', 100)
}

function returnActorToStartigPosition() {
  yActor = height - actorHeight - sidewalkHeight;
  xActor = width / 2 - actorWidth / 2;
  collisionCooldown = false;
}

function score() {
  if (yActor * (height / 400) < 15) {
    myPoints += 1;
    dotSound.play();
    pulseElement('points');
    returnActorToStartigPosition();
    updateHUD();
  }
}

function pointsGreatThanZero() {
  return myPoints > 0
}

function canYouMove() {
  return yActor < height - 34;
}

function updateHUD() {
  document.getElementById('points').innerText = `Pontos: ${myPoints}`;
  document.getElementById('deaths').innerText = `Colisões: ${deaths} / ${maxDeaths}`;
}



