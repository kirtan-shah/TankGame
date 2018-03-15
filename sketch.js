

var x = 0;
var y = 0;

var up = false, down = false, left = false, right = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}

function keyPressed() {
  if(keyCode == UP_ARROW)
    up = true;
  if(keyCode == DOWN_ARROW)
    down = true;
  if(keyCode == LEFT_ARROW)
    left = true;
  if(keyCode == RIGHT_ARROW)
    right = true;
}

function keyReleased() {
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
  background(0, 220, 200);
  if(up) y--;
  if(down) y++;
  if(left) x--;
  if(right) x++;
  fill(0, 180, 30);
  rect(x, y, 50, 50);
}
