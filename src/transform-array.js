let sample = ["--discard-prev", 1, 2, 3, 4, 5];
console.log(sample);
// const CustomError = require("../extensions/custom-error");
// module.exports = function transform(arr) {
function transform(arr) {
  if (!Array.isArray(arr)) {
    try {
      throw new Error("Whoops! Argument is not an array!");
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  }
  // let newArr = arr.map( elem => elem == '--discard-next' ?)
  let newArr = arr;
  for (let elem of newArr) {
    if (elem === "--discard-next") {
      newArr.splice(newArr.indexOf(elem), 2);
    } else if (elem === "--discard-prev" && newArr.indexOf(elem) == 0) {
      newArr.splice(newArr.indexOf(elem), 1);
    } else if (elem === "--discard-prev" && newArr.indexOf(elem) !== 0) {
      newArr.splice(newArr.indexOf(elem) - 1, 2);
    } else if (elem === "--double-next") {
      newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) + 1]);
    } else if (elem === "--double-prev") {
      newArr.splice(newArr.indexOf(elem), 1, newArr[newArr.indexOf(elem) - 1]);
    }
  }
  return newArr;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
}
console.log(transform(sample));
