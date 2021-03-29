const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let c = [];
    let m = [];
    let k = [];
    let messageArr = message.split("");
    let messageArrClear = messageArr.filter(
      (ltr) => alphabet.indexOf(ltr.toUpperCase()) > -1
    );
    // while (key.length >= message.length) {
    key = key + key + key + key;
    // }
    console.log(key);
    console.log(message);
    let keyArr = key.split("");
    for (let i = 0; i < messageArrClear.length; i++) {
      m = alphabet.indexOf(messageArrClear[i].toUpperCase());
      k = alphabet.indexOf(keyArr[i].toUpperCase());
      m + k <= 25 ? c.push(alphabet[m + k]) : c.push(alphabet[(m + k) % 26]);
      // console.log(m + k);
    }
    console.log(c);
    messageArr.map((ltr) => {
      if (alphabet.indexOf(ltr.toUpperCase()) == -1) {
        console.log(messageArr.indexOf(ltr));
        c.splice(messageArr.indexOf(ltr), 0, ltr);
      }
    });
    console.log(messageArr);
    console.log(messageArrClear);
    console.log(c);
    return c.join("");
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    //     throw new CustomError("Not implemented");
    //     // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
// let mes = "attack at dawn!";
// let k = "alphonsealphons";
// let enc = new VigenereCipheringMachine();

// console.log(alpha);
// console.log(alphabet);
// console.log(enc.encrypt(mes, k));
