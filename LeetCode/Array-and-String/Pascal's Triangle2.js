var getRow = function (rowIndex) {
  let before = [1, 1];
  if (rowIndex === 0) {
    return [1];
  }
  if (rowIndex === 1) {
    return before;
  }

  for (let i = 2; i <= rowIndex; i++) {
    let array = new Array(i + 1);
    (array[0] = 1), (array[array.length - 1] = 1);

    for (let j = 1; j < i; j++) {
      array[j] = before[j - 1] + before[j];
    }
    before = array;
  }
  return before;
};
