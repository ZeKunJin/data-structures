class Queue {
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (!this.isEmpty()) {
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    } else {
      return undefined
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.lowestCount]
    } else {
      return undefined
    }
  }

  isEmpty() {
    return this.size() < 1
  }

  size() {
    return this.count - this.lowestCount
  }
}

const hotPotato = (elementsList, num) => {
  const queue = new Queue()

  for (const item of elementsList) {
    queue.enqueue(item)
  }

  while(queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }

  return queue.dequeue()
}

const names = ['jack', 'dding', 'fleta', 'diem', 'pine']
const result = hotPotato(names, 2)

console.log(result)