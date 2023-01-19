var a = -5 // deklarasi dan inisialisasi variabel a dengan nilai -5
var b = -2 // deklarasi dan inisialisasi variabel b dengan nilai -2
var c = -6 // deklarasi dan inisialisasi variabel c dengan nilai -6
var d = 0 // deklarasi dan inisialisasi variabel d dengan nilai 0
var f = -1 // deklarasi dan inisialisasi variabel f dengan nilai -1

// pernyataan kondisional if-else untuk mengecek nilai terbesar
if (a > b && a > c && a > d && a > f) {
  // jika a lebih besar dari b, c, d, dan f
  console.log(a) // cetak nilai a ke console
} else if (b > a && b > c && b > d && b > f) {
  // jika b lebih besar dari a, c, d, dan f
  console.log(b) // cetak nilai b ke console
} else if (c > a && c > b && c > d && c > f) {
  // jika c lebih besar dari a, b, d, dan f
  console.log(c) // cetak nilai c ke console
} else if (d > a && d > c && d > b && d > f) {
  // jika d lebih besar dari a, b, c, dan f
  console.log(d) // cetak nilai d ke console
} else {
  // jika tidak ada yang lebih besar
  console.log(f) // cetak nilai f ke console
}


