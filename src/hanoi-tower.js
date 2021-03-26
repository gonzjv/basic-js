// let disks = 9;
// let speed = 4308;
const CustomError = require("../extensions/custom-error");
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let seconds = 0;
  for (let index = 0; index < disksNumber; index++) {
    turns = 2 * turns + 1;
  }
  seconds = Math.floor(turns / (turnsSpeed / 3600));
  // console.log(seconds);
  let res = new Object();
  res.turns = turns;
  res.seconds = seconds;
  // console.log(res);
  return res;
  // throw new CustomError("Not implemented");
  // remove line with error and write your code here
};
// console.log(calculateHanoi(disks, speed));

// "В основу эффективного решения головоломки «Ханойская башня» положен алгоритм, суть которого сводится к следующему: для перемещения башни, состоящей из  n колец, с первого стержня на третий мы должны решить чуть более простую задачу — переместить на второй стержень башню, состоящую из n-1 кольца. После этого нижний диск с первого стержня перемещается на третий и повторно осуществляется перемещение башни из n-1 кольца, но уже со второго диска на третий. Таким образом, число ходов, необходимых для перемещения башни из n колец, равно удвоенному числу ходов, необходимых для перемещения башни из n-1 кольца, и ещё одному ходу. "
// Вот это описание дано из учебника по информатике за 9 класс, я использовал это для написания формулы кода
