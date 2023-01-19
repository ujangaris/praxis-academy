/* 
. (titik) : cocok dengan karakter apapun (kecuali newline)
* : cocok dengan 0 atau lebih karakter sebelumnya
+ : cocok dengan 1 atau lebih karakter sebelumnya
? : cocok dengan 0 atau 1 karakter sebelumnya
{n} : cocok dengan n karakter sebelumnya
{n,} : cocok dengan n atau lebih karakter sebelumnya
{n,m} : cocok dengan antara n dan m karakter sebelumnya
^ : cocok dengan awal dari string
$ : cocok dengan akhir dari string
[...] : cocok dengan salah satu karakter yang ada di dalam kurung siku
[^...] : cocok dengan karakter apapun kecuali yang ada di dalam kurung siku
\w : cocok dengan karakter "word" (huruf, angka, atau underscore)
\W : cocok dengan karakter selain "word"
\d : cocok dengan karakter angka
\D : cocok dengan karakter selain angka
\s : cocok dengan karakter whitespace (spasi, tab, atau newline)
\S : cocok dengan karakter selain whitespace

*/
// Character classes
console.log('<<< Character classes >>>')
const string = 'brisket'
// const regex = /[abcd]/
const regex = /[a-d]/ //sama dengan [abcd]
const result = regex.exec(string)
console.log(result) //b

const string2 = 'chop'
// const regex2 = /[abcd-]/
const regex2 = /[-abcd]/ //sama dengan [abcd-]
const result2 = regex2.exec(string2)
console.log(result2) // c

// regex ^
console.log('<<< regex ^ >>>')
const string3 = 'bacon'
const string4 = 'chop'
const regex3 = /[^abc]/
const result3 = regex3.exec(string3)
console.log(result3) //o
const result4 = regex3.exec(string4)
console.log(result4) //h

// regex (.) titik
console.log('<<< regex (.) titik >>>')
const string5 = 'bacon'
const string6 = 'chop'
const regex4 = /b.c/
const result5 = regex4.exec(string5)
console.log(result5) // bac

// regex \d
console.log('<<< regex d >>>')
const string7 = 'sarah007'
const string8 = 'kelas-5'
// const regex5 = /[0-9]/
const regex6 = /\d/ //sama dengan /[0-9]/
const result6 = regex6.exec(string7)
console.log(result6) // b2
const result7 = regex6.exec(string8)
console.log(result7) // 5

// regex \D
console.log('<<< regex D >>>')
const string9 = 'sarah007'
const string10 = 'kelas-5'
// const regex7 = /[^0-9]/
const regex8 = /\D/ //sama dengan /[^0-9]/
const result8 = regex8.exec(string9)
console.log(result8) // s
const result9 = regex8.exec(string10)
console.log(result9) // k

// regex \w
console.log('<<< regex w >>>')
const string11 = '$5.28'
const string12 = '3D'
// const regex9 = /[a-zA-Z0-9_]/
const regex10 = /\w/ //sama dengan /[a-zA-Z0-9_]/
const result10 = regex10.exec(string11)
console.log(result10) //5
const result11 = regex10.exec(string12)
console.log(result11) //3
