var mR,fR;
var oR;
function setup() {
  createCanvas(800,400);
  fR=createSprite(400, 200, 150, 250);
  fR.shapeColor="green"
  fR.debug=true;
  mR=createSprite(200, 200, 50, 50);
  mR.shapeColor="green"
  mR.debug=true;
 // mR.velocityX=3;
  oR=createSprite(600,200,50,40);
  oR.shapeColor="green"
  oR.debug=true;
 // oR.velocityX=-3;
}

function draw() {
  background(0);  
  mR.x=mouseX;
  mR.y=mouseY;

  console.log("Sum of their half widths= "+(mR.width+fR.width)/2);
  console.log("Distance between centers= "+(mR.x-fR.x));

  if(isTouching(mR,fR)){
    fR.shapeColor="yellow"
    //mR.shapeColor="blue"
  }else{
    fR.shapeColor="green"
    //mR.shapeColor="green"
  }

  if(isTouching(mR,oR)){
    oR.shapeColor="purple"
  }else{
    oR.shapeColor="green"
  }
// bounce(fR,oR);

  drawSprites();
}

