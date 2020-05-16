class StackTs {
  private count: number
  private items: object

  constructor(items: object = {}) {
    this.count = 0
    this.items = items
  }

  get() {
    return this.items
  }

  push(element: any) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if (!this.isEmpty()) {
      this.count--
      const result: any = this.items[this.count]
      delete this.items[this.count]
      return result
    } else {
      return undefined
    }
  }

  toString() {
    if (!this.isEmpty()) {
      let objString = ''
      const length: number = this.count
      for (let i: number = 0; i < length; i++) {
        objString += this.items[i]
      }
      return objString
    } else {
      return ''
    }
  }

  isEmpty() {
    return this.count < 1
  }
}

const SYSTEM: number = 2

const switchBinary = (system: number = 2, value: number = 0) => {
  let number: number = value
  let result: string = ''
  let remStack = new StackTs()
  
  while(number > 0) {
    const rem: number = Math.floor(number % system)
    remStack.push(rem)
    number = Math.floor(number / system)
  }

  while(!remStack.isEmpty()) {
    result += remStack.pop().toString()
  }

  return result
}

console.log(switchBinary(SYSTEM, 100345))
