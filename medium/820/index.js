/**
 * @param {string[]} words
 * @return {number}
 */

// Works but slow
// var minimumLengthEncoding = function (words) {
//   words.sort((a, b) => b.length - a.length);
//   let encoding = "";
//   words.forEach((word, index) => {
//     let restOfWords = new Array(...words);
//     restOfWords.splice(index, 1);
//     const subStrings = [];
//     restOfWords.forEach((wrd) => {
//       if (word.endsWith(wrd)) {
//         subStrings.push(wrd);
//         words.splice(
//           words.findIndex((w) => w === wrd),
//           1
//         );
//       }
//     });

//     encoding += `${word}#`;
//   });
//   return encoding.length;
// };

// Much faster approach
var minimumLengthEncoding = function (words) {
  let set = new Set(words);
  for (let word of words)
    if (set.has(word))
      for (let i = 1; i < word.length; i++) set.delete(word.slice(i));
  return Array.from(set).join().length + 1;
};

const words = ["time", "me", "bell"];
// const words = ["t"];

console.log(JSON.stringify(minimumLengthEncoding(words)));
