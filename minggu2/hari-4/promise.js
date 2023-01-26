// Promise adalah sebuah objek yang merepresentasikan sebuah proses yang sedang berjalan dan akan selesai di masa yang akan datang.
// Promises memungkinkan kita untuk menuliskan kode yang lebih terstruktur dan mudah dibaca ketika bekerja dengan proses yang memakan waktu lama.

// Contoh penggunaan promise:
// Re-resolve a promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = 'Data diterima'
    resolve(data)
  }, 1000)
})

promise.then((data) => {
  console.log(data)
})

let promise2 = new Promise(function (resolve, reject) {
  resolve(1) //`resolve` akan menjalankan fungsi `then`
  setTimeout(() => resolve(2), 1000) // tidak akan dijalankan karna sudah resolve
})

promise2.then(console.log) //1

// Delay with a promise
// Delay dengan sebuah promise
function delay(ms) {
  //  Fungsi yang disebut delay dengan parameter ms
  return new Promise((resolve, reject) => {
    //  membuat promise baru dengan fungsi resolve dan reject
    setTimeout(() => {
      //  fungsi setTimeout yang digunakan untuk menunda eksekusi
      resolve() //  resolve promise
    }, ms) //  menunda selama ms milidetik
  })
}
delay(3000).then(() => console.log('runs after 3 seconds')) // 6. memanggil fungsi delay dengan parameter 3000 ms dan mengeksekusi console.log
// note:  Metode then() digunakan untuk menentukan apa yang harus dilakukan setelah promise selesai. Dalam kasus ini, akan di log pesan ke console.
