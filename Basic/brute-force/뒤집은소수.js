function isPrime(n) {
  if (n === 2) {
    return true;
  } else if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let c;
  (d = []), (answer = []);
  for (let i = 0; i < arr.length; i++) {
    c = '';
    b = String(arr[i]);
    for (let i = b.length - 1; i >= 0; i--) {
      c += b[i];
    }
    d.push(parseInt(c));
  }
  console.log(d);
  for (i of d) {
    if (isPrime(i)) {
      answer.push(i);
    }
  }
  return answer.join(' ');
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
