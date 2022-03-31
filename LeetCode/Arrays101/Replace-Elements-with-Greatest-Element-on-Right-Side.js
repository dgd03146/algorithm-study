const replaceElements = function (arr) {
  let max = -1;
  for (let i = arr.length - 1; i > -1; i--) {
    let newMax = Math.max(max, arr[i]);
    arr[i] = max;
    max = newMax;
  }
  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));
