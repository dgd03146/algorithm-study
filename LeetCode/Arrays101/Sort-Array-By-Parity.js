const sortArrayByParity = function (nums) {
  let p = 0,
    q = 0,
    temp;
  for (q; q < nums.length; q++) {
    if (nums[q] % 2 === 0) {
      temp = nums[q];
      nums[q] = nums[p];
      nums[p] = temp;
      p++;
    }
  }
  return nums;
};

const nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
