class Dungeon {
  constructor(cols = 16, rows = 9, tileSize = 80) {
    this.cols = cols;
    this.rows = rows;
    this.tileSize = tileSize;
    this.tiles = [];
    this.player = null;
    this.skeletons = [];
    this.enemies = [];
    this.cauldron = { x: 5, y: 5 };
    this.generate();
  }

  generate() {
    this.tiles = [];
    for (let y = 0; y < this.rows; y++) {
      let row = [];
      for (let x = 0; x < this.cols; x++) {
        let type = 'empty';
        if (x === this.cauldron.x && y === this.cauldron.y) type = 'cauldron';
        else if (random() < 0.1) type = 'obstacle';
        else if (random() < 0.05) type = 'item';
        row.push(new Tile(x, y, type));
      }
      this.tiles.push(row);
    }
    // Place player
    this.player = new Player();
    this.player.moveTo(1, 1);
    // Place a skeleton
    let skel = new Skeleton();
    skel.moveTo(3, 3);
    this.skeletons = [skel];
    // Place an enemy
    let enemy = new Enemy();
    enemy.moveTo(this.cols - 2, this.rows - 2);
    this.enemies = [enemy];
    // Mark skeleton tile
    this.tiles[3][3].type = 'skeleton';
  }

  digTile(x, y) {
    let tile = this.tiles[y][x];
    if (tile.type === 'obstacle' && !tile.dug) {
      tile.dug = true;
      tile.type = 'empty';
      return true;
    }
    return false;
  }

  resurrectSkeleton(x, y) {
    let tile = this.tiles[y][x];
    if (tile.type === 'skeleton') {
      // Remove skeleton from map
      tile.type = 'empty';
      // Add to party if space
      if (this.player && this.player.party === undefined) this.player.party = [];
      if (this.player.party.length < 3) {
        let newSkel = new Skeleton();
        newSkel.moveTo(this.player.x, this.player.y);
        this.player.party.push(newSkel);
        // Remove from dungeon skeletons
        this.skeletons = this.skeletons.filter(s => !(s.x === x && s.y === y));
        return true;
      }
    }
    return false;
  }

  draw() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.tiles[y][x].draw(this.tileSize);
      }
    }
    // Draw enemies
    for (let enemy of this.enemies) enemy.draw(this.tileSize);
    // Draw player
    if (this.player) this.player.draw(this.tileSize);
    // No party members drawn
  }
} 