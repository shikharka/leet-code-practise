/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  return words.filter((word) => {
    let matchPattern = true;

    for (i = 0; i < pattern.length; i++) {        
        matchPattern = matchPattern && pattern.indexOf(pattern[i]) === word.indexOf(word[i])
    }

    return matchPattern;
  });
};
