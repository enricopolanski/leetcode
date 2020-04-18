// TODO: inspired by other solution. Find others

export var minPathSum = function (grid: number[][]) {

  const
    rows = grid.length,
    cols = grid[0].length

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (r !== 0 || c !== 0) {

        if (r === 0)
          grid[r][c] = grid[r][c - 1] + grid[r][c];
        else if (c === 0)
          grid[r][c] = grid[r - 1][c] + grid[r][c];
        else
          grid[r][c] = Math.min(grid[r][c - 1], grid[r - 1][c]) + grid[r][c];
      }

  return grid[rows - 1][cols - 1];
};