var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(600, 400, 50, 80);
  gameObject1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameObject1)) {
    gameObject1.shapeColor = "blue";
  } else {
    gameObject1.shapeColor = "green";
  }
  
  drawSprites();
}