let game;
let carryingSkeleton = false;

function setup() {
  createCanvas(1280, 720);
  game = new Game();
}

function draw() {
  game.update();
  game.draw();
  // Show carrying skeleton emoji if carrying
  if (carryingSkeleton) {
    textSize(48);
    textAlign(LEFT, TOP);
    text('☠️', 10, 10);
  }
}

function keyPressed() {
  let dx = 0, dy = 0;
  if (keyCode === LEFT_ARROW) dx = -1;
  else if (keyCode === RIGHT_ARROW) dx = 1;
  else if (keyCode === UP_ARROW) dy = -1;
  else if (keyCode === DOWN_ARROW) dy = 1;
  let p = game.dungeon.player;
  if (dx !== 0 || dy !== 0) {
    let nx = p.x + dx;
    let ny = p.y + dy;
    if (nx >= 0 && nx < game.dungeon.cols && ny >= 0 && ny < game.dungeon.rows) {
      let tile = game.dungeon.tiles[ny][nx];
      if (tile.type !== 'obstacle' && !tile.dug) {
        p.moveTo(nx, ny);
      }
    }
  }
  // Digging mechanic
  if (key === 'd' || key === 'D') {
    let fx = p.x, fy = p.y;
    if (p.lastMove) {
      fx += p.lastMove.dx;
      fy += p.lastMove.dy;
    } else {
      fx += 1;
    }
    if (fx >= 0 && fx < game.dungeon.cols && fy >= 0 && fy < game.dungeon.rows) {
      game.dungeon.digTile(fx, fy);
    }
  }
  // Grab skeleton
  if (key === 'g' || key === 'G') {
    let fx = p.x, fy = p.y;
    if (p.lastMove) {
      fx += p.lastMove.dx;
      fy += p.lastMove.dy;
    } else {
      fx += 1;
    }
    if (fx >= 0 && fx < game.dungeon.cols && fy >= 0 && fy < game.dungeon.rows) {
      let tile = game.dungeon.tiles[fy][fx];
      if (tile.type === 'skeleton') {
        carryingSkeleton = true;
        tile.type = 'empty';
      }
    }
  }
  // Resurrect at cauldron
  if ((key === 'r' || key === 'R') && carryingSkeleton) {
    let p = game.dungeon.player;
    let tile = game.dungeon.tiles[p.y][p.x];
    if (tile.type === 'cauldron') {
      carryingSkeleton = false;
      // No party logic, just drop skeleton
    }
  }
  // Track last move for dig/grab direction
  if (dx !== 0 || dy !== 0) {
    p.lastMove = { dx, dy };
  }
} 