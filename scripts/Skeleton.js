class Skeleton extends Character {
  constructor(name = 'Skeleton', hp = 8, atk = 3, def = 1, spd = 2) {
    super(name, hp, atk, def, spd);
    this.state = 'skeleton';
  }

  draw(size) {
    fill(220, 220, 180);
    ellipse(this.x * size + size/2, this.y * size + size/2, size * 0.8);
    stroke(80, 80, 60);
    line(this.x * size + size/2, this.y * size + size/2, this.x * size + size/2, this.y * size + size/2 + size * 0.3);
    noStroke();
  }
} 