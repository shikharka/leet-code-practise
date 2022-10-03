/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words
    .map((word) =>
      word
        .split("")
        .reduce(
          (consistent, character) => consistent && allowed.includes(character),
          true
        )
    )
    .reduce(
      (noOfConsistent, isConsistent) =>
        isConsistent ? noOfConsistent + 1 : noOfConsistent,
      0
    );

  //   Better Solution using spread operator and every()
  //   return words.reduce(
  //     (acc, word) => acc + [...word].every((l) => allowed.includes(l)),
  //     0
  //   );
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
