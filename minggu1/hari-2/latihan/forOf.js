// contoh 1
console.log('<<== contoh 1==>>')
const arr = [3, 5, 7]
arr.foo = 'hello'
for (const value of arr) {
  console.log(value)
} //mencetak nilai dari arr
// Output:
// 3
// 5
// 7

// contoh 2
console.log('<<== contoh 2 ==>>')
const array = ['a', 'b', 'c'] //deklarasi variable arry1 dengan nilai a,b,c
for (const element of array) {
  console.log(element)
} //mencetak nilai dari array
// Output:
// "a"
// "b"
// "c"

//contoh 3 -Iterating over an Array

console.log('<<== contoh 3 Iterating over an Array ==>>')
const iterable = [10, 20, 30]

for (let value of iterable) {
  value += 1
  console.log(value)
} //mencetak nilai dari iterable
// Output:
// 11
// 21
// 31

//contoh 4 -Iterating over a string

console.log('<<== contoh 4 Iterating over a string ==>>')
const str = 'boo'

for (const value of str) {
  console.log(value)
} //mencetak nilai dari str
// Output:
// "b"
// "o"

//contoh 5 -Iterating over a TypedArray
console.log('<== contoh 5 Iterating over a TypedArray ==>')
const typedArray = new Uint8Array([0x00, 0xff])
for (const value of typedArray) {
  console.log(value)
} //mencetak nilai dari typedArray
// Output:
// 0
// 255

// contoh 6 -Iterating over a Map
console.log('<== contoh 6 Iterating over a Map ==>')
const map = new Map([
  ['foo', 'bar'],
  ['baz', 42],
])
// jika ingin mencetak seluruh nilai array
for (const entry of map) {
  console.log(entry)
} //mencetak nilai dari map
// Output:
// ["foo", "bar"]
// ["baz", 42]

// jika ingin mencetak nilai key saja
for (const [key, value] of map) {
  console.log(key)
} //mencetak nilai dari map
// Output:
// "foo"
// "baz"

// contoh 7 -Iterating over a Set
console.log('<== contoh 7 Iterating over a Set ==>')
const set = new Set(['foo', 'bar', 'baz', 'foo'])
for (const value of set) {
  console.log(value)
} //mencetak nilai dari set
// Output:
// "foo"
// "bar"
// "baz"

// contoh 8 -Iterating over arguments
console.log('<== contoh 8 Iterating over arguments ==>')

function printArgs() {
  for (const x of arguments) {
    console.log(x)
  }
}

printArgs('a', 'b') //mencetak nilai dari printArgs
// Output:
// "a"
// "b"
