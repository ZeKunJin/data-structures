const Node = require('../Node')

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0
  }
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN
}

class BinarySearchTree {
  constructor(compreFn = defaultCompare) {
    this.compreFn = compreFn
    this.root = null
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.compreFn(node.key, key) === Compare.BIGGER_THAN) {
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (!node.right) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
}

module.exports = BinarySearchTree