const BinaryToDecimal = (binary) =>
  !binary.length
    ? 0
    : binary[0] * 2 ** (binary.length - 1) + BinaryToDecimal(binary.slice(1));

// Your code here:
// binary = binary.split("");
// let acumulador = 0;
// while (binary.length) acumulador += binary.shift() * 2 ** binary.length;
// return acumulador;

module.exports = BinaryToDecimal;

console.log(BinaryToDecimal("10")); //(2);

console.log(BinaryToDecimal("111")); //(7);
