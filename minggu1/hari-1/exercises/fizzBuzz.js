//fizz buzz
// 1. Jika angka habis dibagi 3, maka tampilkan "Fizz"
// 2. Jika angka habis dibagi 5, maka tampilkan "Buzz"
// 3. Jika angka habis dibagi 3 dan 5, maka tampilkan "FizzBuzz"
// 4. Jika angka tidak habis dibagi 3 dan 5, maka tampilkan angka itu sendiri

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //ini habis dibagi 3 & 5
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    //ini habis dibagi 3
    console.log('Fizz')
  } else if (i % 5 === 0) {
    //ini habis dibagi 5
    console.log('Buzz')
  } else {
    console.log(i) // ini tidak habis dibagi 3 dan 5
  }
}

// for (let i = 1; i < 101; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz')
//   } else if (i % 3 === 0) {
//     console.log('Fizz')
//   } else if (i % 5 === 0) {
//     console.log('Buzz')
//   } else {
//     console.log(i)
//   }
// }
