// String objects
console.log('<<== String objects ==>>')
const foo = new String('foo') // String object
console.log(foo) // [String: 'foo']
console.log(typeof foo) // object

const firstString = '2 + 2' // create a string literal value
const secondString = new String('2 + 2') // create a String object
number = eval(firstString) // returns the number 4
console.log(number) // 4);
str = eval(secondString) // returns the string "2 + 2"
console.log(str) // 2 + 2
