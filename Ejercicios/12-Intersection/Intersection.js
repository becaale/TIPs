function intersection(arr1, arr2) {
  // Your code here:
  // const result = [];
  // for (const num1 of arr1) {
  //   for (const num2 of arr2) {
  //     num1 === num2 && result.push(num1);
  //   }
  // }
  // return result;
  // let i = 0;
  // let j = 0;
  const results = [];
  //   while (arr1.length && arr2.length) {
  //     if (arr1[0] === arr2[0]) {
  //       results.push(arr1[0]);
  //       arr1.shift() && arr2.shift();
  //     } else {
  //       if (arr1[0] < arr2[0]) arr1.shift();
  //       else arr2.shift();
  //     }
  //   }
  //   return results;
  // ***************************************************
  // let i = 0;
  // let j = 0;
  // while (i < arr1.length && j < arr2.length) {
  //   if (arr1[i] === arr2[j]) {
  //     results.push(arr1[i]);
  //     i++;
  //     j++;
  //   } else {
  //     if (arr1[i] < arr2[j]) i++;
  //     else j++;
  //   }
  // }
  //************************************************************* */

  // {
  //   10:true,
  //   1:true,
  //   5:true,
  // }

  // let arr = [];
  // for (num1 of arr1) arr.push(num1);
  // for (num2 of arr2) arr.includes(num2) && results.push(num2);
  // return results;

  // let hashMap = {};
  // for (num1 of arr1) hashMap[num1] = true;
  // for (num2 of arr2) hashMap[num2] && results.push(num2);
  // return results;

  // const arrAsoc = [];
  // for (num1 of arr1) arrAsoc[num1] = true;
  // for (num2 of arr2) arrAsoc[num2] && results.push(num2);
  // return results;

  const map = new Map();
  for (num1 of arr1) map.set(num1, true);
  for (num2 of arr2) map.get(num2) && results.push(num2);
  return results;
}

module.exports = intersection;

// console.log(intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])); //([3, 10])
console.log(intersection([10, 5, 1, 7, 3], [3, 6, 20, 8, 10, 2])); //([3, 10])

// console.log(intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])); //([])

// const arr1 = [1, 3, 4, 7];
// const arr2 = [2, 6, 8, 10, 20];

// const results = [];
// for (const num1 of arr1) {
//   for (const num2 of arr2) {
//     num1 === num2 && result.push(num1);
//   }
// }
// return results;

// const results = [];
//   let arr = [];
//   for (const num1 of arr1) arr.push(num1);
//   for (const num2 of arr2) arr.includes(num2) && results.push(num2);
//   return results;

//   const results = [];
//   let hashMap = {};
//     for (const num1 of arr1) hashMap[num1] = true;
//     for (const num2 of arr2) hashMap[num2] && results.push(num2);
//     return results;

//     const results = [];
//     const arrAsoc = [];
//       for (const num1 of arr1) arrAsoc[num1] = true;
//       for (const num2 of arr2) arrAsoc[num2] && results.push(num2);
//       return results;

//       const results = [];
//       const map = new Map();
//         for (const num1 of arr1) map.set(num1, true);
//         for (const num2 of arr2) map.get(num2) && results.push(num2);
//         return results;
