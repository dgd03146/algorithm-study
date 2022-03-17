const nums = [555, 901, 482, 1771];
const findNumbers = function (nums) {
  let isEven = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] >= 10) {
      nums[i] /= 10;
      isEven++;
    }
    if (isEven % 2 !== 0) {
      count++;
    }
    isEven = 0;
  }
  return count;
};

console.log(findNumbers(nums));
