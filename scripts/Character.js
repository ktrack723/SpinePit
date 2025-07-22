class Character {
  constructor(name, hp, atk, def, spd, affection = 0) {
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spd = spd;
    this.affection = affection;
    this.gear = [];
    this.x = 0;
    this.y = 0;
    this.state = 'resurrected'; // 'resurrected', 'corpse', 'skeleton'
  }

  isAlive() {
    return this.hp > 0;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(size) {
    fill(200);
    ellipse(this.x * size + size/2, this.y * size + size/2, size * 0.8);
  }
} 