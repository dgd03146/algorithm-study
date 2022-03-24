const validMountainArray = function (arr) {
  let left = true,
    right = true;

  const max = Math.max(...arr);
  let index = arr.indexOf(max);

  if (arr.length < 3 || index === arr.length - 1 || index === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      left = arr[i] < arr[i + 1] ? left : false;
    } else if (i > index) {
      right = arr[i - 1] > arr[i] ? right : false;
    }
  }

  if (left && right) return true;
  else return false;
};
const arr = [0, 3, 2, 1];

console.log(validMountainArray(arr));
