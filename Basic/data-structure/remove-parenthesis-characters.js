function solution(s) {
  let answer = '',
    i = 0,
    open = 0,
    close = 0;

  while (i < s.length) {
    if (s[i] !== '(' && s[i] !== ')' && open === close) {
      answer += s[i];
    }
    if (s[i] === '(') {
      open++;
    } else if (s[i] === ')') {
      close++;
    }
    i++;
  }
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
