class Player extends Character {
  constructor(name = 'Protagonist') {
    super(name, 20, 5, 3, 4, 0);
    this.isPlayer = true;
  }

  draw(size) {
    fill(80, 180, 255);
    ellipse(this.x * size + size/2, this.y * size + size/2, size * 0.9);
  }
} 