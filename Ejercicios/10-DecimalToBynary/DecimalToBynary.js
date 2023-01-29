const DecimalToBynary = (num) =>
  num === 0 ? "" : DecimalToBynary(Math.floor(num / 2)) + (num % 2);

// Your code here:
// let binary = "";
// while (num > 0) {
//   binary = (num % 2) + binary;
//   num = Math.floor(num / 2);
// }
// return binary;

module.exports = DecimalToBynary;

console.log(DecimalToBynary(4)); //('100')

console.log(DecimalToBynary(7)); //('111')

console.log(DecimalToBynary(16)); //('111')
console.log(DecimalToBynary(32)); //('111')
console.log(DecimalToBynary(64)); //('111')
console.log(DecimalToBynary(128)); //('111')
