function solution(arr) {
  let MAX = -9999,
    col = 0,
    row = 0,
    diag1 = 0,
    diag2 = 0,
    j = 0;
  answer = [];
  for (let i = 0; i < arr.length; i++, j++) {
    (col = 0), (row = 0);
    diag1 += arr[i][j];
    diag2 += arr[arr.length - 1 - i][j];
    for (let j = 0; j < arr.length; j++) {
      col += arr[i][j];
      row += arr[j][i];
      MAX = Math.max(col, row);
    }
  }
  answer.push(MAX, diag1, diag2);
  return Math.max(...answer);
}
let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
