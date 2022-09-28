const nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let squares = [];

  while (l <= r) {
    const ls = nums[l] * nums[l];
    const rs = nums[r] * nums[r];

    if (ls < rs) {
      squares.push(rs);
      r--;
    } else {
      squares.push(ls);
      l++;
    }
  }

  return squares.reverse();
};
console.log(sortedSquares(nums));
