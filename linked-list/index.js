const LinkedList = require('./src/LinkedList')
const DoublyLinkedList = require('./src/DoublyLinkedList')
const CircularLinkedList = require('./src/CircularLinkedList')
const SortedLinkedList = require('./src/SortedLinkedList')

const linkedList = new LinkedList()
const doublyLinkedList = new DoublyLinkedList()
const circularLinkedList = new CircularLinkedList()
const sortedLinkedList = new SortedLinkedList()

const nameList = [
  'dding', 'fleta', 'diem', 'pine', 'carpe', 'sayaplayer'
]

for (const item of nameList) {
  linkedList.push(item)
  doublyLinkedList.push(item)
  circularLinkedList.push(item)
  sortedLinkedList.insert(item)
}

console.log(linkedList)
