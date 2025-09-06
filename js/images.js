//game images and sounds

let roadImage;
let actorImage;
let carImage;
let carImage2;
let carImage3;
let carsImage = [];

let trackSound;
let collisionSound;
let dotSound;

function preload(){
  roadImage = loadImage("images/road.png");
  actorImage = loadImage("images/actor-1.png");
  carImage = loadImage("images/car-1.png");
  carImage2 = loadImage("images/car-2.png");
  carImage3 = loadImage("images/car-3.png");
  carsImage = [carImage, carImage2, carImage3, carImage, carImage2, carImage3];
  
  trackSound = loadSound("sounds/track.mp3");
  collisionSound = loadSound("sounds/collided.mp3");
  dotSound = loadSound("sounds/points.wav");
}