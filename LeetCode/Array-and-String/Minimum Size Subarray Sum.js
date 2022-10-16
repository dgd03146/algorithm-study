var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      min = Math.min(min, i - left + 1);
      sum -= nums[left++];
    }
  }
  if (min === Number.MAX_SAFE_INTEGER) {
    return 0;
  }
  return min;
};

const target = 7,
  nums = [2, 3, 1, 2, 4, 3];

const target2 = 11,
  nums2 = [1, 1, 1, 1, 1, 1, 1, 1];

const target3 = 11,
  nums3 = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target, nums));
