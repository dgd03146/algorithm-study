function solution(test) {
  let answer = 0,
    tmp = [];
  m = test.length; // 멘토 경우의수
  n = test[0].length; //멘티 경우의 수
  for (let i = 1; i <= n; i++) {
    //i가 멘토 j가 멘티
    for (let j = 1; j <= n; j++) {
      let cnt = 0; //검사들어가기전 카운트를 0으로 초기화
      for (let k = 0; k < m; k++) {
        // 멘토멘티 검사
        let pi, pj;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      } // 멘토가 멘티보다 앞선 경우가 m번만큼 되면 멘토 멘티가 된다.
    }
  }
  console.log(tmp);
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
