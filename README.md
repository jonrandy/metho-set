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

// map - transform each item and take unique values
a[map(i => i * 2)] // Set [ 2, 4, 6 ]

// filter - return subset that conforms to predicate
a[filter(i => i % 2 !== 0)] // Set [ 1, 3 ]

// some - test if includes a value that conforms to predicate
a[some(i => i < 3)] // true
a[some(i => i > 5)] // false

// every - test if all valuee conform to predicate
a[every(i => i < 4)] // true
b[every(i => i < 4)] // false

// groupBy - group into sub-Sets in object with key given by the callback
a[groupBy((n) => n % 2 === 0 ? 'even' : 'odd')]
// { even: Set [ 2 ], odd: Set [ 1, 3 ] }


```
