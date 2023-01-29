function SolveGraph(graph, start, end, visited = {}) {
  // * De A.. puedo ir a S? NO
  // * De C.. puedo ir a S? SÍ

  // TODO Ya visité este lugar?
  if (visited[start]) return false;

  // TODO Anoto que estoy visitando este lugar
  visited[start] = true;
  console.log(visited);

  // TODO Puedo llegar a donde quiero?
  if (graph[start].includes(end)) return true;

  for (const node of graph[start]) {
    if (SolveGraph(graph, node, end, visited)) return true;
  }

  return false;
}

module.exports = SolveGraph;

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};

console.log(SolveGraph(graph, "a", "c")); // TRUE

// console.log(SolveGraph(graph, "a", "z")); // false

// console.log(SolveGraph(graph, "a", "r")); //(true)

console.log(SolveGraph(graph, "a", "d")); //(true)

// console.log(SolveGraph(graph, "s", "b")); //(false)
