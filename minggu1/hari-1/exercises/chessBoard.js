// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chessboard.
//
// Passing this string to console.log should show something like this:
//
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
//
/* let size = 8
let board = ''

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += ' '
    } else {
      board += '#'
    }
  }
  board += '\n'
} */

// 1. Variabel "size" digunakan sebagai ukuran papan catur yang akan dicetak.
// 2. Variabel "board" digunakan untuk menyimpan hasil cetakan.
// 3. Dalam perulangan pertama (let y = 0; y < size; y++), perulangan akan berjalan sebanyak "size" kali dengan nilai awal y = 0.
// 4. Dalam perulangan kedua (let x = 0; x < size; x++), perulangan akan berjalan sebanyak "size" kali dengan nilai awal x = 0.
// 5. Syntax ((x + y) % 2 === 0) ? ' ' : '#' adalah operator ternary yang digunakan untuk mempermudah penulisan kondisional. Jika hasil dari (x + y) % 2 adalah sama dengan 0, maka akan ditambahkan karakter spasi (' ') ke dalam variabel "board", jika tidak, maka akan ditambahkan karakter pagar ('#') ke dalam variabel "board".
// 6. Setelah perulangan kedua selesai, maka akan ditambahkan karakter baris baru ('\n') ke dalam variabel "board".
// 7. Hasil akhir dari cetakan akan ditampilkan di console.log(board).
// 8.Kode ini akan mencetak pola seperti papan catur dengan ukuran 8x8, dengan karakter spasi untuk posisi genap dan karakter pagar untuk posisi ganjil.
let size = 8
let board = ''

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    board += (x + y) % 2 === 0 ? ' ' : '#'
  }
  board += '\n'
}
console.log(board)
