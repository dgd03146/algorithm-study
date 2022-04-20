function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (a[j][i - 1] > 0) {
        let doll = a[j][i - 1];
        a[j][i - 1] = 0;
        stack.push(doll);
        break;
      }
    }

    for (let i = 1; i <= stack.length; i++) {
      if (stack[i - 1] === stack[i]) {
        stack.pop();
        stack.pop();
        answer += 2;
      }
    }
  }

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(a, b));
