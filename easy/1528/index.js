/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  return indices
    .reduce((acc, index, i) => {
      acc[index] = s[i];
      return acc;
    }, [])
    .join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
