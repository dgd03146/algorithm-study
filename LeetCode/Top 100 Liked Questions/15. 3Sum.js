/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 세개의 인덱스가 다 다르다.
// 세개의 합이 0이다.
// 그때의 i, j, k를 구하여라.
// 배열 안에 넣을것

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        answer.push([nums[left], nums[i], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return answer;
};

console.log(threeSum((nums = [-1, 0, 1, 2, -1, -4])));

// sum이 target보다 크면 서브 배열에서 젤 큰 것이 right값이므로 right를 감소시킨다.
// sum이 target보다 작으면 서브 배열에서 젤 작은 것이 left값이므로 left를 증가시킨다.
