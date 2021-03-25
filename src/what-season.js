const springDate = new Date(2020, 02, 31);
// let res = springDate.getMonth();
// const CustomError = require("../extensions/custom-error");
// module.exports = function getSeason(date) {
function getSeason(date) {
  let month = springDate.getMonth();
  console.log(month);
  return month <= 2 ? "winter" : month <= 5 ? "spring" : false;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
}
// console.log(getSeason(springdate));
console.log(springDate);
console.log();
console.log(getSeason(springDate));
