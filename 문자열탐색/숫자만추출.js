function solution(str) {
  let answer = '';

  for (i of str) {
    let c = i.charCodeAt();
    if (c < 65 || (c > 90 && c < 97) || c > 122) {
      answer += i;
    }
  }
  answer = parseInt(answer);
  return answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
