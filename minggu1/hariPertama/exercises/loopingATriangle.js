// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let hash = '#'
// for (let i = 0; i < 7; i++) {
//   console.log(hash)
//   hash += '#'
// }

// for (var i = 0; i <= 7; i++) {
//   console.log('#'.repeat(i))
// }

// 1. Buat variabel str dengan nilai string kosong
// 2. Buat looping dengan kondisi i < 7
// 3. Tambahkan nilai str dengan string '#'
// 4. Tampilkan nilai str
let str = ''
for (let i = 0; i < 7; i++) {
  str += '#'
  console.log(str)
}
