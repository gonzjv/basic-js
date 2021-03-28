const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.arr.length;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (!Array.isArray(this.arr)) {
      this.arr = [];
    }
    value === undefined
      ? this.arr.push("()")
      : this.arr.push("( " + value + " )");
    // console.log("add link" + this.arr);
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      position > this.arr.length ||
      position <= 0
    ) {
      this.arr.splice(0, this.arr.length);
      throw new Error();
      // try {
      //   throw new Error("Whoops! Position is invalid!");
      // } catch (err) {
      //   console.error(err.name + ": " + err.message);
      // }
    } else {
      // console.log(position);
      this.arr.splice(position - 1, 1);
      return this;
    }
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let chain = this.arr.join("~~");
    this.arr.splice(0, this.arr.length);
    // console.log(chain);
    return chain;
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
};

module.exports = chainMaker;
// console.log(
//   chainMaker
//     .addLink(1)
//     .addLink(2)
//     .addLink()
//     .addLink(3)
//     .removeLink(3)
//     .finishChain()
// );
// console.log(
//   chainMaker.addLink(1).addLink(2).addLink(3).reverseChain().finishChain()
// );
// console.log(
//   chainMaker.addLink(1).addLink(2).addLink(3).reverseChain().getLength()
// );
