const DoublyNode = require('../DoublyNode')
const LinkedList = require('../LinkedList')
const defaultEquals = require('../DefaultEquals')

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  push(element) {
    const doublyNode = new DoublyNode(element)
    if (!this.head) {
      this.head = doublyNode
      this.tail = doublyNode
    } else {
      doublyNode.prev = this.tail
      this.tail.next = doublyNode
      this.tail = doublyNode
    }
    this.count++
  }

  insert(element, index) {
    if (index > -1 && index < this.count + 1) {
      let current = this.head
      const doublyNode = new DoublyNode(element)
      if (index === 0) {
        if (!this.head) {
          this.head = doublyNode
          this.tail = doublyNode
        } else {
          doublyNode.next = this.head
          current.prev = doublyNode
          this.head = doublyNode
        }
      } else if (index === this.count) {
        current = this.tail
        current.next = doublyNode
        doublyNode.prev = current
        this.tail = doublyNode
      } else {
        const previouos = this.getElementAt(index - 1)
        current = previouos.next
        doublyNode.next = current
        previouos.next = doublyNode
        current.prev = doublyNode
        doublyNode.prev = previouos
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
        this.head = current.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = undefined
      } else {
        const previouos = this.getElementAt(index - 1)
        current = previouos.next
        previouos.next = current.next
        current.next.prev = previouos
      }
      this.count--
      return current.element
    }
    return undefined
  }
}

module.exports = DoublyLinkedList
