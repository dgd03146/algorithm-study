function solution(s) {
  let answer = 'YES',
    r = '',
    a = '';
  s = s.toLowerCase();
  for (i of s) {
    let c = i.charCodeAt();
    if (c >= 97 && c <= 122) {
      r += i;
      a += i;
    }
  }

  if (r.split('').reverse().join('') === a) {
    return answer;
  } else {
    answer = 'NO';
    return answer;
  }
}

let str = 'found7, time: study; Yduts; emit, 7Dnuo';
console.log(solution(str));
