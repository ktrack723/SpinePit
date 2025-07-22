class Tile {
  constructor(x, y, type = 'empty') {
    this.x = x;
    this.y = y;
    this.type = type; // 'empty', 'obstacle', 'item', 'cauldron', 'skeleton'
    this.dug = false;
  }

  draw(size) {
    textAlign(CENTER, CENTER);
    textSize(size * 0.8);
    let emoji = '';
    if (this.dug) {
      // Dug blocks just disappear
      fill(60, 60, 60);
      rect(this.x * size, this.y * size, size, size);
      return;
    } else {
      switch (this.type) {
        case 'empty':
          emoji = '';
          break;
        case 'obstacle':
          emoji = '🟫';
          break;
        case 'item':
          emoji = '🟩';
          break;
        case 'cauldron':
          emoji = '🧪';
          break;
        case 'skeleton':
          emoji = '☠️';
          break;
      }
    }
    fill(60, 60, 60);
    rect(this.x * size, this.y * size, size, size);
    if (emoji) {
      text(emoji, this.x * size + size/2, this.y * size + size/2 + 2);
    }
  }
} 