function areThereDuplicates(...args) {
  let answer = false;
  args.sort();
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }
  return answer;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
