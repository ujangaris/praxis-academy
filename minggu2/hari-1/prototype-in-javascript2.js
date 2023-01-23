// TutorialsTeacher
console.log('<<< TutorialsTeacher >>>')
function Student() {
  this.name = 'John'
  this.gender = 'Male'
}

let studObj1 = new Student()
studObj1.age = 12
console.log('studObj1 ==> ', studObj1)
console.log('studObj1.age ==> ', studObj1.age)

// use prototype property a function
Student.prototype.age = 10

let studObj2 = new Student()
console.log('studObj2 ==> ', studObj2)
console.log('studObj2.age ==> ', studObj2.age)
let studObj3 = new Student()
console.log('studObj3 ==> ', studObj3)
console.log('studObj3.age ==> ', studObj3.age)

// Object's Prototype
console.log("<<< Object's Prototype >>>")

let studObj4 = new Student()
Student.prototype.sayHi = function () {
  console.log('Hi')
}

let studObj5 = new Student()
let proto = Object.getPrototypeOf(studObj5) // get the prototype of studObj5
console.log(proto) // { sayHi: [Function] }
console.log(proto.constructor) // [Function: Student]
