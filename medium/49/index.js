/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   return [
//     ...strs.reduce((acc, str) => {
//       if ([...acc].every((arr) => !arr.includes(str))) {
//         let subArr = [];
//         subArr.push(
//           ...strs.filter(
//             (st) =>
//               st.length === str.length &&
//               [...st].every((s) => str.split(s).length === st.split(s).length)
//           )
//         );
//         acc.push(subArr);
//       }
//       return acc;
//     }, []),
//   ];
// };

var groupAnagrams = function (strs) {
  return Object.values(
    strs.reduce((acc, str) => {
      let letters = [...str].sort().join("");
      acc[letters] ? acc[letters].push(str) : (acc[letters] = [str]);
      return acc;
    }, {})
  );
};

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(input));
