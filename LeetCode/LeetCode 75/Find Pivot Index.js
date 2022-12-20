var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum = sum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
