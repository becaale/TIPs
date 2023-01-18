function SumArray(arr, n) {
  // O(n2)
  // console.log(arr);
  // //                         i
  // //                         j
  // // Your code here:
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === n) return true;
  //   }
  // }
  // return false;

  // O(n)
  // todo un recorrido
  const sorted = arr.sort((a, b) => a - b);
  let i = 0;
  let j = sorted.length - 1;

  while (i !== j) {
    const result = sorted[i] + sorted[j];
    if (result > n) j--;
    else if (result < n) i++;
    else return true;
  }
  return false;
}

module.exports = SumArray;

console.log(SumArray([2, 4, 5, 9], 11)); // true
console.log(SumArray([2, 4, 5, 9], 9)); // true
console.log(SumArray([2, 4, 5, 9, 10], 15)); // true

console.log(SumArray([2, 4, 5, 9], 1)); // true
console.log(SumArray([2, 4, 5, 9], 23)); // true
console.log(SumArray([2, 4, 5, 9, 10], 3)); // true

[2, 12, 4, 1, 5, 9, 10, 1, 3, 87, 14];
