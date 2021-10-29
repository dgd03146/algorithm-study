function solution(n, arr) {
  let a = [],
    b = [];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    a.push(String(arr[i]));
  }
  for (i of a) {
    sum = 0;
    for (j of i) {
      sum += parseInt(j);
    }
    b.push(sum);
  }
  let max = Math.max(...b);
  let answer = -9999;
  for (let i = 0; i < arr.length; i++) {
    if (max === b[i]) {
      arr[i] > answer ? (answer = arr[i]) : answer;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
