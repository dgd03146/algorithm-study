const findDisappearedNumbers = function (nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
    console.log(nums);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      answer.push(i + 1);
    }
  }
  return answer;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
