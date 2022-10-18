/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function (words) {
  return words.reduce(
    (groups, word) => groups.add(getOddEvenKey(word)),
    new Set()
  ).size;
};

let getOddEvenKey = function (word) {
  let oddEven = [...word].reduce((oddEven, character, index) => {
    let key = index % 2 == 0 ? "even" : "odd";
    oddEven[key] = oddEven[key] ? oddEven[key] + character : character;
    oddEven[key] = [...oddEven[key]].sort().join("");
    return oddEven;
  }, {});
  return oddEven.odd + oddEven.even;
};

const words = ["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"];
// const words = ["abc", "acb", "bac", "bca", "cab", "cba"];

console.log(numSpecialEquivGroups(words));
