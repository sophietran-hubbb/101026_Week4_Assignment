let angle1, angle2;
let rotSpeed1, rotSpeed2;
let x,y;
let numSquares;
let spacing;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES); // 0 to 360 degrees
  rectMode(CENTER);
  angle1 = 0;
  angle2 = 15;
  rotSpeed1 = 2;
  rotSpeed2 = 2;
  x = 200;
  y = 200;
  numSquares = 5;
  spacing = x - 40;

}

function draw() {
  // Set background to black
  background(0,20);
  //console.log(angle);
  
  //white square
  push();
  translate(width/2, height/2);
  rotate(angle1);
  x = 200
  y = 200
  for(let i = 0; i < numSquares; i++)
  {
    noFill();
    strokeWeight(10);
    stroke(255);
    rect(0,0,x,y);
    spacing -= 40;
      x -= 40;
      y -= 40;
  }
  pop();

  
  //red square
  push();
  translate(width/4, height/4);
  rotate(angle2);
  x = 200
  y = 200
  for(let i = 0; i < numSquares; i++)
  {
    noFill();
    strokeWeight(10);
    stroke(255, 0, 0);
    rect(0,0,x,y);
    spacing -= 40;
      x -= 40;
      y -= 40;
  }
  pop(); 

  angle1 += rotSpeed1;
  angle2 += rotSpeed2;
}
  

