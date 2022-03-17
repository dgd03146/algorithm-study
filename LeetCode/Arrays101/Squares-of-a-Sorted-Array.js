const nums = [-4, -1, 0, 3, 10];
const sortedSquares = function (nums) {
  const sortedSquares = nums.map((num) => num * num);
  return sortedSquares.sort(function (a, b) {
    return a - b;
  });
};
console.log(sortedSquares(nums));
