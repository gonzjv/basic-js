const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && !isNaN(sampleActivity)) {
    let numActivity = Number(sampleActivity);
    let t =
      Math.log(MODERN_ACTIVITY / numActivity) /
      (Math.log(2) / HALF_LIFE_PERIOD);
    let res = Math.ceil(t);
    return isFinite(res) && res > 0 ? res : false;
  } else {
    return false;
  }
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
