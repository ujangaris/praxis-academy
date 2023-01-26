// Callback adalah sebuah mekanisme di JavaScript yang memungkinkan kita untuk menjalankan sebuah fungsi setelah sebuah proses selesai dilakukan.
// Contoh penggunaan callback adalah ketika kita ingin mengambil data dari server, kita dapat menggunakan callback untuk menjalankan sebuah fungsi setelah data berhasil diambil.

// Contoh penggunaan callback:
console.log(`<<< Callback set timer >>>`)
function getData(callback) {
  // simulasikan proses pengambilan data dari server
  setTimeout(() => {
    let data = 'ini callback set timer 3detik - Data dari server'
    callback(data)
  }, 1000)
}

// gunakan function getData dan tampilkan data di console
getData((data) => {
  console.log(data)
})

console.log(`<<< Array.prototype.filter >>>`)
// Array.prototype.filter - digunakan untuk memfilter elemen-elemen array yang sesuai dengan kondisi yang ditentukan
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] //inisialisasi array numbers dengan 9 angka
// callback function yang digunakan adalah sebuah arrow function yang menerima sebuah parameter "number".
let evenNumbers = numbers.filter((number) => {
  //inisialisasi variabel evenNumbers dengan hasil filter dari array numbers
  return number % 2 === 0 // callback function yang digunakan adalah arrow function yang mengembalikan true jika number mod 2 sama dengan 0 (yaitu jika number adalah bilangan genap) dan false jika tidak
})
console.log(evenNumbers) //mencetak angka genap dari array numbers yaitu [2,4,6,8]
