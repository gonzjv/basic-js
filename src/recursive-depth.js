// let sample = [1, 2, 3, [4, 5]];
// class DepthCalculator {
const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  // constructor() {
  //   this.calculateDepth = this.calculateDepth.bind(this);
  // }
  calculateDepth(arr) {
    let refer = this;
    // return Array.isArray(arr)
    //   ? 1 + Math.max(...arr.map(this.calculateDepth))
    //   : 0;
    let res = 0;
    for (let el of arr) {
      if (el instanceof Array) {
        res += Math.max(res, refer.calculateDepth(el));
      }
    }
    console.log(res + 1);
    return res + 1;
  }
};
// let depth = new DepthCalculator();
// console.log(depth.calculateDepth(sample));

// function getArrayDepth(arr) {
//   if (Array.isArray(arr)) {
//     return 1 + Math.max(...arr.map(getArrayDepth));
//   }
//   return 0;
// }
// console.log(getArrayDepth(sample));
