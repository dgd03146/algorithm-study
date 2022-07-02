function solution(clothes) {
  var answer = 1;
  let sH = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (sH.has(clothes[i][1])) {
      sH.set(clothes[i][1], sH.get(clothes[i][1]) + 1);
    } else {
      sH.set(clothes[i][1], 1);
    }
  }

  for (let key of sH) {
    answer *= key[1] + 1;
  }

  return answer - 1;
}

const a = [
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear']
];
const b = [
  ['crow_mask', 'face'],
  ['blue_sunglasses', 'face'],
  ['smoky_makeup', 'face']
];

console.log(solution(a));
