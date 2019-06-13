class Node {
    constructor(id) {
      this.value = id;
      this.edges = {};
    }
}

class Graph {
  constructor() {
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  addVertex(id) {
      if(this.vertices[id]) {
        return "Vertex exists.";
      } else {
        let vertex = new Node(id);
        this.vertices[id] = vertex;
        this.totalVertices++;
      }
  }

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  getVertex(id) {
      if(this.vertices[id]) {
        return "Vertex " + id + " exists.";
      } else {
        return "Vertex " + id + " not found.";
      }
  }

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  removeVertex(id) {
    if(this.vertices[id]) {
      delete this.vertices[id];
      --this.totalVertices;
      return "Vertex " + id + " removed.";
    } else {
      return "Vertex " + id + " not found.";
    }
  }

  //Time Complexity: O(1)
  //Space Complexity: O(1)
  removeEdge(id1, id2) {
    if(this.vertices[id1] && this.vertices[id2]) {
      if(this.vertices[id1].edges[id2] && this.vertices[id2].edges[id1]) {
        delete this.vertices[id1].edges[id2];
        delete this.vertices[id2].edges[id1];
        this.totalEdges--;
      } else {
        return "Edge between " + id1 + " and " + id2 + " does not exist.";
      }
    } else {
        return "Either vertices or both do not exist.";        
    } 
  }

  //Time Complexity: O(1)
  //Space Complexity: O(1)
  addEdge(id1, id2) {
    if(this.vertices[id1] && this.vertices[id2]) {
      if(!this.vertices[id1].edges[id2] && !this.vertices[id2].edges[id1]) {
        this.vertices[id1].edges[id2] = id2;
        this.vertices[id2].edges[id1] = id1;
        this.totalEdges++;
      } else {
        return `Edge between ${id1} and ${id2} exists.`;
      }
    } else {
        return "Either vertices or both do not exist.";        
    } 
  }

  //Time Complexity: O(n)
  //Space Complexity: O(1)
  findNeighbors(id) {
    const neighbors = [];
    if(this.vertices[id]) {
      
      for(let edge in this.vertices[id].edges){
        neighbors.push(this.vertices[edge]);

      }
      return neighbors;
    } else {
      return id + " does not exist.";
    }
  }

  //Time Complexity: O(n)
  //Space Complexity: O(n)
  forEachNode(func) {
    for(let vertexKey in this.vertices){
      func(this.vertices[vertexKey]);
    }
  }

  //Time Complexity: O(n)
  //Space Complexity: O(n)
  forEachVertex(func) {
    for(let vertexKey in this.vertices){
      let vertex = this.vertices[vertexKey];
      for(let edge in vertex.edges){
        func(edge, vertex.value);
      }
    }
  }

};


var newGraph = new Graph();
console.log(JSON.stringify(newGraph));
newGraph.addVertex(12);
newGraph.addVertex(22);
newGraph.addVertex(54);
newGraph.addVertex(64);
console.log(JSON.stringify(newGraph));
newGraph.addEdge(12, 22);
console.log(JSON.stringify(newGraph));
console.log(newGraph.findNeighbors(12));
newGraph.removeEdge(12,22);
console.log(JSON.stringify(newGraph));
newGraph.addVertex(23);
console.log(JSON.stringify(newGraph));
newGraph.addEdge(12, 23);
newGraph.addEdge(12, 22);
newGraph.addEdge(54, 64);
console.log(JSON.stringify(newGraph));
newGraph.forEachNode((id) => {
  console.log(newGraph.findNeighbors(id.value));
});
console.log(newGraph.getVertex(12));
newGraph.forEachNode((id) => {
  console.log(newGraph.getVertex(id.value));
});
