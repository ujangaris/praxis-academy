const data = required('../hari-5/journal.js')
console.log(data)

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

function tableFor(event, journal) {
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
// → [76, 9, 4, 1]

// Array Loops
console.log('<<< Array Loops >>>')
for (let entry of journal) {
  console.log(`${entry.events.length} events.`)
}
