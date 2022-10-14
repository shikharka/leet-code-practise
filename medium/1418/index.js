/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let tables = {};
  let foodItems = new Set();
  orders.forEach((order) => {
    tables[order[1]] = tables[order[1]] || {};
    tables[order[1]][order[2]] = tables[order[1]][order[2]] + 1 || 1;
    foodItems.add(order[2]);
  });

  let row1 = [...foodItems];
  row1 = row1.sort();
  row1.unshift("Table");
  let response = [row1];

  for (table in tables) {
    let thisTable = [table];
    for (let i = 1; i < row1.length; i++) {
      thisTable.push((tables[table][row1[i]] || 0).toString());
    }
    response.push(thisTable);
  }

  return response;
};

const orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];
console.log(displayTable(orders));
