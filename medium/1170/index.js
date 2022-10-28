/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const queriesFreq = queries.map((query) =>
    getLexicographicallySmallestCharFrequency(query)
  );

  const wordsFreq = words
    .map((word) => getLexicographicallySmallestCharFrequency(word))
    .sort((a, b) => a - b);

  // works, but slower approach
  return queriesFreq.map((freq) => {
    wordsFreq.push(freq);
    wordsFreq.sort((a, b) => a - b);
    const count = wordsFreq.reduce(
      (count, current) => (freq === current ? ++count : count),
      0
    );
    const index = wordsFreq.indexOf(freq) - 1 + count;
    const ans = wordsFreq.length - 1 - index;
    wordsFreq.splice(index, 1);
    return ans;
  });

  // binary search approach, much faster
  // let res = [];
  // for (let i of queriesFreq) {
  //   //start and end pointer
  //   let start = 0,
  //     end = wordsFreq.length - 1;

  //   // classic binary search
  //   while (start <= end) {
  //     let mid = parseInt((start + end) / 2);
  //     console.log("start , mid , end", start, mid, end);
  //     if (i < wordsFreq[mid]) {
  //       end = mid - 1;
  //     } else {
  //       start = mid + 1;
  //     }
  //   }

  //   res.push(wordsFreq.length - 1 - end);
  // }

  // return res;
};

let getLexicographicallySmallestCharFrequency = function (word) {
  const sorted = [...word].sort();
  smallestChar = sorted[0];
  return sorted.reduce(
    (count, char) => (char === smallestChar ? ++count : count),
    0
  );
};

// const queries = ["bbb", "cc"],
//   words = ["a", "aa", "aaa", "aaaa"];
// const queries = ["cbd"],
//   words = ["zaaaz"];
const queries = [
    "bba",
    "abaaaaaa",
    "aaaaaa",
    "bbabbabaab",
    "aba",
    "aa",
    "baab",
    "bbbbbb",
    "aab",
    "bbabbaabb",
  ],
  words = [
    "aaabbb",
    "aab",
    "babbab",
    "babbbb",
    "b",
    "bbbbbbbbab",
    "a",
    "bbbbbbbbbb",
    "baaabbaab",
    "aa",
  ];
console.log(numSmallerByFrequency(queries, words));
