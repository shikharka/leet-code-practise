/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ballsAt = [...boxes].reduce((acc, box, index) => {
    if (+box) acc.push(index);
    return acc;
  }, []);

  return [...boxes].map((box, index) => {
    return ballsAt.reduce((acc, pos) => {
      acc += Math.abs(index - pos);
      return acc;
    }, 0);
  });
};

const boxes = "001011";
// const boxes = "110";

console.log(minOperations(boxes));
