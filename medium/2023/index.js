/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */

var numOfPairs = function (nums, target) {
  return nums.reduce((counter, num, index) => {
    let otherPart = "";
    if (target.startsWith(num)) {
      otherPart = target.slice(num.length);
    }
    // else if (target.endsWith(num)) {
    //   otherPart = target.slice(0, target.length - num.length);
    // }
    let numsCopy = new Array(...nums);
    numsCopy.splice(index, 1);

    const otherPartCount = numsCopy.reduce(
      (count, n) => (otherPart === n ? ++count : count),
      0
    );
    return counter + otherPartCount;
  }, 0);
};

const nums = ["777", "7", "77", "77"],
  target = "7777";

// const nums = ["123", "4", "12", "34"],
//   target = "1234";

// const nums = ["1", "1", "1"],
//   target = "11";

console.log(numOfPairs(nums, target));
