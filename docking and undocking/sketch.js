var bg,iss,sc1,sc2,sc3,sc4;
var issImage,spacecraft;

function preload(){
  bg = loadImage("background.jpg");
  issImage = loadImage("iss.png");
  sc1 = loadImage("spacecraft1.png");
  sc2 = loadImage("spacecraft2.png");
  sc3 = loadImage("spacecraft3.png");
  sc4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  iss = createSprite()
}
function draw() {
  background(255,255,255);  
  drawSprites();
}