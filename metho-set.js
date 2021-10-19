//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = Set.prototype

// Union
export const union = Metho.add(
  target,
  function(set) {
    return new Set([...this, ...set])
  }
)

// Intersection
export const intersect = Metho.add(
  target,
  function(set) {
    return new Set([...this].filter(i=>set.has(i)))
  }
)

// Difference
export const difference = Metho.add(
  target,
  function(set) {
    return new Set([...this].filter(i=>!set.has(i)))
  }
)

