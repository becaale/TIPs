function mdArraySum(arr) {
  const val = arr.reduce((sum, elem) => (sum += Array.isArray(elem) ? mdArraySum(elem) : elem), 0);
  return val;
  //
  // let sum = 0;
  // for (const elem of arr) {
  //   sum += Array.isArray(elem) ? mdArraySum(elem) : elem;
  // }
  // return sum;

  /*  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        sum += mdArraySum(arr[i]);
      } else {
        sum += arr[i];
      }
    }
    return sum; */
}

module.exports = mdArraySum;
console.log(mdArraySum([1, 2, 3, 4])); // 10
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); //14
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); // 26

/* function mdArraySum(arr) {
  let sum = 0;
  let stack = [arr];
  while (stack.length > 0) {
    let current = stack.pop();
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else {
      sum += current;
    }
  }
  return sum;
} */

/* function mdArraySum(arr) {
  let sum = 0;
  let queue = [arr];
  while (queue.length > 0) {
    let current = queue.shift();
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        queue.push(current[i]);
      }
    } else {
      sum += current;
    }
  }
  return sum;
} */
