const thirdMax = function (nums) {
  let count = 0,
    answer;
  nums.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < nums.length; i++) {
    if (count === 2) {
      return (answer = nums[i]);
    } else if (i === nums.length - 1 && count <= 1) {
      return (answer = nums[0]);
    }
    if (nums[i] !== nums[i + 1]) {
      count++;
    }
  }
};

const nums = [1, 2];
console.log(thirdMax(nums));
