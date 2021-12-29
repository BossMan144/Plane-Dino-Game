var bgImg
var flyingDinoImg, deadDinoImg;
var eggImg, bulletImg;
var planeImg; 
var lifebar1, lifebar2, lifebar3;

var invisCeling;
var score;


function preload() {
bgImg = loadImage("Assets/Sky.jpg");
flyingDinoImg = loadAnimation("Assets/dino3.png", "Assets/dino2.png", "Assets/dino1.png", "Assets/dino5.png", "Assets/dino6.png");
//deadDinoImg = loadImage("Assets/.png");
eggImg = loadImage("Assets/Fossil_Egg.png");
bulletImg = loadImage("Assets/Bullet.png");
planeImg = loadImage("Assets/Plane.png");
lifebar1 = loadImage("Assets/lifebar1.png");
lifebar2 = loadImage("Assets/lifebar2.png");
lifebar3 = loadImage("Assets/lifebar3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  invisCeling = createSprite(960, windowHeight-1, windowWidth, 1);
  //flyingDino = createSprite(windowWidth - 850, windowHeight - 500, 100,100);
  //flyingDino.addAnimation("flying", flyingDinoImg);
  //flyingDino.debug = true;
  //bgSprite = createSprite(windowWidth - 800, windowHeight - 470, windowWidth, windowHeight); 
  //bgSprite.addImage(bgImg);
  //bgSprite.scale = 6; 
}

function draw() {
  background("blue");  
  //bgSprite.velocityX = -7;
  //bgSprite.x = bgSprite.width/2;
  //if(bgSprite.x < 0){
  //  bgSprite.x = bgSprite.width/2;
  //}
  drawSprites();
}