function solution(arr, m) {
  let p = 0,
    q = 1;
  let sum;
  let answer = [];
  while (p < arr.length && q < arr.length) {
    sum = arr[p];
    sum += arr[q];
    console.log(sum);
    if (sum === 6) {
      const brr = arr.slice(p, q + 1);
      answer([...brr]);
      p++;
      q = p + 1;
    } else {
      q++;
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
let M = 6;
console.log(solution(arr, 6));
