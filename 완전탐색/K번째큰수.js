function solution(n, k, card) {
  let answer, sum;
  (temp = 0), (res = []), sum;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let l = j + 1; l < n; l++) {
        sum = card[i] + card[j] + card[l];
        res.push(sum);
      }
    }
  }
  res.sort((a, b) => b - a);
  let b = new Set(res);
  b = [...b];
  answer = b[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
