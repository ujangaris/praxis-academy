//Data Set

console.log('<<< Data Set >>>') //`Data Set` adalah kumpulan data yang digunakan untuk menguji sebuah fungsi atau program yang kita buat agar dapat berjalan dengan baik dan sesuai dengan apa yang kita inginkan.
let listOfNumbers = [2, 3, 5, 7, 11]
console.log(listOfNumbers[2]) // 5
console.log(listOfNumbers[2 - 1]) // 3
console.log(listOfNumbers[0]) // 2`

// Properties
console.log('<<< Properties >>>') // `Properties` adalah nilai yang terkait dengan sebuah objek.
let names = ['Hafid', 'Rizal', 'Fadli']
console.log(names.length) // 3

// Methods
console.log('<<< Methods >>>') //`Methods` adalah fungsi yang terkait dengan sebuah objek.
let doh = 'Doh'
console.log(typeof doh) // function
console.log(doh.toUpperCase()) // DOH

let squence = [1, 2, 3]
squence.push(4)
squence.push(5)
console.log(squence) // [1, 2, 3, 4, 5]
squence.pop()
console.log(squence) // [1, 2, 3, 4]

// Objects
console.log('<<< Objects >>>')
let day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running'],
}
console.log(day1.squirrel) // false
console.log(day1.wolf) // undefined
day1.wolf = false
console.log(day1.wolf) // false

let descriptions = {
  work: 'Went to work',
  'touched tree': 'Touched a tree',
}
console.log(descriptions.work) // Went to work
console.log(descriptions['touched tree']) // Touched a tree

let anObject = { left: 1, right: 2 }
console.log(anObject.left) // 1
delete anObject.left
console.log(anObject.left) // undefined
console.log('left' in anObject) // false
console.log('right' in anObject) // true

console.log(Object.keys({ x: 0, y: 0, z: 2 })) // ['x', 'y', 'z']);

let ObjectA = { a: 1, b: 2 }
Object.assign(ObjectA, { b: 3, c: 4 })
console.log(ObjectA) // {a: 1, b: 3, c: 4}

let journal = [
  {
    events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false,
  },
  {
    events: [
      'work',
      'ice cream',
      'cauliflower',
      'lasagna',
      'touched tree',
      'brushed teeth',
    ],
    squirrel: false,
  },
  {
    events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true,
  },
  /* and so on... */
]

console.log(journal[2].events) // ['weekend', 'cycling', 'break', 'peanuts', 'beer']
console.log(journal[2].events[2]) // break);
console.log(journal[2].squirrel) // true);

// Mutability
console.log('<<< Mutability >>>') // Mutability adalah kemampuan sebuah nilai untuk berubah atau tidak berubah
let object1 = { value: 10 }
let object2 = object1
let object3 = { value: 10 }

console.log(object1 == object2) // true
console.log(object1 == object3) // false

object1.value = 15
console.log(object2.value) // 15
console.log(object3.value) // 10

// The Lycanthrope’s Log
console.log('<<< The Lycanthrope’s Log >>>')
/*
 `The Lycanthrope’s Log` adalah sebuah program yang akan menampilkan data-data yang ada di dalam sebuah array of objects. 
Program ini akan menampilkan data-data yang ada di dalam array of objects dengan menggunakan `for` loop dan `if` statement. 
Program ini juga akan menampilkan data-data yang ada di dalam array of objects dengan menggunakan `for` loop dan `if` statement yang lebih sederhana.
*/
let planing = []

function addEntry(events, squirrel) {
  planing.push({ events, squirrel })
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false)
addEntry(
  [
    'work',
    'ice cream',
    'cauliflower',
    'lasagna',
    'touched tree',
    'brushed teeth',
  ],
  false
) //
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true) //

console.log(planing)

// for loop
let lycanthropes = [
  { name: 'John', species: 'werewolf' },
  { name: 'Kate', species: 'werewolf' },
  { name: 'Mike', species: 'werewolf' },
  { name: 'Emily', species: 'werecat' },
  { name: 'Jessica', species: 'wererat' },
]

console.log("The Lycanthrope's Log:")
for (let i = 0; i < lycanthropes.length; i++) {
  if (lycanthropes[i].species === 'werewolf') {
    console.log(lycanthropes[i].name + ' is a werewolf.')
  } else {
    console.log(lycanthropes[i].name + ' is a ' + lycanthropes[i].species + '.')
  }
}

