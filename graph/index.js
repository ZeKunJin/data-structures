class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) this.addVertex(v);
    if (!this.adjList.get(w)) this.addVertex(w);
    this.adjList.get(v).push(w);
    if (!this.isDirected) this.adjList.get(w).push(v);
  }

  getVertces() {
    return this.vertices;
  }

  getAdjlist() {
    return this.adjList;
  }

  toString() {
    let s = "";
    this.vertices.forEach((element) => {
      s += `${element} => `;
      const neighbors = this.adjList.get(element);
      neighbors.forEach((item) => (s += `${item} `));
      s += "\n";
    });
    return s;
  }
}

const graph = new Graph();
const vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
vertices.forEach((element) => graph.addVertex(element));
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());
