/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  return knowledge
    .reduce((output, k) => output.replaceAll(`(${k[0]})`, k[1] || "?"), s)
    .replaceAll(/\((.*?)\)/g, "?");
};

var evaluate = function (s, knowledge) {
  const map = new Map(knowledge);
  return s.replace(/\((.*?)\)/g, (_, p1) => map.get(p1) ?? "?");
};

const s = "(name)is(age)yearsold",
  knowledge = [
    ["name", "bob"],
    ["age", "two"],
  ];

console.log(evaluate(s, knowledge));
