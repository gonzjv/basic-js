// let sample = ["Matt", "  Ann", "Dmitry", "Max"];
// function createDreamTeam(members) {
const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    // let membersClean = members.map((elem) =>
    //   typeof elem === "string"
    //     ? (elem = elem)
    //     : members.splice(members.indexOf(elem), 1)
    // );
    // let dream = members.reduce((accu, cur) => accu + cur.split("")[0]);
    let dream = members.map((elem) => {
      if (typeof elem === "string") {
        elem = elem.replace(/\s/g, "");
        // console.log(elem);
        return (elem = elem.split("")[0]);
      }
    });
    // console.log(sample);
    // console.log(dream);
    // items.sort(function (a, b) {
    //   return a.localeCompare(b);
    // });
    return dream
      .sort(function (a, b) {
        return a.localeCompare(b);
      })
      .join("")
      .toUpperCase();
  } else {
    // console.log(typeof members);
    return false;
  }

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
// console.log(Array.isArray(sample));
// console.log(createDreamTeam(sample));
