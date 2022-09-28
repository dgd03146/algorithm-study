function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  let stringA = String(a)
    .split('')
    .sort((a, b) => b - a);
  let stringB = String(b)
    .split('')
    .sort((a, b) => b - a);

  console.log(stringA, stringB);
  let answer = true;
  for (let i = 0; i < Math.max(stringA.length, stringB.length); i++) {
    if (stringA[i] !== stringB[i]) {
      return (answer = false);
    }
  }
  return answer;
}

console.log(sameFrequency(22, 222));
