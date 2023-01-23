function Alpha() {}

// Method isAlpha di prototype Alpha, yang menerima parameter letter
// dan menggunakan regular expression untuk memeriksa apakah letter adalah sebuah huruf (besar atau kecil)
// dan mengembalikan nilai Boolean yang menunjukkan apakah itu benar atau tidak
Alpha.prototype.isAlpha = function (letter) {
  return /^[a-zA-Z]$/i.test(letter)
}

function Vowel() {}
Vowel.prototype = Object.create(Alpha.prototype)
Vowel.prototype.constructor = Vowel

Vowel.prototype.isVowel = function (letter) {
  return /^[aeiuoyAEIOUY]$/i.test(letter)
}

function Consonant() {}
Consonant.prototype = Object.create(Alpha.prototype)
Consonant.prototype.constructor = Consonant

Consonant.prototype.isConsonant = function (letter) {
  return /^[^aeiuoyAEIOUY]$/i.test(letter)
}

function processData(input) {
  var a = new Alpha()
  console.log(`'${input[0]}' is ${a.isAlpha(input[0]) ? `` : `not `}a letter.`)

  var b = new Vowel()
  console.log(
    `'${input[1]}' is ${
      b.isAlpha(input[1])
        ? `a letter ${b.isVowel(input[1]) ? `and` : `but not`} a vowel.`
        : 'not a letter.'
    } `
  )

  var c = new Consonant()
  console.log(
    `'${input[2]}' is ${
      c.isAlpha(input[2])
        ? `a letter ${c.isConsonant(input[2]) ? `and` : `but not`} a consonant.`
        : 'not a letter.'
    } `
  )
}

console.log(processData(['a', 'e', 'd']))
console.log(processData(['x', 'o', 'i']))
console.log(processData(['1', '4', '5']))
console.log(processData(['ascii', 'code', '']))

// process.stdin.resume()
// process.stdin.setEncoding('ascii')
// _input = ''
// process.stdin.on('data', function (input) {
//   _input += input
// })

// process.stdin.on('end', function () {
//   processData(_input.split(''))
// })

// process.stdin.on('end', function () {
//   processData(_input.split(''))
// })
