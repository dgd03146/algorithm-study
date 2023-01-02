var isIsomorphic = function (s, t) {
  const smap = new Map();
  const tmap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (smap.get(s[i]) == undefined) {
      smap.set(s[i], t[i]);
    }

    if (tmap.get(t[i]) == undefined) {
      tmap.set(t[i], s[i]);
    }

    if (smap.get(s[i]) !== t[i] || tmap.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};

const s = 'bacd',
  t = 'baba';

console.log(isIsomorphic(s, t));
