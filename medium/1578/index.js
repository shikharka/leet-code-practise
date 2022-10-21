/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let res = 0;
  for (let i = 0, max = 0; i < colors.length; i++) {
    res += neededTime[i];
    max = Math.max(max, neededTime[i]);
    if (colors[i] !== colors[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};

// const colors = "aaabbbabbbb",
//   neededTime = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1];
const colors = "acaaaacccc",
  neededTime = [9, 3, 9, 8, 8, 3, 2, 7, 6, 6];
// const colors = "bbbaaa",
//   neededTime = [4, 9, 3, 8, 8, 9];

console.log(minCost(colors, neededTime));
