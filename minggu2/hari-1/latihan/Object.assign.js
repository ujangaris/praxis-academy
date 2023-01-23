const target = {
  a: 1,
  b: 2,
}
const source = { b: 4, c: 5 }

const returnedTarget = Object.assign(target, source)
console.log(target) // {a:1, b:4, c:5}

console.log(returnedTarget === target) // true)

// Cloning an object
console.log('<<< Cloning an object >>>')
const obj = { a: 1 }
const clone = Object.assign({}, obj)
console.log(clone) // { a: 1 }

// Warning for Deep Clone
console.log('<<< Warning for Deep Clone >>>')
const obj2 = {
  a: 0,
  b: {
    c: 0,
    d: 0,
  },
}

const obj3 = Object.assign({}, obj2)
console.log(obj3) // { a: 0, b: { c: 0, d: 0 } }

obj2.a = 1
console.log(obj2) // { a: 1, b: { c: 0, d: 0 } }
console.log(obj3) // { a: 0, b: { c: 0, d: 0 } }

obj3.a = 2
console.log(obj2) // { a: 1, b: { c: 0, d: 0 } }
console.log(obj3) // { a: 2, b: { c: 0, d: 0 } }

obj2.b.c = 3
console.log(obj2) // { a: 1, b: { c: 3, d: 0 } }
console.log(obj3) // { a: 2, b: { c: 3, d: 0 } }

// Deep Clone
console.log('<<< Deep Clone >>>')
const obj4 = { a: 0, b: { c: 0 } }
const obj5 = JSON.parse(JSON.stringify(obj4))
obj4.a = 4
obj4.b.c = 4
console.log(obj4) // { a: 4, b: { c: 4 } });

// Merging objects
console.log('<<< Merging objects >>>')
const o1 = { a: 1 }
const o2 = { b: 2 }
const o3 = { c: 3 }

const obj6 = Object.assign(o1, o2, o3)
console.log(obj6) // { a: 1, b: 2, c: 3 }
console.log(o1) // { a: 1, b: 2, c: 3 }, target object itself is changed.

// Merging objects with same properties
console.log('<<< Merging objects with same properties >>>')
const o4 = { a: 1, b: 1, c: 1 }
const o5 = { b: 2, c: 2 }
const o6 = { c: 3 }

const obj7 = Object.assign({}, o4, o5, o6)
console.log(obj7) // { a: 1, b: 2, c: 3 }

// Copying symbol-typed properties
console.log('<<< Copying symbol-typed properties >>>')
const o7 = { a: 1 }
const o8 = { [Symbol('foo')]: 2 }

const obj8 = Object.assign({}, o7, o8)
console.log(obj8) // { a: 1, [Symbol(foo)]: 2 }
Object.getOwnPropertySymbols(obj8) // [Symbol(foo)]
