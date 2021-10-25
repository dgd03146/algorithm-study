function solution(arr) {
  let count,
    answer = [];
  brr = [...arr];
  arr.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i < arr.length; i++) {
    count = arr.indexOf(brr[i]) + 1;
    if (arr[i] === arr[i + 1]) {
      answer.push(count);
    } else {
      answer.push(count++);
    }
  }
  return answer.join(' ');
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
