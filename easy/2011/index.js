/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  return operations.forEach((operation) => {
    switch (operation) {
      case "++X":
      case "X++":
        x += 1;
        break;
      case "--X":
      case "X--":
        x -= 1;
        break;
    }
  });
};

// Better Solution
// var finalValueAfterOperations = function (operations) {
//   return operations.reduce(
//     (x, operation) => (operation[1] === "+" ? ++x : --x),
//     0
//   );
// };

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
