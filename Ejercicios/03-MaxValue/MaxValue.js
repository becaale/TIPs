function MaxValue(shares) {
  // // Your code here:
  // // COMPRA                           ↑
  // // VENTA                   ↑
  // let maxProfit = 0;
  // for (let i = 0; i < shares.length - 1; i++) {
  //   const buy = shares[i];
  //   for (let j = i + 1; j < shares.length; j++) {
  //     const sell = shares[j];
  //     if (sell - buy > maxProfit) maxProfit = sell - buy;
  //   }
  // }
  // return maxProfit;
  // 9
  // compra = 2
  let buy = shares[0];
  // let maxProfit = shares[1] - shares[0]; 10 / 10
  // let maxProfit = -Infinity;
  let maxProfit = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < shares.length; i++) {
    if (shares[i] - buy > maxProfit) maxProfit = shares[i] - buy;
    if (shares[i] < buy) buy = shares[i];

    // maxProfit = shares[i] - buy > maxProfit ? shares[i] - buy : maxProfit;
    // buy = shares[i] < buy ? shares[i] : buy;
  }
  return maxProfit;
}

module.exports = MaxValue;

console.log(MaxValue([4, 3, 2, 5, 11])); //(9)

console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5)

console.log(MaxValue([2, 11, 1, 7])); // 9

console.log(MaxValue([1, 7, 2, 11])); // 10

console.log(MaxValue([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 10
