const object = { a: 1, b: 2, c: 3 } //deklarasi varible object dengan nilai a:1, b:2, c:3

for (const property in object) {
  //cont property in object artinya property adalah variabel yang akan menampung nilai dari object
  console.log(`${property}: ${object[property]}`) //mencetak nilai dari property dan object[property]
}

// Output :
// a: 1
// b: 2
