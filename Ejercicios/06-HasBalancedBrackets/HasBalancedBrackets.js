function HasBalanceBrackets(string) {
  if (string.length % 2 !== 0) return false;

  // const openBrackets = ["(", "{", "["];
  // const closeBrackets = [")", "}", "]"];
  const validBrackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const openStack = [];

  for (const bracket of string) {
    if (validBrackets[bracket]) openStack.push(bracket);
    else if (bracket !== validBrackets[openStack.pop()]) return false;
  }
  return !openStack.length; // 0 => false => true
}

// recorrer un array > acceder a la prop de un objeto > acceder a la posición de un array
// obj[prop] > arr[n] =>

//  hashMap!!!!!!!!! VITAL PARA MI VIDA COMO PROGRAMADOR!!! VITALLL.. PERO VITAL EN SERIO, EH!
// NO TAN VITAL... PERO MUY BUENA... ARRAY ASOCIATIVO...

// // const index = closeBrackets.indexOf(bracket);
// // const sister = openBrackets[index];
// // if (openStack.pop() !== sister) return false;
// if (openStack.length === 0) return true;
// else return false;

// return openStack.length === 0 ? true : false;

module.exports = HasBalanceBrackets;

// console.log(HasBalanceBrackets("{()}([[]])")); //(true)

// console.log(HasBalanceBrackets("{[]()}")); //(true)

// console.log(HasBalanceBrackets("{[(])}")); //(false)

// console.log(HasBalanceBrackets("{[(")); //(false)

// console.log(HasBalanceBrackets("{[([{()[]{}}])]}")); //(true)

console.log(HasBalanceBrackets("{[]}}")); //(false)
