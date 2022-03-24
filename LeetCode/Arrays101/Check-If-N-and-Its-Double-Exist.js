const checkIfExist = function (arr) {
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 2 * arr[j] || arr[j] === 2 * arr[i]) {
        answer = true;
        break;
      }
    }
    if (answer) break;
  }
  return answer;
};

const arr = [3, 1, 7, 11];
console.log(checkIfExist(arr));
