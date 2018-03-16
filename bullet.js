
function Bullet(x, y, vx, vy) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
}

Bullet.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
}

Bullet.prototype.draw = function() {
  update();
  fill(255, 0, 0);
  ellipse(this.x, this.y, 9, 9);
}
