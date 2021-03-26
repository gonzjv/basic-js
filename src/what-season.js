// const date = new Date(2020, 08, 15);
const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  // function getSeason(date) {
  if (Array.isArray(date)) {
    try {
      throw new Error("Whoops! Very tricky!");
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    // throw new CustomError("invalid argument");
    try {
      throw new Error("Whoops!");
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  }
  if (date == undefined) {
    return "Unable to determine the time of year!";
    // return null;
  }
  let month = date.getMonth();
  // console.log(month);
  console.log(date);
  console.log(Object.prototype.toString.call(date));
  return month <= 1
    ? "winter"
    : month <= 4
    ? "spring"
    : month <= 7
    ? "summer"
    : month <= 10
    ? "autumn"
    : "winter";
  // remove line with error and write your code here
};
// console.log("---------");
// console.log(getSeason(date));
