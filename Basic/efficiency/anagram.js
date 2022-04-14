function solution(str1, str2) {
  let answer = "";
  let sH = new Map();
  let dH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let y of str2) {
    if (dH.has(y)) dH.set(y, dH.get(y) + 1);
    else dH.set(y, 1);
  }

  for (let [key, value] of sH) {
    if (dH.has(key) && value === dH.get(key)) {
      answer = "YES";
    } else {
      answer = "NO";
    }
  }

  return answer;
}
const a = "abaCC";
const b = "Caaab";
console.log(solution(a, b));
