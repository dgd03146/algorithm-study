function solution(arr) {
  let count = 0;
  let brr = new Array(arr.length + 2);
  for (let i = 0; i < brr.length; i++) {
    brr[i] = new Array(arr.length + 2);
  }

  for (let i = 0; i < brr.length; i++) {
    for (let j = 0; j < brr[0].length; j++) {
      brr[i][j] = 0;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      brr[i + 1][j + 1] = arr[i][j];
    }
  }

  for (let i = 1; i < brr.length - 1; i++) {
    for (let j = 1; j < brr.length - 1; j++) {
      if (
        brr[i][j] >
        Math.max(brr[i][j - 1], brr[i][j + 1], brr[i - 1][j], brr[i + 1][j])
      ) {
        count++;
      }
    }
  }
  return count;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
