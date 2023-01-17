// Breaking to a label
let x = 0
let z = 0
labelCancelLoops: while (true) {
  console.log('Outer loops: ', x)
  x += 1
  z = 1
  while (true) {
    console.log('Inner loops: ', z)
    z += 1
    if (z === 10 && x === 10) {
      break labelCancelLoops
    } else if (z === 10) {
      break
    }
  }
}

/* 
ode di atas menggunakan dua perulangan "while (true)" yang berbeda, yaitu "labelCancelLoops" dan "inner loop". 
Perulangan "labelCancelLoops" akan terus berjalan selama kondisi "true" dan mengeksekusi perintah di dalam perulangan, 
sementara perulangan "inner loop" juga akan terus berjalan selama kondisi "true" dan mengeksekusi perintah di dalam perulangan.

Pada perulangan "labelCancelLoops" :

Variabel x di-declare dan di-initialize dengan 0.
Variabel z di-declare dan di-initialize dengan 0.
Perulangan akan terus berjalan selama kondisi "true"
Setiap kali perulangan dijalankan, variabel x akan ditambah 1 dan ditampilkan di console log dengan teks "Outer loops: "
Setelah itu, inner loop akan dijalankan.
Pada perulangan "inner loop":

Setiap kali perulangan dijalankan, variabel z akan ditambah 1 dan ditampilkan di console log dengan teks "Inner loops: "
Kemudian akan dilakukan pengecekan dengan if-else:
Jika z sama dengan 10 dan x sama dengan 10, maka akan mengeksekusi perintah break labelCancelLoops, 
yang akan menghentikan eksekusi dari kedua perulangan.
Jika hanya z sama dengan 10, maka akan mengeksekusi perintah break, 
yang hanya akan menghentikan eksekusi perulangan inner loop saja.
Secara keseluruhan, perulangan akan terus berjalan selama x dan z kurang dari 10. 
Jika keduanya sama dengan 10, maka akan mengeksekusi perintah break labelCancelLoops yang akan menghentikan eksekusi dari kedua perulangan. Namun jika hanya z sama dengan 10, maka hanya inner loop yang akan dihentikan.
Code ini akan mengeluarkan output dari perulangan inner dan outer dengan format : "Outer loops: ", x dan "Inner loops: ", z. Namun output akan berhenti jika x dan z sama dengan 10.

*/
