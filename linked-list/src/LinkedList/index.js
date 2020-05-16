const Node = require('../Node')
const defaultEquals = require('../DefaultEquals')

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  // 链表尾部添加元素
  push(element) {
    let current
    const node = new Node(element)
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 在指定位置添加元素
  insert(element, position) {
    if (position < 0 || position > this.count) {
      this.push(element)
    } else {
      const node = new Node(element)

      if (position === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(position - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
    }
    this.count++
  }

  // 移除指定下表元素
  removeAt(index) {
    if (index > -1 && index < this.count) {
      let current = this.head
      if (index < 1) {
        this.head = current.next
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

  // 返回指定元素的下标
  indexOf(element) {
    let current = this.head
    for (let  i = 0; i < this.count && current; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  // 移除指定元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 获取指定下标元素
  getElementAt(index) {
    if (index > -1 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node; i++) {
        node = node.next
      }
      return node
    } else {
      return undefined
    }
  }

  toString() {
    if (!this.head) {
      return ''
    }

    let objString = ''
    for (let i = 0; i < this.count; i++) {
      objString += this.getElementAt(i).element
    }
    return objString
  }

  isEmpty() {
    return this.count < 1
  }

  size() {
    return this.count
  }

  getHead() {
    return this.head
  }
}

module.exports = LinkedList