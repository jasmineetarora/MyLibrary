var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1=createSprite(300,300,50,50);
  ball2=createSprite(400,300,50,50);
  ball3=createSprite(500,300,50,50);
  ball1.shapeColor="white";
  ball2.shapeColor="white";
  ball3.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,ball2)){
    movingRect.shapeColor = "blue";
    ball2.shapeColor = "blue";
  } else{
    movingRect.shapeColor = "green";
    ball2.shapeColor = "white";
  }
 
  drawSprites();
}

