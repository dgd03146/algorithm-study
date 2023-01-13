var maxArea = function (height) {
  let answer = 0;
  let forward = 0,
    backward = height.length - 1;

  const res = [];
  while (forward < backward) {
    if (height[forward] < height[backward]) {
      answer = Math.max(answer, (backward - forward) * height[forward]);
      forward++;
    } else {
      answer = Math.max(answer, (backward - forward) * height[backward]);
      backward--;
    }
  }
  return answer;
};
