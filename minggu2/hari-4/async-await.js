// Async/await adalah fitur baru di JavaScript yang memungkinkan kita menuliskan kode asynchronous seperti kode synchronous.
// Fitur ini dapat digunakan dengan menandai sebuah fungsi dengan kata kunci "async" dan menggunakan kata kunci "await" di dalam fungsi tersebut untuk menunggu sebuah proses selesai sebelum melanjutkan eksekusi kode.

// Contoh penggunaan async/await:

async function getData() {
  let data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data diterima')
    }, 1000)
  })
  console.log(data)
}

getData()

// contoh sederhana Async/Await

// async function getData() {
//   let response = await fetch('http://example.com')
//   let data = await response.json()
//   console.log(data)
// }
// getData()
