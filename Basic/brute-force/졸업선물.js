function solution(m, a) {
  let n = a.length,
    count = 0,
    answer = 0;
  a.sort((c, d) => c[0] + c[1] - d[0] + d[1]);
  for (let i = 0; i < n; i++) {
    let money = m - (a[i][0] / 2 + a[i][1]);
    for (let j = 0; j < n; j++) {
      if (i !== j && a[j][0] + a[j][1] > money) break;
      if (i !== j && a[j][0] + a[j][1] <= money) {
        money -= a[j][0] + a[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
