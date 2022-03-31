const removeDuplicates = function (nums) {
  let p = 0,
    q = 1,
    count = 1;
  while (q < nums.length) {
    if (nums[p] === nums[q]) {
      q++;
    } else {
      nums[p + 1] = nums[q];
      p++;
      q++;
      count++;
    }
  }
  console.log(nums);
  return count;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
