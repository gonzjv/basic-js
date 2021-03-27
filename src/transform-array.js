// let sample = [1, 2, 3, "--discard-next"];
// let sample = ["--double-prev", 1, 2, 3];
// console.log(sample);
// function transform(arr) {
const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    try {
      throw new Error("Whoops! Argument is not an array!");
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  }
  // let newArr = arr.map( elem => elem == '--discard-next' ?)
  let newArr = arr;
  let elBlock = NaN;
  for (let elem of newArr) {
    if (
      elem === "--discard-next" &&
      newArr[newArr.indexOf(elem) + 2] === "--double-prev"
    ) {
      newArr.splice(newArr.indexOf(elem), 3);
      console.log(newArr);
    } else if (
      elem === "--discard-next" &&
      newArr[newArr.indexOf(elem) + 2] === "--discard-prev"
    ) {
      newArr.splice(newArr.indexOf(elem), 3);
    } else if (
      elem === "--discard-next" &&
      newArr.indexOf(elem) < newArr.length - 1
    ) {
      newArr.splice(newArr.indexOf(elem), 2);
    } else if (
      elem === "--discard-next" &&
      newArr.indexOf(elem) == newArr.length - 1
    ) {
      newArr.splice(newArr.indexOf(elem), 1);
    } else if (elem === "--discard-prev" && newArr.indexOf(elem) == 0) {
      newArr.splice(newArr.indexOf(elem), 1);
    } else if (elem === "--discard-prev" && newArr.indexOf(elem) > 0) {
      newArr.splice(newArr.indexOf(elem) - 1, 2);
    } else if (
      elem === "--double-next" &&
      newArr.indexOf(elem) == newArr.length - 1
    ) {
      newArr.splice(newArr.indexOf(elem), 1);
    } else if (
      elem === "--double-next" &&
      newArr.indexOf(elem) < newArr.length - 1
    ) {
      newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) + 1]);
    } else if (elem === "--double-prev" && newArr.indexOf(elem) == 0) {
      newArr.splice(newArr.indexOf(elem), 1);
    } else if (elem === "--double-prev") {
      newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) - 1]);
    }
  }
  return newArr;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
// console.log(transform(sample));
