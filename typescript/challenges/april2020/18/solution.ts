// TODO: inspired by other solution. Find others

export var minPathSum = function (grid: number[][]) {

  const
    rowsLength = grid.length,
    colsLength = grid[0].length

  for (let row = 0; row < rowsLength; ++row)
    for (let col = 0; col < colsLength; col++)
      if (row !== 0 || col !== 0) {

        if (row === 0)
          grid[row][col] = grid[row][col - 1] + grid[row][col];
        else if (col === 0)
          grid[row][col] = grid[row - 1][col] + grid[row][col];
        else
          grid[row][col] = Math.min(grid[row][col - 1], grid[row - 1][col]) + grid[row][col];
      }

  return grid[rowsLength - 1][colsLength - 1];
};