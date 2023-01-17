// continue
/* let i = 0 // Inisialisasi variabel i dengan nilai 0
let n = 0 // Inisialisasi variabel n dengan nilai 0

while (i < 5) {
  // Perulangan dimulai dengan kondisi i kurang dari 5
  i++ // increment i setiap iterasi

  if (i === 3) {
    // jika i sama dengan 3,
    continue // lewati iterasi saat ini dan melanjutkan ke iterasi berikutnya
  }
  n += i // jika tidak maka tambahkan i ke n
  console.log(n) // cetak n ke console
} */
// Output: 1, 3, 7, 12

// contoh 2
console.log('<<==contoh 2==>>')
// Kode ini mendeklarasikan dua variabel, i dan j, dengan nilai awal masing-masing 0 dan 10.
// Kemudian masuk ke dalam perulangan while yang akan berjalan selama nilai dari i kurang dari 4.
// Dalam perulangan while ini, nilai dari i akan dicetak ke console, i akan ditambah 1, dan perulangan while lain akan berjalan.
let i = 0
let j = 10
checkiandj: while (i < 4) {
  console.log(i)
  i += 1
  // Perulangan while dalam ini akan berjalan selama nilai dari j lebih besar dari 4.
  // Dalam perulangan while dalam ini, nilai dari j akan dicetak ke console, j akan dikurangi 1 dan akan di cek apakah nilai dari j adalah genap atau tidak dengan menggunakan modulus.
  checkj: while (j > 4) {
    console.log(j)
    j -= 1
    if (j % 2 === 0) {
      continue checkj
    }
    // Jika genap maka akan lanjut ke perulangan selanjutnya dan jika tidak maka akan dicetak nilai j dan " is odd" .
    // setelah itu akan dicetak nilai dari i dan j
    console.log(j, ' is odd.')
  }
  console.log('i = ', i)
  console.log('j = ', j)
}

// output
// 0
// 10
// 9
// 9 is odd.
// 8
// 8 is odd.
// 7
// 7 is odd.
// 6
// 6 is odd.
// 5
// 5 is odd.
// i = 1
// j = 4
// 1
// 4
// 3
// 3 is odd.
// 2
// 2 is odd.
// 1
// 1 is odd.
// i = 2
// j = 4
// 2
// 4
// 3
// 3 is odd.
// 2
// 2 is odd.
// 1
// 1 is odd.
// i = 3
// j = 4
// 3
// 4
// 3
// 3 is odd.
// 2
// 2 is odd.
// 1
// 1 is odd.
// i = 4
// j = 4
