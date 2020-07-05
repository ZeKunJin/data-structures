# JavaScript Data Structures and Algorithms

javascript数据结构与算法

数据结构是计算机为了高效地利用资源而组织数据的一种方式，数据结构与算法是解决一切编程问题的基础



## TypeScript

### interface

#### data type 数据类型

```typescript
interface Person {
  name: string
  age: number
}

const printName = (person: Person) => {
  console.log(person.name)
}
```



#### implements 合约

```typescript
interface Compareble {
  conpareTo(b): number
}

class MyObject implements Compareble {
  peivate age: number = 0
  
  compareTo(b): number {
    if (this.age === b.age) {
      return 0
    }
    return this.age > b.age ? 1 : -1
  }
}
```



#### T 泛型

控制接口传入的参数类型，<T>表示泛型，用来控制比较相同的对象

```typescript
interface Compareble<T> {
  conpareTo(b: T): number
}

class MyObject implements Compareble {
  peivate age: number = 0
  
  compareTo(b: MyObject): number {
    if (this.age === b.age) {
      return 0
    }
    return this.age > b.age ? 1 : -1
  }
}
```



## Stack

栈是一种遵循LIFO（后进先出）规则的有序集合，新元素靠近栈顶，旧的元素靠近栈底

常用于浏览器历史记录

只能从栈顶获取或者删除元素

```javascript
constructor() {
  this.count = 0
  this.items = {}
}

stack.push()
stack.pop()
stack.toString()
```



## Queue

### Queue 队列

队列是一种遵循FIFO（先进先出）规则的有序集合，新元素靠近栈底，旧的元素靠近栈顶

常用于排队、消息队列

只能从队列底移除元素 队列顶添加元素

```javascript
constructor() {
  this.items = {}
  this.count = 0
  this.lowestCount = 0
}

queue.enqueue()
queue.dequeue()
queue.peek()
```



### Deque (double-ended-queue) 双端队列

双端队列是一种允许同时从前端和后端添加或移除元素的特殊队列

常用于计算机存储撤销操作

```javascript
constructor() {
  this.items = {}
  this.count = 0
  this.lowestCount = 0
}

queue.addFront()
queue.addBack()
queue.removeFront()
queue.removeBack()
```



## LinkedList

### LinkedList 链表

链表存储有序元素的集合，每个元素由一个元素本身的节点和一个指向下一个元素的引用组成

相较于数组，再链表中添加或删除元素不需要移动其他元素

```javascript
constructor(equalsFn = defaultEquals) {
  this.count = 0
  this.head = undefined
  this.equalsFn = equalsFn
}

linkedList.push(element)
linkedList.insert(element, index)
linkedList.removeAt(index)
linkedList.remove(element)
linkedList.indexOf(element)
linkedList.getElementAt(index)
linkedList.toString()
```



### DoublyLinkedList 双向链表

双向链表是一种特殊的链表，在元素中的链接是双向的，一个指向前一项元素，一个指向下一个元素

双向链表提供了两种迭代方式，从前向后 或 从后向前

```javascript
exptends LinkedList

constructor(equalsFn = defaultEquals) {
  super(equalsFn)
  this.tail = undefined
}

doublyLinkedList.insert(element, index)
doublyLinkedList.removeAt(index)
```



###  CircularLinkdList 循环链表

双向链表是一种特殊的链表，最后一个元素指向下一个元素的指针不是undefined，而是指向第一个元素

循环链表与双向链表相同，可以提供两种迭代方式

```javascript
exptends LinkedList

constructor(equalsFn = defaultEquals) {
  super(equalsFn)
}

doublyLinkedList.insert(element, index)
doublyLinkedList.removeAt(index)
```



## Set

集合是一个由无序且唯一的项组成的，集合是一种不允许重复的顺序数据结构。

```javascript
constructor() {
  this.items = {}
}

set.add(element)
set.delete(element)
set.has(element)
set.clear()
set.size()
set.values()
```



### 集合运算

#### union 并集

```javascript
const arrA = []
const arrB = []

const result = new Set([...arrA, ...arrB])
```

#### intersection 交集

```javascript
const setA = new Set()
const setB = new Set()

const result = new Set([...setA].filter(x => setB.has(x)))
```

#### difference 差集

```javascript
const setA = new Set()
const setB = new Set()

const result = new Set([...setA].filter(x => !setB.has(x)))
```

