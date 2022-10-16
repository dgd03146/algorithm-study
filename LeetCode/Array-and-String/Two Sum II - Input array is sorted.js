const twoSum = function (numbers, target) {
  let p = 0;
  q = numbers.length - 1;

  while (p < numbers.length && q < numbers.length) {
    const sum = numbers[p] + numbers[q];
    if (sum === target) {
      return [p + 1, q + 1];
    } else if (sum > target) {
      q--;
    } else if (sum < target) {
      p++;
    }
  }
};
const numbers = [2, 7, 11, 15],
  target = 9;
const numbers2 = [2, 3, 4],
  target2 = 6;
console.log(twoSum(numbers2, target2));
