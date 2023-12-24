//goals: would like to make many of these at one with differing colors

var n = 0; 
var c = 2;

function setup() {
  createCanvas(480, 480);
  colorMode(RGB);
  background(0);
  frameRate(40);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  
  
  //TOP ROW ----------------------------------------------------------
  var x = r * cos(a) +  10 * width/12; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(60, 64), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  3 * width/4; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(64,68), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  var x = r * cos(a) + width/2; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(68, 72), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  var x = r * cos(a) + 9 * width/20; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(72, 76), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  
  var x = r * cos(a) + width/6; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random (76, 80) , random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  var x = r * cos(a) + width/10; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random (80, 84), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  
  
  
  //MIDDLE ROW -----------------------------------------------------------
  var x = r * cos(a) +  width/3; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(84, 88), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  var x = r * cos(a) +  width/4; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(88, 92), random(120, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  2 * width/3; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(96, 100), random(120, 245), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  3.5* width/5; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(100, 104), random(12, 35), random(50, 75)); 
  ellipse(x, y, 4, 4);
    
  
  
  
  //BOTTOM ROW --------------------------------------------------------------
  var x = r * cos(a) +  width/2; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(104, 108), random(20, 45), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  
  
  
  //BOTTOM ROW
  //bottom row middle
  var x = r * cos(a) +  10.5 * width/12; 
  var y = r * sin(a) + 3 * height/4;
  
  // //bottom row middle right
  noStroke();
  fill(random(108, 112), random(20, 99), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  //bottom row middle 1
  var x = r * cos(a) +  width/2.2; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(112, 116), random(22, 45), random(30, 65)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  var x = r * cos(a) +  width/8; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(112, 116), random(20, 45), random(20, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
    
  var x = r * cos(a) + 4*  width/5; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(116 , 120), random(15, 25), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
    //bottom row right
  var x = r * cos(a) +  2.5 * width/3; 
  var y = r * sin(a) + 3 * height/2;
  
  noStroke();
  fill(random(108, 112), random(40, 45), random(75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  var x = r * cos(a) +  width/6; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(80 , 85), random(20, 45), random(50, 95)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
   n++;

  
}