function solution(s) {
  let answer = 'YES';
  if (s.toLowerCase() === s.split('').reverse().join('').toLowerCase()) {
    return answer;
  } else {
    answer = 'NO';
    return answer;
  }
}

let str = 'goooG';
console.log(solution(str));
