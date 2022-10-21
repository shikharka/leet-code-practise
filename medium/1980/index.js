/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  return nums.reduce(
    (unique, num, i) => unique + (num[i] == 1 ? "0" : "1"),
    ""
  );
};

const nums = ["01", "10"];
// const nums = ["10", "01"];

console.log(findDifferentBinaryString(nums));
