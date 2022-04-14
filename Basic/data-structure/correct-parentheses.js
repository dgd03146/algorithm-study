function solution(s) {
  let answer = 'NO',
    i = 0,
    open = 0,
    close = 0;
  while (s[0] === '(' && s[s.length - 1] === ')' && i < s.length) {
    if (s[i] === '(') {
      open++;
    } else {
      close++;
    }
    i++;
  }
  if (open === close) {
    answer = 'YES';
  }
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
