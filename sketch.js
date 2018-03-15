

var x = 0;
var y = 0;

var up, down, left, right;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}

void keyPressed() {
  if(keyCode == 38)
    up = true;
  if(keyCode == 40)
    down = true;
  if(keyCode == 37)
    left = true;
  if(keyCode == 39)
    right = true;
}

void keyReleased() {
  if(keyCode == 38)
    up = false;
  if(keyCode == 40)
    down = false;
  if(keyCode == 37)
    left = false;
  if(keyCode == 39)
    right = false;
}

function draw() {
  background(0, 220, 160);
  if(up) y--;
  if(down) y++;
  if(left) x--;
  if(right) x++;
  fill(0, 180, 30);
  rect(x, y, 50, 50);
}
