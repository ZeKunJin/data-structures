const LinkedList = require('../LinkedList')
const defaultEquals = require('../DefaultEquals')

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

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert(element) {
    if (this.isEmpty()) {
      super.insert(element, 0)
    } else {
      const pos = this.getIndexNextSortedElement(element)
      super.insert(element, pos)
    }
  }

  getIndexNextSortedElement(element) {
    let i = 0
    let current = this.head
    for (i; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)
      if (comp === Compare.LESS_THAN) {
        return i
      }
      current = current.next
    }
    return i
  }
}

module.exports = SortedLinkedList
