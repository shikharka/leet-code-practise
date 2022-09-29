/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences.reduce((acc, sentences) => {
    const wordsCount = sentences.split(" ").length;
    if (wordsCount > acc) {
      acc = wordsCount;
    }
    return acc;
  }, 0);
};

// Better Solution
// var mostWordsFound = function (sentences) {
//     return Math.max(...sentences.map((sentence) => sentence.split(" ").length));
// }

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