// Computing Correlations
console.log('<<< Computing Correlations >>>')
/* Computing Correlations` adalah sebuah program yang akan menampilkan data-data yang ada di dalam sebuah array of objects. 
Program ini akan menampilkan data-data yang ada di dalam array of objects dengan menggunakan `for` loop dan `if` statement. 
Program ini juga akan menampilkan data-data yang ada di dalam array of objects dengan menggunakan `for` loop dan `if` statement yang lebih sederhana. */

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  )
}

console.log(phi([76, 9, 4, 1])) // -0.068599434

// const data = import('journal.js')
// console.log(data)
/* function tableFor(event, journal) {
  let table = [0, 0, 0, 0]
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0
    if (entry.events.includes(event)) index += 1
    if (entry.squirrel) index += 2
    table[index] += 1
  }
  return table
}

console.log(tableFor('pizza', JOURNAL))
// → [76, 9, 4, 1] */

// Array Loops
console.log('<<< Array Loops >>>')
for (let entry of journal) {
  console.log(`${entry.events.length} events.`)
}

// Further arrayology
console.log('<<< Further arrayology >>>')
let todoList = []
function remember(task) {
  todoList.push(task)
}
function getTask() {
  return todoList.shift()
}
function rememberUrgently(task) {
  todoList.unshift(task)
}

console.log([1, 2, 3, 2, 1].indexOf(2)) // 1]);
console.log([1, 2, 3, 2, 1].lastIndexOf(2)) // 3]);
// slice
console.log('<<< slice >>>')
console.log([0, 1, 2, 3, 4].slice(2, 4)) // [2, 3]);
console.log([0, 1, 2, 3, 4].slice(2)) // [2, 3, 4]);

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2)) // ['a', 'b', 'd', 'e']);

// Strings and Their Properties

console.log('<<< Strings and Their Properties >>>')

let kim = 'Kim'
kim.age = 88
console.log(kim.age) // undefined

console.log('coconuts'.slice(4, 7)) // nut);
// slice() mengembalikan bagian dari string
console.log('coconut'.indexOf('u')) // 5);
// indexOf() mengembalikan index dari karakter yang dicari

console.log(' okay \n'.trim()) // okay); ')
// trim() menghapus spasi di awal dan akhir string

console.log(String(6).padStart(3, '0')) // 006);
// padStart() menambahkan karakter di awal string
//Dalam contoh ini, fungsi padStart() digunakan pada String 6 dengan panjang yang diinginkan
//sebesar 3 dan karakter yang akan ditambahkan sebagai 0.
//Ini berarti panjang dari string 6 harus menjadi 3 dan jika tidak, karakter 0 akan ditambahkan di depannya.
//Sehingga output dari code tersebut adalah string 006
//Perlu diingat, fungsi ini hanya berlaku untuk String, jadi jika ingin menggunakan fungsi ini pada number harus di convert terlebih dahulu menjadi String.

let sentence = 'Secretarybirds specialize in stomping'
let words = sentence.split(' ')
console.log(words) // ['Secretarybirds', 'specialize', 'in', 'stomping']);
console.log(words.join('. ')) // Secretarybirds. specialize. in. stomping);

console.log('LA'.repeat(3)) // LALALA);

let string = 'abc'
console.log(string.length) // 3
console.log(string[1]) // b

// Rest Parameters
console.log('<<< Rest Parameters >>>')

function max(...numbers) {
  let result = -Infinity //-Infinity adalah sebuah nilai yang digunakan untuk menyatakan negatif tak terhingga (negative infinity) dalam JavaScript.
  for (let number of numbers) {
    if (number > result) result = number
  }
  return result
}

console.log(max(4, 1, 9, -2)) // 9

let numbers = [5, 1, 7]
console.log(max(...numbers)) // 7

let word = ['never', 'fully']
console.log(['will', ...word, 'understand']) // ['will', 'never', 'fully', 'understand']

// The Math Object
console.log('<<< The Math Object >>>')

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI
  return { x: radius * Math.cos(angle), y: radius * Math.sin(angle) }
}

console.log(randomPointOnCircle(2)) // {x: 0.3667, y: 1.966});
console.log(Math.random()) // 0.36993729369714856);
console.log(Math.random()) // 0.7273670325524261);
console.log(Math.random()) // 0.4018076669890431);

console.log(Math.floor(Math.random() * 10)) // 2);

// Destructuring
console.log('<<< Destructuring >>>')

let { name } = { name: 'Faraji', age: 23 }

console.log(name) // Faraji );
