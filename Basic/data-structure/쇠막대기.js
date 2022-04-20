function solution(s) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i - 1] === ')') {
      answer++;
      stack.pop();
    } else {
      stack.pop();
      answer += stack.length;
      console.log(stack.length);
    }

    // console.log('answer', answer);

    console.log('stack', stack);
  }
  return answer;
}

let a = '()(((()())(())()))(())';
let b = '(((()(()()))(())()))(()())';
console.log(solution(b));
