let n = 0
let x = 0
while (n < 3) {
  n++
  x += n
}
console.log(x)

// Kode ini membuat 2 variabel yaitu n dan x dengan nilai awal 0.
//Kemudian masuk ke dalam perulangan while dengan kondisi n kurang dari 3.
// Dalam perulangan ini, n akan ditambah 1 (n++) dan nilai n akan ditambahkan ke variabel x (x += n).
//Proses ini diulangi selama n masih kurang dari 3.
//Setelah perulangan selesai, nilai dari x akan dicetak ke console menggunakan console.log(x).
//Dengan kondisi ini, maka akan dapat dilihat bahwa n akan bernilai 1,2,3 dan x akan bernilai 1+2+3 = 6

// kode diatas sama dengan kode dibawah ini
// let x = 0
// for (let n = 1; n <= 3; n++) {
//   x += n
// }
// console.log(x)
