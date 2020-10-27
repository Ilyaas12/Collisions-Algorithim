var movingRect, fixedRect

function setup() {
  createCanvas(800,400);

 fixedRect = createSprite(400, 200, 70, 50);
 fixedRect.shapeColor = "green"

 movingRect = createSprite(700,190,70,50)
 movingRect.shapeColor = "yellow"
}
 
function draw() {
  background(255,255,255);

   movingRect.x = World.mouseX
   movingRect.y = World.mouseY 

    if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
      && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
      && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.shapeColor= "red" 
      fixedRect.shapeColor= "red"

    }
    else{
    movingRect.shapeColor= "green"
    fixedRect.shapeColor= "yellow"  
    }

  drawSprites();
}