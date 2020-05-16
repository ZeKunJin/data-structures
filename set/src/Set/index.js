class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return element in this.items

    // return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
    }
    return false
  }

  delete(element) {
    if (this.has(element)) {
      const result = this.items[element]
      delete this.items[element]
      return result
    }
    return undefined
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(element => {
      unionSet.add(element)
    })
    otherSet.values().forEach(element => {
      unionSet.add(element)
    })
    return unionSet
  }

  intersection(otherSet) {
    const values = this.values()
    const intersectionSet = new Set()

    for (const item of values) {
      if (otherSet.has(item)) {
        intersectionSet.add(item)
      }
    }

    return intersectionSet
  }

  difference(otherSet) {
    const values = this.values()
    const differenceSet = new Set()

    for (const item of values) {
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }

    return differenceSet
  }
}

module.exports = Set