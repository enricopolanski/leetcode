// TODO: Semi invalid (looked tips online, redo it)

type Grid = ("1" | "0")[][]

export var numIslands = function (grid: Grid): number {

  const zeroNeighbours = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;

    grid[i][j] = '0';

    zeroNeighbours(i - 1, j); // up
    zeroNeighbours(i + 1, j); // down
    zeroNeighbours(i, j - 1); // left
    zeroNeighbours(i, j + 1); // right
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[i].length; j++) {

      if (grid[i][j] === '1') {
        count++;
        zeroNeighbours(i, j)
      }
    }
  }
  return count;
};