//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = Set.prototype

// Union
export const union = Metho.add(
  target,
  function union(set) {
    return new Set([...this, ...set])
  }
)

// Intersection
export const intersect = Metho.add(
  target,
  function intersect(set) {
    return new Set([...this].filter(i=>set.has(i)))
  }
)

// Difference
export const difference = Metho.add(
  target,
  function difference(set) {
    return new Set([...this].filter(i=>!set.has(i)))
  }
)

// Map items
export const map = Metho.add(
  target,
  function map(fn) {
    return new Set([...this].map(i => fn(i, i, this)))
  }
)

// Filter
export const filter = Metho.add(
  target,
  function filter(fn) {
  return new Set([...this].filter(i => fn(i, i, this)))
  }
)

// Some
export const some = Metho.add(
  target,
  function some(fn) {
    return [...this].some(i => fn(i, i, this))
  }
)

// Every
export const every = Metho.add(
  target,
  function every(fn) {
    return [...this].every(i => fn(i, i, this))
  }
)

// Group by
export const groupBy = Metho.add(
  target,
  function groupBy(fn) {
    const result = Object.create(null)

     this.forEach(i => {
      const key = fn(i)

      if (!result[key]) {
        result[key] = new Set()
      }

      result[key].add(i)
    }, {})

    return result
  }
)
