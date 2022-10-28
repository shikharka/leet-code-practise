/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  dictionary.sort();
  const words = sentence.split(" ");
  return words
    .map((word) => {
      const root = dictionary.find((root) => word.startsWith(root));
      if (root) {
        return root;
      }
      return word;
    })
    .join(" ");
};

// Trie approach for faster solution

const dictionary = ["cat", "bat", "rat"],
  sentence = "the cattle was rattled by the battery";
console.log(replaceWords(dictionary, sentence));
