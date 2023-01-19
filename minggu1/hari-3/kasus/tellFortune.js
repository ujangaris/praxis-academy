// Fungsi ini mengambil 4 argumen:
function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
  // Menggunakan template literals untuk mencetak pesan
  console.log(
    'You will be a ' +
      jobTitle +
      ' in ' +
      geoLocation +
      ', and married to ' +
      partnerName +
      ' with ' +
      numChildren +
      ' kids.'
  )
}

tellFortune(3, 'Ujang', 'Indonesia', 'programmer') // You will be a programmer in Indonesia, and married to Ujang with 3 kids.
tellFortune(2, 'Sandi', 'paris', 'cheff') // You will be a cheff in paris, and married to Sandi with 2 kids.
tellFortune(1, 'Ridwan', 'jordania', 'actor') // You will be a actor in jordania, and married to Ridwan with 1 kids.
