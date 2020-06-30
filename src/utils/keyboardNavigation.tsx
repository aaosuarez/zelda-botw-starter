const GRID_WIDTH = 5;
const GRID_HEIGHT = 4;

type Position = {
  x: number;
  y: number;
}

export const indexToPosition = (index: number): Position => {
  return {
    x: index % GRID_WIDTH,
    y: Math.floor(index / GRID_WIDTH)
  }
}

export const positionToIndex = ({x, y}: Position): number => {
  return y * GRID_WIDTH + x;
}

export const goUp = (position: Position): number => {
  const y = Math.max(0, position.y - 1);
  return positionToIndex({...position, y})
}

export const goDown = (position: Position): number => {
  const y = Math.min(GRID_WIDTH, position.y + 1);
  return positionToIndex({...position, y});
}

export const goLeft = (position: Position): number => {
  const x = Math.max(0, position.x - 1);
  return positionToIndex({...position, x});
}

export const goRight = (position: Position): number => {
  const x = Math.min(GRID_HEIGHT, position.x + 1);
  return positionToIndex({...position, x});
}