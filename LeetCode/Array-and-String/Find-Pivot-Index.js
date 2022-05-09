const pivotIndex = function (nums) {
  let sum = 0,
    ls = 0;
  for (i of nums) {
    sum += i;
  }
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    if (ls === sum) {
      return i;
    }
    ls += nums[i];
  }
  return -1;
};
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
