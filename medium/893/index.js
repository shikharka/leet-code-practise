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
    oddEven[key] ? oddEven[key].push(character) : (oddEven[key] = [character]);
    return oddEven;
  }, {});
  oddEven.odd = oddEven.odd ? oddEven.odd.sort() : "";
  oddEven.even = oddEven.even ? oddEven.even.sort() : "";
  return oddEven.odd + oddEven.even;
};

// const words = ["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"];
// const words = ["abc", "acb", "bac", "bca", "cab", "cba"];
const words = ["a", "b", "c", "a", "c", "c"];

console.log(numSpecialEquivGroups(words));
