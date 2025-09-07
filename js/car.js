//car code

let xCars = [];
let yCars = [];
let speedCars = []
let carLenght = 50;
let carHeight = 25;

function setupCars() {
  carLenght = width * 0.12;
  carHeight = height * 0.08;

  let numberOfCars = 6;
  let laneSpacing = height / (numberOfCars +1);

  let verticalOffset = -80;

  for (let i = 0; i < numberOfCars; i++) {
    xCars[i] = width + random(50, 400);
    yCars[i] = laneSpacing * (i + 1) + verticalOffset;
    speedCars[i] = -random(5.0, 10.0);
 }
} 

function showCar(){
  for (let i = 0; i < yCars.length; i++){
    let img = carsImage[i % carsImage.length];
    image(img, xCars[i], yCars[i], carLenght, carHeight);
  }
}

function moveCar(){
  for(let i = 0; i < yCars.length; i++){
    xCars[i] += speedCars[i];
  }
}
  
function returnCarStartingPosition(){
  for(let i = 0; i < yCars.length; i++){
    if(xCars[i] < -carLenght) {
      xCars[i] = width + random(50, 400);
      speedCars[i] = -random(5.0, 10.0);
    }
   }
  }
