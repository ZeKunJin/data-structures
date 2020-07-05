const BinarySearchTree = require('./src/BinarySearchTree')

const tree = new BinarySearchTree()

const arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25]

for (const item of arr) {
  tree.insert(item)
}

console.log(tree.root)