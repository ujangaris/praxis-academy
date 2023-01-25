//

let counter = 1
function increaseCounter(value) {
  //Ini adalah fungsi yang menerima parameter "value" dan mengembalikan nilai dari "value" ditambah 1.
  counter = value + 1
}
increaseCounter(counter)
console.log(counter) // 2

// arrow function
let counter2 = 1
const increaseCounter2 = (value) => value + 1 //Ini adalah fungsi arrow yang menerima parameter "value" dan mengembalikan nilai dari "value" ditambah 1.

increaseCounter2(counter2) // 2
console.log(counter2) // 1

// Pure functions benefits
console.log('<<< Pure functions benefits >>>')
let list = [1, 2, 3, 4, 5]
const addToList = (list, item) => list.concat(item) // Fungsi ini tidak mengubah nilai dari variabel "list" yang ada di luar fungsi.

console.log(addToList(list)) //
console.log(addToList(list, 6)) // [1, 2, 3, 4, 5, 6]

// Immutability
console.log('<<< Immutability >>>')
let values = [1, 2, 3, 4, 5]
let sumOfValues = 0

for (let i = 0; i < values.length; i++) {
  sumOfValues += values[i] // Fungsi ini tidak mengubah nilai dari variabel "values" yang ada di luar fungsi.
}
sumOfValues // 15 (1 + 2 + 3 + 4 + 5)

//sum function
console.log('<<< sum function >>>')
let list2 = [1, 2, 3, 4, 5]
let accumulator = 0

function sum(list2, accumulator) {
  if (list2.length === 0) {
    //mengecek apakah panjang dari "list2" sama dengan 0. Jika ya, maka fungsi akan mengembalikan nilai dari "accumulator".
    return accumulator
  }
  return sum(list2.slice(1), accumulator + list2[0]) //fungsi "sum" lagi dengan mengirimkan "list2" yang sudah dipotong index pertamanya dan "accumulator" yang ditambah dengan nilai dari index pertama dari "list2"
}

console.log(sum(list2, accumulator)) // 15 (1 + 2 + 3 + 4 + 5)
console.log(list2) // [1, 2, 3, 4, 5]
console.log(accumulator) // 0

//manipulasi aritmatika
console.log('<<< manipulasi aritmatika >>>')
const sum2 = (a, b) => a + b // sum2 adalah fungsi yang menerima dua parameter dan mengembalikan nilai dari kedua parameter tersebut ditambahkan.
const subtract = (a, b) => a - b // subtract adalah fungsi yang menerima dua parameter dan mengembalikan nilai dari kedua parameter tersebut dikurangi.

const doubleOperator = (f, a, b) => f(a, b) * 2 //Baris ini mendefinisikan sebuah fungsi yang disebut "doubleOperator" yang menerima tiga parameter, "f", "a", dan "b". Didalam fungsi tersebut, fungsi yang diterima sebagai parameter pertama "f" dipanggil dan parameter input "a" dan "b" sebagai argumen kemudian hasilnya dikalikan dengan 2.

console.log(doubleOperator(sum2, 1, 2)) // 6
console.log(doubleOperator(subtract, 1, 2)) // -2

// push function
console.log('<<< push function >>>')
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // Deklarasi variable numbers dengan nilai array bilangan dari 0-10
let evenNumbers = [] //Deklarasi variable evenNumbers dengan nilai array kosong

for (let i = 0; i < numbers.length; i++) {
  // Memulai perulangan untuk setiap elemen dari array numbers
  if (numbers[i] % 2 === 0) {
    // cek apakah elemen saat ini dari array numbers adalah bilangan genap
    evenNumbers.push(numbers[i]) // jika iya, tambahkan ke dalam array evenNumbers
  }
}

console.log(evenNumbers) // [0, 2, 4, 6, 8, 10] // tampilkan isi dari array evenNumbers

// filter function
console.log('<<< filter function >>>')
const even = (n) => n % 2 == 0
const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(listOfNumbers.filter(even)) // [2, 4, 6, 8, 10]

// filter array
console.log('<<< filter array >>>')
let filterArray = function (x, coll) {
  //mendefinisikan fungsi dengan nama filterArray yang menerima 2 parameter x dan coll
  let resultArray = [] // mendefinisikan variable resultArray dengan nilai array kosong
  for (let i = 0; i < coll.length; i++) {
    //Memulai perulangan untuk setiap elemen dari array coll
    if (coll[i] < x) {
      // cek apakah elemen saat ini dari array coll kurang dari x
      resultArray.push(coll[i]) // jika iya, tambahkan ke dalam array resultArray
    }
  }
  return resultArray // mengembalikan isi dari resultArray
}

console.log(filterArray(3, [10, 9, , 8, 2, 7, 5, 1, 3, 0])) //menjalankan fungsi filterArray dengan x = 3 dan coll = [10, 9, , 8, 2, 7, 5, 1, 3, 0] dan menampilkan hasilnya pada console.
