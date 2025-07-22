class Enemy extends Character {
  constructor(name = 'Enemy', hp = 10, atk = 4, def = 2, spd = 3) {
    super(name, hp, atk, def, spd);
    this.isEnemy = true;
  }

  draw(size) {
    fill(200, 60, 60);
    ellipse(this.x * size + size/2, this.y * size + size/2, size * 0.8);
  }
} 