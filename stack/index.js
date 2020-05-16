// 堆栈 先进后出
class StackArray {
  constructor(items = []) {
    this.items = items
  }

  // 添加栈元素
  push(element) {
    this.items.push(element)
  }

  // 移除栈元素
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop()
    }
  }

  // 查找顶层元素
  peek() {
    const length = this.items.length
    return this.items[length - 1]
  }

  // 检查是否为空
  isEmpty() {
    const length = this.items.length
    return length < 1
  }

  // 清空栈
  clear() {
    this.items = []
  }
}

class StackObjct {
  constructor(items = {}) {
    this._count = 0
    this._items = items
  }

  push(element) {
    this._items[this._count] = element
    this._count++
  }

  isEmpty() {
    return this._count < 1
  }

  pop() {
    if (!this.isEmpty()) {
      this._count--
      const result = this._items[this._count]
      delete this._items[this._count]
      return result
    } else {
      return undefined
    }
  }

  peek() {
    return this._items[this._count - 1]
  }

  clear() {
    while(!this.isEmpty()) {
      this.pop()
    }
  }
}

class Stack extends StackObjct {}

// init
const stack = new Stack()

// action
for (let i = 0; i < 3; i++) {
  stack.push(i)
}

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)