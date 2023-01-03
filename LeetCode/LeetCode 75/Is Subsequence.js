/**
 * a 다음 b가 있어야하고, c가 있어야함.
 * @param {*} s
 * @param {*} t
 */

var isSubsequence = function (s, t) {
  let sindex = 0;
  let tindex = 0;

  while (sindex < s.length && tindex < t.length) {
    if (s[sindex] === t[tindex]) {
      sindex++;
      tindex++;
    } else {
      tindex++;
    }
  }

  if (sindex === s.length) {
    return true;
  }

  return false;
};

const s = 'abc',
  t = 'ahbgdc';

const s1 = 'axc',
  t1 = 'ahbgdc';

const s2 = 'aaaaaa',
  t2 = 'bbaaaa';

const s3 = 'ab',
  t3 = 'baab';

console.log(isSubsequence(s2, t2));
