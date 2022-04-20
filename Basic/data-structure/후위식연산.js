function solution(s) {
  let answer = 0,
    num;
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      stack.push(str[i]);
    } else {
      answer = Number(stack.pop());
      num = Number(stack.pop());
      answer = calculator(str[i], answer, num);
      stack.push(answer);
    }
  }

  return answer;
}

function calculator(sign, num1, num2) {
  switch (sign) {
    case '+':
      return num2 + num1;

    case '-':
      return num2 - num1;

    case '*':
      return num2 * num1;

    case '/':
      return num2 / num1;
  }
}

let str = '352+*9-';
console.log(solution(str));
