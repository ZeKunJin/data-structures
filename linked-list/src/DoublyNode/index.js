const Node = require('../Node')

class doublyNode extends Node {
  constructor(element, next = null, prev = null) {
    super(element, next)
    this.prev = prev
  }
}

module.exports = doublyNode