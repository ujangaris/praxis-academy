function updateBrand(obj) {
  // Langkah 1 : ubah nilai dari properti brand dari obj menjadi "Toyota"
  obj.brand = 'Toyota'
  // Langkah 2 : atur nilai dari obj menjadi null
  obj = null
}
// Langkah 3 : mendefinisikan objek car
const car = {
  brand: 'Honda',
  model: 'Civic',
  year: 2019,
}
// Langkah 4 : mencetak nilai awal dari car.brand ke console, yaitu "Honda"
console.log(car.brand) // "Honda"
// Langkah 5 : memanggil fungsi updateBrand dan mengirimkan objek car sebagai argumen
updateBrand(car)
// Langkah 6 : mencetak nilai yang diubah dari car.brand ke console, yaitu "Toyota"
console.log(car.brand) // "Toyota"

// Returning a formatted number
console.log('<<== Returning a formatted number ==>>')
function padZeros(num, totalLen) {
  // num diubah menjadi string dengan menggunakan metode toString().
  let numStr = num.toString()
  // jumlah digit 0 yang harus ditambahkan dihitung dengan mengurangi panjang dari numStr dengan totalLen.
  const numZero = totalLen - numStr.length
  // perulangan for digunakan untuk menambahkan jumlah digit 0 yang diperlukan sebelum numStr dengan menambahkan digit 0 pada awal numStr.
  for (let i = 1; i <= numZero; i++) {
    numStr = '0' + numStr
  }
  //  numStr yang sudah ditambahkan dengan digit 0 di return.
  return numStr
}

console.log(padZeros(123, 5)) // 00123);
