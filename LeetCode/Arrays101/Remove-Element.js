const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

const nums = [3, 2, 2, 3],
  val = 3;
console.log(removeElement(nums, val));
