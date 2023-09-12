// new keyword
// 1.) this={} creates empty object by itself
// 2.) return {} by itself
// 3.)sets proto to prototype object(in which we stored our methods)

// constructor functions
// function CreateObject(name,age,address,gender="male") {
//     // const obj = Object.create(createObject.prototype);
//     this.firstName = name;
//     this.Age = age;
//     this.address = address;
//     this.gender = gender;
//     // return obj;
// }
// CreateObject.prototype.about = function () {
//     return `${this.firstName} is ${this.Age} Old`
// }
// CreateObject.prototype.sing = function () {
//     return `la la la`
// }
// const p1 = new CreateObject("prashant", 20, "Machhagra")
// console.log(p1)
// console.log(p1.about())

// for (let key in p1) {
//     console.log(key)//will give key of object and also key of prototype object
// }

// for (let key in p1) {
//     if (p1.hasOwnProperty(key)) {
//         console.log(key)//only give property of main object not methods of our prototype object.
//     }
// }