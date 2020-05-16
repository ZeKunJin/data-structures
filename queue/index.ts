class Deque {
  private items: object
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  get() {
    return this.items
  }

  addFront(element: any): void {
    if (this.isEmpty()) {
      this.addBack(element)
    } else {
      if (this.lowestCount > 0) {
        this.lowestCount--
        this.items[this.lowestCount] = element
      } else {
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1]
        }
        this.items[this.lowestCount] = element
      }
    }
  }

  addBack(element: any): void {
    this.items[this.count] = element
    this.count++
  }

  removeFront(): any {
    if (!this.isEmpty()) {
      const result = this.items[this.lowestCount]
      delete this.items[this.lowestCount]
      this.lowestCount++
      return result
    } else {
      return undefined
    }
  }

  removeBack(): any {
    if (!this.isEmpty()) {
      this.count--
      const result: any = this.items[this.count]
      delete this.items[this.count]
      return result
    } else {
      return undefined
    }
  }

  isEmpty(): boolean {
    return this.size() < 1
  }

  size(): number {
    return this.count - this.lowestCount
  }
}

const palindromeChecker = (aString: string) => {
  let deque = new Deque()
  let isEqual: boolean = true
  const lowerString: string = aString.toLowerCase()
  let firstChar, lastChar

  for (const item of lowerString) {
    deque.addBack(item)
  }

  while(deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual
}

const VALUE = 'racecar'
console.log(VALUE, palindromeChecker(VALUE))