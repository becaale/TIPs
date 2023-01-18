function FindNeedle(haystack, needle) {
  // if (haystack.length < needle.length) return -1;

  // O(n*m) O(n2)
  // for (let i = 0; i < haystack.length; i++) {
  //   for (let j = 0; j < needle.length; j++) {
  //     if (haystack[i + j] !== needle[j]) break;
  //     if (j == needle.length - 1) return i;
  //   }
  // }
  // return -1;

  // O(n*m)
  // estoy limitando cortar si no es necesario
  // no estoy cortando porciones de haytacks menores al needle

  for (let i = 0; i < haystack.length - needle.length + 1; i++)
    if (haystack[i] == needle[0])
      if (haystack.slice(i, needle.length + i) === needle) return i;

  return -1;
}

// slice
// includes
// find
// indexOf
// concat // BOOOOOOM // LO MÁS COSTOSO EN TIEMPO ES ESTO!!!
// split

module.exports = FindNeedle;

console.log(FindNeedle("react-redux", "redux")); //(6);

console.log(FindNeedle("rereredux", "reredux")); //(2);

console.log(FindNeedle("pinky", "puntual")); //(-1);

console.log(FindNeedle("puntual", "pinky")); //(-1);
