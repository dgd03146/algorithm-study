function solution(num, arr) {
  let answer = [];
  let tmp = arr.indexOf(num) - 1;
  answer = arr.filter(big => big > arr[tmp]);
  return answer.join(' ');
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(6, arr));
