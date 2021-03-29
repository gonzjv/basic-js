const CustomError = require("../extensions/custom-error");
module.exports = function repeater(str, options) {
  // let sampleOptions = {
  //   repeatTimes: 3,
  //   separator: "**",
  //   addition: "PLUS",
  //   additionRepeatTimes: 3,
  //   additionSeparator: "00",
  // };
  // let sample = "STRING";
  // function repeater(str, options) {
  options.separator === undefined
    ? (options.separator = "+")
    : (options.separator = options.separator);
  options.additionSeparator === undefined
    ? (options.additionSeparator = "|")
    : (options.additionSeparator = options.additionSeparator);
  options.repeatTimes === undefined
    ? (options.repeatTimes = 1)
    : (options.repeatTimes = options.repeatTimes);
  options.additionRepeatTimes === undefined
    ? (options.additionRepeatTimes = 1)
    : (options.additionRepeatTimes = options.additionRepeatTimes);
  options.addition === null
    ? (options.addition = "null")
    : (options.addition = options.addition);
  // typeof str ==='string' ? str = str : str.toStr

  let additionArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(options.addition);
  }
  let additionStr = additionArr.join(options.additionSeparator);
  let resArr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    resArr.push(str + additionStr);
  }
  return resArr.join(options.separator);
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
// console.log(repeater(sample, sampleOptions));
