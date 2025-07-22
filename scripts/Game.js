class Game {
  constructor() {
    this.dungeon = new Dungeon();
    this.state = 'explore'; // 'explore', 'combat', etc.
  }

  update() {
    // For prototype, no logic yet
  }

  draw() {
    background(34, 34, 34);
    this.dungeon.draw();
  }
} 