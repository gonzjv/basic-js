const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (let arr of backyard) {
    arr.map((elem) => (elem == "^^" ? count++ : (count = count)));
  }
  return count;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
