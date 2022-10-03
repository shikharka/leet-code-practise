/**
 * @param {string[]} words
 * @return {number}
 */
const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
};

var uniqueMorseRepresentations = function (words) {
  const transformations = new Set();
  //   let transformations = [];
  return words.reduce(function (count, word) {
    let transformation = "";
    for (let i = 0; i < word.length; i++) {
      transformation += morseCode[word[i]];
    }
    transformations.add(transformation);
    // if (!transformations.includes(transformation)) {
    //   transformations.push(transformation);
    // }
    return transformations.size;
    // return transformations.length;
  }, 0);
};

// ES6
// var uniqueMorseRepresentations = function (words) {
//  return new Set(words.map(word => word.split('').map(letter => morseCode[letter]).join(''))).size
// }

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
