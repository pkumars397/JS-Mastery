// Create function for creating multiple object

// function createObject(name,age,address,gender) {
//     const obj = {};
//     obj.firstName = name;
//     obj.Age = age;
//     obj.address = address;
//     obj.about= function() {
//         return `${this.firstName}is age of ${this.Age}`
//     }
//     obj.is18=function() {
//         return `${this.Age > 18}`;
//     }
//     return obj;
// }
// const p1 = createObject("prashant", 12, "Machhagra","male");
// console.log(p1);
// console.log(p1.about());
// console.log(p1.is18());


// const objMethods = {
//     about: function() {
//         return `${this.firstName}is age of ${this.Age}`
//     },
//     is18:function() {
//         return `${this.Age > 18}`;
//     }
// }
// //each time we create a method ,we have to add it in our createObject function
// function createObject(name,age,address,gender) {
//     const obj = {};
//     obj.firstName = name;
//     obj.Age = age;
//     obj.address = address;
//     obj.about = objMethods.about;
//     obj.is18 = objMethods.is18;
//     return obj;
// }

// const p1 = createObject("prashant", 12, "Machhagra", "male");
// console.log(p1);
// console.log(p1.is18())

// Proto chaining

// const obj1 = {
//     key1: "val1",
//     key2:"val2"
// }

// const obj2 = {
//     key3: "val3",
//     key4:"val4"
// }
// const obj2 = {}; //empty object
// const obj2 = Object.create(obj1) //establish connection with obj1(we set __proto__ to obj2)
// obj2.key3="val3"
// console.log(obj2.key1)//we want to achieve the obj first look obj2,if not find then look into obj1
// console.log(obj2) //__proto__ or [[prototype]] is our obj1.This proto is different from prototype in function
// console.log(obj2.__proto__)


// Now full optimized Object creation
// function createObject(name,age,address,gender) {
//     const obj = Object.create(objMethods);
//     obj.firstName = name;
//     obj.Age = age;
//     obj.address = address;
//     // obj.about = objMethods.about;
//     // obj.is18 = objMethods.is18;
//     return obj;
// }

// const obj1 = createObject("prashatn", 20, "mach", "male")
// console.log(obj1);
// console.log(obj1.about())


// Using Prototype to create Objects by do proto with prototype properties
// function createObject(name,age,address,gender) {
//     const obj = Object.create(createObject.prototype);
//     obj.firstName = name;
//     obj.Age = age;
//     obj.address = address;
//     obj.gender = gender;
//     return obj;
// }
// createObject.prototype.about = function () {
//     return `${this.firstName} is ${this.age} Old`
// }
// createObject.prototype.sing = function () {
//     return `la la la`
// }

// const p1 = createObject("prashatn", 23, "machagra","male")
// console.log(p1);
// console.log(p1.sing())
// console.log(p1.about())
// prototype is free object to each fn and proto is refrence to other object.

