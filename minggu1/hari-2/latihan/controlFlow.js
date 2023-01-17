// Block statement
/* var x = 1
while (x < 10) {
  x++
}
console.log(x) */

var x = 1
{
  var x = 2
}
console.log(x) // 2

// Conditional statements
let hour = 12
if (hour < 18) {
  greeting = 'Good day'
} else {
  greeting = 'Good evening'
}
console.log(greeting)

console.log('<<===falsy values in JavaScript==>>')
// falsy values in JavaScript
// false
if (false) {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika false')
}
// null
if (null) {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika null')
}
// undefined
if (undefined) {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika undefined')
}

// 0
if (0) {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika 0')
}

// NaN
if (NaN) {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika NaN')
}

// ""
if ('') {
  console.log('ini tidak dijalankan')
} else {
  console.log('ini yang dijalankan jika ""')
}

// switch statement

const buah = 'jeruk'
switch (buah) {
  case 'apel':
    console.log('Apel adalah buah merah')
    break
  case 'mangga':
    console.log('Mangga adalah buah kuning')
    break
  case 'jeruk':
    console.log('Jeruk adalah buah oranye') //jeruk adalah orange
    break
  default:
    console.log('Saya tidak suka buah')
    break
}

// Exception handling statements
//Exception types

if (x == '') throw 'Terjadi kesalahan'
