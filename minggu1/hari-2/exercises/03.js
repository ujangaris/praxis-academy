var num1 = 0 //variabel untuk menyimpan angka pertama
var num2 = -1 //variabel untuk menyimpan angka kedua
var num3 = 4 //variabel untuk menyimpan angka ketiga

var temp //variabel untuk menyimpan nilai sementara saat penukaran

// mengurutkan angka menggunakan pernyataan if-else
if (num1 > num2) {
  //membandingkan angka pertama dengan angka kedua
  temp = num1 //menyimpan angka pertama dalam variabel sementara
  num1 = num2 //menukar angka pertama dengan angka kedua
  num2 = temp //menyimpan angka kedua dalam posisi angka pertama
}

if (num2 > num3) {
  //membandingkan angka kedua dengan angka ketiga
  temp = num2 //menyimpan angka kedua dalam variabel sementara
  num2 = num3 //menukar angka kedua dengan angka ketiga
  num3 = temp //menyimpan angka ketiga dalam posisi angka kedua
}

if (num1 > num2) {
  //membandingkan angka pertama dengan angka kedua lagi
  temp = num1 //menyimpan angka pertama dalam variabel sementara
  num1 = num2 //menukar angka pertama dengan angka kedua
  num2 = temp //menyimpan angka kedua dalam posisi angka pertama
}

alert('Angka yang telah diurutkan: ' + num1 + ', ' + num2 + ', ' + num3)
// Kode ini mendefinisikan tiga variabel num1, num2, dan num3 dan memberikan nilai 5, -3, dan 4 masing-masing. Kemudian menggunakan pernyataan if-else dan variabel sementara temp untuk mengurutkan tiga angka tersebut secara manual.
// Pertama, kita membandingkan num1 dengan num2, jika num1 lebih besar dari num2, maka kita menukar num1 dengan num2 menggunakan variabel sementara temp. Kemudian kita bandingkan num2 dengan num3, jika num2 lebih besar dari num3, maka kita menukar num2 dengan num3 menggunakan variabel sementara temp. Terakhir, kita bandingkan num1 dengan num2 lagi, jika num1 lebih besar dari num2, maka kita menukar num1 dengan num2 menggunakan variabel sementara temp. Kemudian menampilkan kotak peringatan yang menunjukkan hasil dari pengurutan dengan menggabungkan tiga angka yang telah diurutkan menjadi satu string.

// Sekarang kode in
