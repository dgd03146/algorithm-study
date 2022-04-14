function solution(M, arr) {
  let lt = 0,
    sum = 0,
    answer = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > M) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

let M = 5;
let arr = [1, 3, 1, 2, 3];

console.log(solution(M, arr));
