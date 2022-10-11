// var numberOfBeams = function (bank) {
//   const rows = bank.length;
//   return bank.reduce((noOfLaserInBank, row, index) => {
//     let nextRow = index + 1;
//     while (bank[nextRow] && !bank[nextRow].includes("1")) {
//       ++nextRow;
//     }
//     if (nextRow < rows) {
//       noOfCurrentLaserPoints = row.split("1").length - 1;
//       noOfNextLaserPoints = bank[nextRow].split("1").length - 1;

//       noOfLaserInBank += noOfCurrentLaserPoints * noOfNextLaserPoints;
//     }
//     return noOfLaserInBank;
//   }, 0);
};


var numberOfBeams = function (bank) {
  return bank
    .reduce((acc, row) => {
      if (row.split("1").length - 1) acc.push(row.split("1").length - 1);
      return acc;
    }, [])
    .reduce((acc, row, index, arr) => {
      acc += row * (arr[index + 1] || 0);
      return acc;
    }, 0);
};

// const bank = ["000", "111", "000"];
const bank = ["011001", "000000", "010100", "001000"];

console.log(numberOfBeams(bank));
