var runningSum = function (nums) {
  let sum = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};
