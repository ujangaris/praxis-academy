let People = function (person, age) {
  // constructor function dengan parameter person dan age
  this.person = person // properti person dari objek yang dibuat
  this.age = age // properti age dari objek yang dibuat
  this.info = function () {
    console.log(this) // menampilkan objek People
    setTimeout(() => {
      // menampilkan string yang berisi properti person dan age setelah delay 3 detik
      console.log(this.person + ' is ' + this.age + ' years old')
    }, 3000)
  }
}
let person1 = new People('John', 25) // membuat objek baru dari People dengan nama John dan usia 25
person1.info() // memanggil method info pada objek person1

// Output:  People { person: 'John', age: 25, info: [Function] }

// Saat function separated di panggil akan menghasilkan output yang sama dengan function info.
let separated = person1.info.bind(person1)
separated()
