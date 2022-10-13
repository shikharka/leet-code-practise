/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let obj = {};
  for (domain of cpdomains) {
    let [count, dom] = domain.split(" ");
    obj[dom] = obj[dom] ? obj[dom] + +count : +count;
    for (let i = dom.length - 1; i >= 0; i--) {
      if (dom[i] === ".") {
        let d = dom.slice(i + 1);
        obj[d] = obj[d] ? obj[d] + +count : +count;
      }
    }
  }

  let response = [];
  for (key in obj) {
    response.push(`${obj[key]} ${key}`);
  }
  return response;
};

// Alternative:
// var subdomainVisits = function(cpdomains) {
//     const map = {};
//     cpdomains.forEach(d => {
//       let [count, domain] = d.split(' ');
//       while (domain) {
//         map[domain] = (map[domain] || 0) + parseInt(count);
//         domain = domain.replace(/^[a-z]+\.?/, ''); // Removing string of pattern xyz. or abc.zyz. from domain
//       }
//     });
//     return Object.entries(map).map(entry => `${entry[1]} ${entry[0]}`);
//   };

// const cpdomains = ["9001 discuss.leetcode.com"];
const cpdomains = [
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
];

console.log(subdomainVisits(cpdomains));
