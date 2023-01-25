//  Ketiga pustaka tersebut menyediakan fungsi yang dapat digunakan untuk melakukan operasi dasar seperti map, filter, dan reduce. Contoh implementasi menggunakan Ramda:
{
  const R = require('ramda')
  const numbers = [1, 2, 3, 4, 5]
  const double = R.map((x) => x * 2)
  console.log(double(numbers)) // [2, 4, 6, 8, 10]
}

// Contoh implementasi menggunakan Underscore:
{
  const _ = require('underscore')
  const numbers = [1, 2, 3, 4, 5]
  const double = _.map(numbers, (x) => x * 2)
  console.log(double) // [2, 4, 6, 8, 10]
}

// Contoh implementasi menggunakan Lodash:
{
  const _ = require('lodash')
  const numbers = [1, 2, 3, 4, 5]
  const double = _.map(numbers, (x) => x * 2)
  console.log(double) // [2, 4, 6, 8, 10]
}
