/*
https://vimeo.com/channels/learningp5js/138935675
*/

var x = 0;
var speed = 3; 
var counter = 0;
var par;

function setup() {
  createCanvas(600, 400);
  par = createP()
}

function draw() {
  background(130);
  stroke(255);
  strokeWeight(4);
  fill(100,100,200);
  ellipse(x, 200, 100, 100);

  
  if (x > width || x < 0) {
    speed = -speed;
    counter++
  }

 x = x + speed; 
 par.html("The walls has been touched " + counter)
}

  