var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,200,50,50);
 movingRect.shapeColor="green";
 
}

function draw() {
  background(255,255,255); 
movingRect.x=mouseX;
 movingRect.y=mouseY;
if ( fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
 movingRect.y - fixedRect.y < movingRect.height/2 + movingRect.height/2 &&
 movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
 fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
  fixedRect.shapeColor="pink";
 movingRect.shapeColor="pink";}

 else {  
   fixedRect.shapeColor="green";
 movingRect.shapeColor="green";
 }
  drawSprites();
}


