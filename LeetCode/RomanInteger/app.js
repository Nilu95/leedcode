let romanToInt = function (s) {
  const collection = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let req = 0;

  for (let i = 0; i < s.length; i++) {
    let s1 = collection.get(s[i]);
    if (i + 1 < s.length) {
      let s2 = collection.get(s[i + 1]);
      if (s1 >= s2) {
        req += s1;
      } else {
        req += s2 - s1;
        i++;
      }
    } else {
      req += s1;
    }
    console.log(s1);
    console.log(req);
  }
};

romanToInt("IV");
