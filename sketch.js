
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,100,100);

}

function draw() 
{
  
  background(30);
  if ( keyDown("up")){
    box.y= box.y -5;
  }
  if ( keyDown("down")){
    box.y= box.y +5;
  }
  drawSprites();
}




