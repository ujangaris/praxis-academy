// contoh 1
console.log('<<== contoh 1 ==>>')
const arr = [3, 5, 7]
arr.foo = 'hello'
for (const value in arr) {
  console.log(value)
} //mencetak nilai dari arr
// Output:
// 3
// 5
// 7

// contoh 2
console.log('<<== contoh 2 ==>>')
const object = { a: 1, b: 2, c: 3 } //deklarasi varible object dengan nilai a:1, b:2, c:3

for (const property in object) {
  //cont property in object artinya property adalah variabel yang akan menampung nilai dari object
  console.log(`${property}: ${object[property]}`) //mencetak nilai dari property dan object[property]
}

// Output :
// a: 1
// b: 2
