 var fixed;
 var moving;
 function setup() {
  createCanvas(800,400);
 
  
  fixed =createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,70,30);
fixed.shapeColor="white";
moving.shapeColor="white";
fixed.debug=true;
moving.debug=true;
}

function draw() {
  background(0,0,0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2
     && fixed.x-moving.x<fixed.width/2+moving.width/2
     && moving.y-fixed.y<moving.height/2+fixed.height/2
     && fixed.y-moving.y<fixed.height/2+moving.height/2){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
else{
  moving.shapeColor="white";
  fixed.shapeColor="white";
}
  drawSprites();
}