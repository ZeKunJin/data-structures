const LinkedList = require('../LinkedList')
const Node = require('../Node')
const defaultEquals = require('../DefaultEquals')

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  push(element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
      node.next = this.head
    } else {
      let current = this.head
      while (current.next !== this.head) {
        current = current.next
      }
      current.next = node
      node.next = this.head
    }
    this.count++
  }

  insert(element, index) {
    if (index > -1 && index < this.count + 1) {
      let current = this.head
      const node = new Node(element)
      if (index === 0) {
        node.next = current
        this.head = node
      } else if (index === this.count) {
        current = this.getElementAt(index - 1)
        current.next = node
        node.next = this.head
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }

  removeAt(index) {
    if (index > -1 && index < this.count) {
      let current = this.head
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined
        } else {
          const removed = this.head
          current = this.getElementAt(this.count - 1)
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }

      this.count--
      return current.element
    }
    return undefined
  }

  size() {
    return this.count
  }
}

module.exports = CircularLinkedList