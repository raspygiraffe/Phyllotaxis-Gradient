//goals: would like to make many of these at one with differing colors

var n = 0; 
var c = 2;

function setup() {
  createCanvas(480, 480);
  colorMode(RGB);
  background(0);
  frameRate(24);
}

function draw() {
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  
  
  //TOP ROW ----------------------------------------------------------
  var x = r * cos(a) +  10 * width/12; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(0, 4), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  3 * width/4; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(4,8), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  var x = r * cos(a) + width/2; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random(8, 12), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  var x = r * cos(a) + 9 * width/20; 
  var y = r * sin(a) + height/4;
  
  //noStroke();
  fill(random(12, 16), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  
  var x = r * cos(a) + width/6; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random (16, 20) , random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  var x = r * cos(a) + width/10; 
  var y = r * sin(a) + height/4;
  
  noStroke();
  fill(random (20, 24), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4); 
  
  
  
  
  //MIDDLE ROW -----------------------------------------------------------
  var x = r * cos(a) +  width/3; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(24, 28), random(20, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  var x = r * cos(a) +  width/4; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(28, 32), random(120, 45), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  2 * width/3; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(36, 40), random(120, 245), random(50, 75)); 
  ellipse(x, y, 4, 4);
  
  
  var x = r * cos(a) +  3.5* width/5; 
  var y = r * sin(a) + height/2;
  
  noStroke();
  fill(random(40, 44), random(12, 35), random(50, 75)); 
  ellipse(x, y, 4, 4);
    
  
  
  
  //BOTTOM ROW --------------------------------------------------------------
  var x = r * cos(a) +  width/2; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(44, 48), random(20, 45), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  
  
  
  //BOTTOM ROW
  //bottom row middle
  var x = r * cos(a) +  10.5 * width/12; 
  var y = r * sin(a) + 3 * height/4;
  
  // //bottom row middle right
  noStroke();
  fill(random(48, 52), random(20, 99), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  //bottom row middle 1
  var x = r * cos(a) +  width/2.2; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(52, 56), random(22, 45), random(30, 65)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  var x = r * cos(a) +  width/8; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(52, 56), random(20, 45), random(20, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
    
  var x = r * cos(a) + 4*  width/5; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(56 , 60), random(15, 25), random(50, 75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
    //bottom row right
  var x = r * cos(a) +  2.5 * width/3; 
  var y = r * sin(a) + 3 * height/2;
  
  noStroke();
  fill(random(48, 52), random(40, 45), random(75)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
  
  
  var x = r * cos(a) +  width/6; 
  var y = r * sin(a) + 3 * height/4;
  
  noStroke();
  fill(random(20 , 25), random(20, 45), random(50, 95)); 
  ellipse(x, y, random(4, 5), random(4, 5)); 
  
   n++;

  
}