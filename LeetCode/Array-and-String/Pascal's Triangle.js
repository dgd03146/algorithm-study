var generate = function (numRows) {
  const array = new Array(numRows).fill(null).map(() => []);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      array[i].push(null);
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i][0] = 1;
    array[i][array[i].length - 1] = 1;
  }

  for (let i = 2; i < array.length; i++) {
    for (let j = 1; j <= i - 1; j++) {
      array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
    }
  }
  return array;
};

console.log(generate(5));
