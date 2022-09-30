/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

const keys = { type: 0, color: 1, name: 2 };

var countMatches = function (items, ruleKey, ruleValue) {
  return items.reduce(
    (count, item) => (item[keys[ruleKey]] === ruleValue ? ++count : count),
    0
  );
};
