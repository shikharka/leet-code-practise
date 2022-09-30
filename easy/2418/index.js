/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const indices = names.map((name, index) => index);

  const sortedIndices = indices.sort((a, b) => heights[b] - heights[a]);

  return sortedIndices.map((index) => names[index]);
};

let names = ["Mary", "John", "Emma"],
  heights = [180, 165, 170];
// let names = ["Alice", "Bob", "Bob"],
//   heights = [155, 185, 150];
console.log(sortPeople(names, heights));
