var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  const result = new Array(rows + cols - 1).fill(null).map(() => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        result[i + j].unshift(matrix[i][j]);
        console.log(result);
      } else {
        result[i + j].push(matrix[i][j]);
      }
    }
  }

  return result.flat();
};
const nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(findDiagonalOrder(nums));
