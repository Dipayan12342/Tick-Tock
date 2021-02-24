var hr, sc, mn;
var hrAngle, scAngle, mnAngle;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);

}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,70,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke("white");
  strokeWeight(10);
  point(0,0);

  strokeWeight(10);
  noFill();
  
  stroke("green");
  arc(0,0,300,300,0,scAngle);
  
  stroke("blue");
  arc(0,0,280,280,0,mnAngle);

  stroke("red");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}