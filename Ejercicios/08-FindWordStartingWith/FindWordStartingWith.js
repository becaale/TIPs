function FindWordStartingWith(book, query) {
  // Your code here:
  const { text } = book;

  // const words = text.split(" ");

  // let index = 0;

  // for (const word of words) {
  //   if (word.toLowerCase().startsWith(query.toLowerCase())) results.push(index);
  //   index += word.length + 1;
  // }
  // return results;
  const indexes = [];

  const regex = new RegExp("\\b" + query, "gi");

  let results = [...text.matchAll(regex)];
  console.log(results);

  for (const result of results) {
    indexes.push(result.index);
  }
  return indexes;
}

module.exports = FindWordStartingWith;

const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas",
};

console.log(FindWordStartingWith(book, "de")); //([23])

console.log(FindWordStartingWith(book, "un")); //([6, 14, 43])

console.log(FindWordStartingWith(book, "franco")); //([])

console.log(FindWordStartingWith(book, "era")); //([0, 39])

let miArr = [1, 2, 3];

miArr["prop"] = "hola";
miArr.push(4);
miArr["saludar"] = () => {
  console.log("hola");
};

console.log(miArr);

console.log(miArr.prop);

for (const el in miArr) {
  console.log(el);
}

miArr.saludar();
