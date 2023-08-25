// Its create object .Very easy as compare to function method object creation

// class Animal{
//     constructor(nam,age){
//         this.name = nam;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     isCute() {
//         return this.age>1
//     }
// }
// const a1 = new Animal("cow", 10)
// console.log(a1)
//  //isme proto khud se class ke methods set ho jaa rhe .
// console.log(Object.getPrototypeOf(a1))
// console.log(a1.eat(),a1.isCute())

//child class of Animal ,will inheritate everything from Parent class.
// class Dog extends Animal{

// }
// const d0 = new Dog("dugu", 2); // first go to Dog then find there is no constructor method in Dog ,so will go to Parent.
// console.log(d0)

// class Dog extends Animal{
//     constructor(n, a, speed) {
//         super(n, a)
//         this.speed = speed
//     }
//     eat() {
//         return `Modified eat of ${this.name} `
//     }
//     run() {
//         return `${this.name} is running at ${this.speed}`
//     }
// }
// const d1 = new Dog("tommy", 5,25)//taking constructor from Base class.
// console.log(d1)
// console.log(d1.run())
// console.log(d1.eat())

// Getter and Setter
// class person{
//     constructor(fn, ln) {
//         this.firstName = fn;
//         this.lastName = ln;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(value) {
//         const [fName, lName] = value.split(" ");
//         this.firstName = fName;
//         this.lastName = lName;
//     }
// }

// const p1 = new person("prashant", "Kumar")
// console.log(p1);
// console.log(p1.fullName) //notice we dont have to call our method by parenthesis.
// // p1.firstName = "binu"
// // p1.lastName = "singh";
// // console.log(p1.fullName)//changed our fName and lName
// p1.fullName="binu singh"
// console.log(p1)


// Static Method And Property
// class Person{
//     constructor(n, a) {
//         this.name = n;
//         this.age = a;
//     }
//     static m() {
//         return `static method can only be access by class name`
//     }
//     static i = 10;
// }
// const p1 = new Person("prashant", 25)
// // console.log(p1.m())//will give error
// console.log(Person.i,Person.m())

