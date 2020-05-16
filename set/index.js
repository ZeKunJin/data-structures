// const Set = require('./src/Set')

const set = new Set()
const otherSet = new Set()

for (let i = 0; i < 5; i++) {
  set.add(i)
}

for (let i = 3; i < 10; i++) {
  otherSet.add(i)
}

// 并集
const union = (set, otherSet) => {
  return new Set([...set, ...otherSet])
}

// 交集
const intersection = (set, otherSet) => {
  return new Set([...set].filter(item => otherSet.has(item)))
}

// 差集
const difference = (set, otherSet) => {
  return new Set([...set].filter(item => !otherSet.has(item)))
}

console.log(intersection(set, otherSet))