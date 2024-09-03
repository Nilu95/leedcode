var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return " ";
  }

  let prefix = strs[0];
  console.log(prefix);

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if ((prefix = " ")) {
        return " ";
      }
      console.log(prefix);
    }
  }
  console.log(prefix);
  return prefix;
};

longestCommonPrefix(["c", "acc", "ccc"]);
