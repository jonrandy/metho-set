# Metho Set
Set prototype extensions using the [Metho](https://github.com/jonrandy/metho) library:

## Usage
```js

const a = new Set([1, 2, 3])
const b = new Set([3, 4, 5])

// union - everything from both sets
a[union(b)] // Set [ 1, 2, 3, 4, 5 ]

// intersect - everything that exists both in set a and in set b
a[intersect(b)] // Set [ 3 ]

// difference - everything that exists in set a, but not in set b
a[difference(b)] // Set [ 1, 2 ]


```
