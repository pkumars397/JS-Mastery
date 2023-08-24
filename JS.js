// "use strict";
// String is Immutable,Original string doesn't changes

// let n = "praShant "
// let newName = n.trim();
// console.log(newName)
// console.log(n.length)
// console.log(n)
// n = n.trim()
// console.log(n)

// let low = n.toLowerCase()[3]
// console.log(low)

// let up = n.toUpperCase()[1]
// console.log(up)

// typeof
// let a = 12;
// console.log(typeof a)

// Number to String,it does not changes original number;

// let a = 34;
// console.log(typeof a);
// console.log(typeof String(a))
// console.log(typeof a.toString())
// console.log(typeof `${a}`)
// a = 34 + "";
// console.log(typeof a)

// String to number
// let a = "34"
// a = +"34";
// let b = Number(a);
// console.log(typeof a)
// console.log(typeof b)

// Concatenate
// let s1 = "prash", s2 = "ant";
// console.log(s1.concat(s2))
// console.log(s1)
// let s1 = "12", s2 = "12";
// console.log(+s1 + +s2)

// console.log(2+ +"2")

// Template String
// let n = 22;
// console.log(`${n}`)

// undefined
// let a
// var b
// console.log(typeof a,typeof b)
// a = 12;
// console.log(a)

// const b;  Error
// console.log(typeof b)

// Null
// let a = null;
// console.log(a,typeof a) //typeof null is object(error in js)
// a = 12;//can be reassign;
// console.log(a)

// BigInt
// let a = BigInt(123);
// console.log(a)
// let b = 233n; //two way of declaring BigInt
// console.log(a+b)
// console.log(Number.MAX_SAFE_INTEGER)

// == and ===
// let a = 12;
// let b = "12";
// console.log(a == b + " ", a === b)
// console.log(a!=b+" ",a!==b)
// let a = true;
// let b = "true";
// console.log(a==b) // false

// Prompt
// let usergues = +prompt("enter the number")
// console.log(typeof usergues,usergues)

// let i = 1;
// while (i <= 10) {
//     if (i == 9) {
//         i++
//         continue;
//     }
//     console.log(i)
//     i++
// }

// unshift and shift(they are just like push nd pop ,bt faster than push,pop)
// let a = [1, 2, 3, 4];
// a.unshift(5)
// console.log(a)
// console.log(a.shift());
// console.log(a)

// Primitive nd reference data type
// let a = 2;//stored in the stack
// let b = a;//stored in stack
// console.log(a, b);
// a++;
// console.log(a, b)

// let arr1 = [1, 23, 4];
// let arr2 = arr1; //clone array.
// console.log(arr1, arr2)
// arr1.push(5)
// console.log(arr1,arr2) //both will change becoz arr1 stored in heap memory.and arr1 ,arr2 in stack refers to address of arr1.

// Clone array
// let a = [1, 2, 4, 5];
// let b=[3,4]
// let a2 = a.slice(0).concat([1,2]) //different array will not be same as a
// let a3 = [].concat(a,1,4,b)//different array.
// let a4=[...a]
// console.log(a, a2,a3,a4)
// a.push(3);
// console.log(a, a2)
// Spread Operator Efficient
// let a5 = [...a,10, ...a,3, ...a,6,7]
// console.log(a5)

// const used for array declaration convention
// const a = [1, 2, 3]  cant reassign but can be done all operations of array
// a.push(3)
// console.log(a)

// For of gives val of array
// let a = [2, 46, 1, 3];
// for (let val of a) {
//     console.log(val)
// }

// for in loop its gives the index of array
// for (let index in a) {
//     console.log(index)
// }

// Array Destructuring
// let a = [1, 2, 3,4];
// let [a1, b1, c1,d] = a; //automatically map the value of array to variable
// console.log(a1, b1, c1, d)
// let [a2, ,b, ...newArray] = a; //can create array from remaining elements of array
// // can skip the certain value of array in our variables
// console.log(a2,b,newArray)

 

// Object store key value pair,automatically store key as string.

// const obj = {
//     name: "prashant",
//     age: 24,
//     "full name":"prashant kumar"
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj["age"])
// obj.hobby=["listening","playing"]
// console.log(obj)
// let key = "gender"
// obj[key] = "male";
// console.log(obj)

//iterating through object
// for (let key in obj) {
//     console.log(obj[key])
// }
// for (let key of Object.keys(obj)) {
//     console.log(obj[key])
// }
// for (let val of Object.values(obj)) {
//     console.log(val)
// }

// console.log(Object.keys(obj))//gives the keys of object
// console.log(Object.entries(obj))

// Computed Properties
// const key1 = "objkey1";
// const key2 = "objkey2";
// const val1 = "myvalue1";
// const val2 = "myvalue2";
// const obj = {
//  [key2]:"val2"
// }

// obj[key1] = val1;
// console.log(obj)

// Spread Operator Advance
// let a1 = [1, 2, 3];
// let b1 = [2, 3, 4, 5];
// let newArray = [...a1, ...b1,3]
// console.log(newArray)

// const obj1 = {
//     key1: "prashant",
//     key2:21,
// }
// const obj2 = {
//     key3: 3,
//     key4: 4,
//     key1:6
// }

// let newObject1 = { ...obj1, ...obj2 }//here key1 repeating so key1 last value will updated .
// let newObject2 = { ...obj2, ...obj1, key5: 5 }//can insert the key:value like Array
// let newObject3={..."abcd"} //will spread the string into key value by indices and val at indices
// let newObject4 = { ...[1, 2, 3, 4] }//will spread array too
// // let arr2=Math.max(...a1)
// console.log(newObject1)
// console.log(newObject2)
// console.log(newObject3)
// console.log(newObject4)
// console.log(arr2)

// Object Destructuring
// const obj = {
//     singer: "Linkin Park",
//     famousSong: "In the End",
//     year: 1990,
//     anotherFamousSong:"Numb"
// }

// let { singer, famousSong , anotherFamousSong} = obj//should be name of keys
// console.log(singer)
// console.log(famousSong)//only maps through the key present in the object.
// console.log(anotherFamousSong)

// let { singer: artist, famousSong: song1, ...remainObj } = obj
// console.log(artist)
// console.log(song1) //keys stored in a varible name
// console.log(remainObj)//will create obj for remaining key value pair.

// Objects in Array
// let arr = [{ userId: 1, name: "prashant", age: 24 }, { userId: 2, name: "akash", age: 22 }, { userId: 3, name: "anand", age: 21 }]
// for (let val of arr) {
//     console.log(val.name)
// }

// Nested destructuring in Array
// let [{name:userName,age}, ,c ] = arr;
// console.log(userName)
// console.log(age)
// console.log(c)

// Undefined + undefined = NaN or number+undefined =NaN

// function expression and Arrow function
// const even = function (n) {
//     return n % 2 === 0;
// }

// const odd = (n) => (n%2===1) //single parameter and single return
//     // return n % 2 === 1;
// console.log(odd(3))

// Hoisting(declaration to top)
// a=10
// console.log(a)
// var a;

// test();
// function test() {
//     console.log("test")
// }

// test2()
// const test2=function() {
//     console.log("test")
// }

// Functions inside another functions
// function test() {
//     var myName = function () {
//         console.log("Prashant Kumar")
//     }
//     var myFather = () => {
//         console.log("ALok SIngh")
//     }
//     console.log("test")
//     myName();
//     myFather()
// }
// const newf = () => {
//   test()
// }
// test();
// newf()

// Lexical Scope(Keep looking for variable value in first itself,then in function where that function is written,first in it ,then above function)
//   const val=1
// function test() {
//     const val = 2;
//     const test1 = function () {
//         const val=4
//         console.log("inside test1",val)
//     }
//     console.log(val)
//     test1()
// }
// console.log(val)
//  test()

// Block Scope(let/const) And var is Function Scope
// {
//     let val = 10
//     console.log(val)
// }
// {
//     let val = 20
//     console.log(val)
// }
// let val = 30;
// console.log(val)
// const val=30
// function test() {
//     if (1) { //block so can't be access
//         let val = 23;
//     }
//     // const val = 2;
//     const test1 = function () {
//         // const val=4
//         console.log("inside test1",val)
//     }
//     console.log(val)
//     // test1()
// }
// test();

// default Parameter
// function add(a, b /*= 0*/) { //if b argument is nothing then default b
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }
// console.log(add(4))

// rest parameter Remaining parameter into a parameter as array
// function add(a, b, ...c) {
//     console.log(`c is ${c}`)
// }
// add(1, 2, 3, 4, 5)

// Parameter destructuring
// const person = {
//     name:"pk",
//     age:24
// }
// function test({ name, age }) {
//     console.log(name);
//     console.log(age)
// }
// test(person)

// Callback Function (passing another function as argument of other function and calling that function)
// function test2(name) {
//     console.log("inside test2")
//     console.log(`${name}`)
// }
// function test(a) {
//     console.log("inside test")
//     console.log(a)
//     test2("prashant")
// }
// test(test2)

// function can return anything,i.e int,string,object and even function;
// function myFunc() {
//     console.log("hello")
//     function hello() {
//         console.log("hello world")
//         return "hello"
//     }
    
//     return hello;
// }
// function hello() {
//     console.log("hello world")
// }
// console.log(myFunc()())

// Higher Order function >> argument as function and return a function.

// ARRAY METHODS

// forEach() method=>it is like callback function it takes some function as arugument and call it for every value of array.
// annonymous function can also be created inside the forEach();
// let arr = [2, 3, 4, 5, 6]
// function multi2(num) {
//     console.log(num * 2);
// }
// arr.forEach(multi2) //forEach as callback automatically pass argument and call.
// arr.forEach(function (num, index) {
//     console.log(`index ${index} value ${num*2}`)
// })
//  //we can declare arrow function also nd also can be function be created outside forEach
// arr.forEach((num) => {
//     console.log(num*2)
// })

// Map Method
// const person = [{ name: "prashant", age: 23 }, { name: "Ram", age: 12 }]
// const nameArr = person.map(naam => naam.name )
// console.log(nameArr)
// let a = [1, 2, 3, 4, 5]
// const newArr = a.map((num, index) => {
//     return [index, num * 2]
// })
// console.log(newArr)

// Filter(Works on Boolean basis)
// let a = [32, 3, 4, 4];
// let ans = a.filter(function (num) {
//     return num>5
// })
// console.log(ans)

// function isEven(number) {
//     return number%2==0
// }
// const evenNum = a.filter(isEven)
// console.log(evenNum)

// Reduce(reducing into one number)
// let a=[12,23,4,5,6]
// const sum = a.reduce((accumulator, currentNumber) => { return accumulator + currentNumber; },0)
// //   We can pass initial value of accumulator too,then current will be array first element.
// console.log(sum)

// const userCart = [{ pd: 1, price: 12000 }, { pd: 2, price: 20000 }]
// const totalPrice = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// },0)
// console.log(totalPrice)

// acc  current  total
// 0    12000    12000
// 12000 20000   32000 //this way assigning of acc if giving initial value to reduce

// sort() Method ,its first convert values into string then it will sort based on ASCII Character.
// let a=["prashant","Prashant","Q","r"]
//  //its changes the original Array
// console.log(a.sort())
//  //single return in Arrow Function can be written in one line;
// let b = [1, 2, 3, 4, 33, 42, 56]
// b.sort((a, b) => a - b) //same as Annonymouse function b.sort(function(a,b){ return a-b}) or b.sort((a,b)=>{return a-b})
// console.log(b)
// (a-b)>0 b,a Or (a-b) a,b

// const products = [
//     { productId: 1, productName: 'p1', price: 200 },
//     { productId: 2, productName: 'p2', price: 100 },
//     { productId: 3, productName: 'p3', price: 1000 },
//     { productId: 4, productName: 'p4', price: 50 },
// ]
// // sort by price
// const lowToHigh = products.slice(0).sort((a, b) => (a.price - b.price))// we maked a clone of products
// const highToLow=[...products].sort((a,b)=>(b.price-a.price))//Again first maked the clone.
// // products.sort((a,b)=>(a.price-b.price)) //Altering original products array
// console.log(lowToHigh);
// console.log(highToLow)
// console.log(products)

// find Method
// const myArr = ["Helo", "khelo", "Lel", "Lion"];
// const ans = myArr.find((string) => string.length === 3) //will store first string in array with length 3
// console.log(ans)
// const ans1 = products.find((product) => product.productId == 1)
// console.log(ans1)

// every method
// const numbers = [2, 4, 6, 8];
// const ans = numbers.every((numbers) => numbers % 2 == 0)//its checks every element as boolean
// console.log(ans)

// const ans = products.every((products) => products.price < 30000)
// console.log(ans)

// some Method (if any condition is true,then true)
// let a = [12, 2, 34, 4];
// console.log(a.some((num)=>num>40))

// fill
// const myArr = new Array(10).fill(-1)
// console.log(myArr);
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.fill(0, 2, 5))//first one is value we want to fill and second is starting index,last is till excluded .

// Splice Method
// let w = ["hello", "prashant"]
//  // w.splice(0, 1) //Original Array ko change(deleted item ko show karega)
// w.splice(1,0,"inserted") //index,number of delete,inserting item
// console.log(w)

// Iterables (Jispe hum For of Laga sake) ie.string,array(object is not iterable)
// Array like object ,jiske Pass length property and can access using index i.e string

// Set (It is iterable)..unique items only,order is not guranteed,no index based access
// const numbers = new Set([1, 2, 4, 4])
// numbers.add([1,2,4,4])//we can pass iterables into set
// console.log(numbers)
// numbers.add(3);
// console.log(numbers);
// numbers.has(3)//boolean check for value
// console.log(numbers.size)

// Map(key-Value).. main diff in Object and map is that key can be any datatype in Map.
// const person = new Map();
// person.set("firstname", "prashant");
// person.keys() //map iterator
// person.get("firstname") // will return value crossponding to that key
// person.has("firstname")//will check if key is present or not

//map is iterable,Can use for of (ordered gurantee)
// for (let keyValue of person) {
//     console.log(keyValue)//will give map as array.
// }
// const person1 = {
//     id: 1,
//     firstname:"prashant"
// }
// const extraInfo = new Map();
// extraInfo.set(person1, "{age:20,gender:male}");
// console.log(extraInfo.get(person1).age);

// Object Clone(stored into separate address)
// const obj = { key1: "val1", key2: "val" };
// const obj2 = obj;
// console.log(obj2);
// obj.key3 = "val3"//obj2 also change
// console.log(obj2);

// to avoid these things we do cloning
// const obj2 = { ...obj }
// const obj2=Object.assign({},obj)
// obj.key3 = "val3"
// console.log(obj2)
// console.log(obj)

// Optional chaining
// const user = {
//     id: 1,
//     name:"prashant"
// }
// console.log(user.id);
// console.log(user.address);//will give undefined,becoz no address in user
// console.log(user.name.address)//will give undefined
// console.log(user.address.house)//will error bcoz address not there and accessing house from address
//we can fix this error via optional chaining(?.)
// console.log(user?.id)//first it will check user is defined or not
// console.log(user?.name?.fullname)//undefined.

//  Crate your own method
// const person = {
//     fName: "pk",
//     lName: "singh",
//     about: function () {
//           console.log(`person name is ${this.fName} ${this.lName}`);
//     }
// }
// person.about();//this refers to the object on which we calling our function

//this keyword
// function info()  {
//         console.log(`person name is ${this.fName} ${this.lName}`);
//   }

// const person1 = {
//     fName: "pk",
//     lName: "singh",
//     about:info//about is the method
// }
// const person2 = {
//     fName: "bk",
//     lName: "singh",
//     about:info//about is the method
// }
// const person3 = {
//     fName: "sk",
//     lName: "singh",
//     about:info//about is the method
// }

// person1.about()//goes to person1 object and find fName and lName.
// person2.about()//goes to person2 object and find fName and lName.
// person3.about()//goes to person3 object and find fName and lName.

// console.log(this)//global object
// console.log(window)//same as this.
// console.log(this===window)
// 'use strict'
// function test() {
//     console.log(this)//if we use window object then will come as undefind
// }
// test();//undefined if using use strict,window object me function hoga
// window.test() //window object se call ,window object hi ayega use strict me bhi

// call ,bind ,apply
// function hello() { console.log("hello") }
// hello() //both are same;
// hello.call(); //can call a function by call();
// const user1 = {
//     firstName: "prashant",
//     age: 24,
//     about: function () {
//         console.log(`${this.firstName} ${this.age}`);
//     }
    
// }
 
// const user2 = {
//     firstName: "prashant",
//     age: 24,

//  }
// //  user1.about()
// user1.about.call(user2)//about use kar liya user1(borrow kiya method user1)
// user1.about.call()//undefined undefined
// user1.about.call(user1);//this ki value decide kar raha ye call;
//  function about(hobby,favsong) {
//     console.log(`${this.firstName} ${this.age} ${hobby} ${favsong}`);
// }
// const user1 = {
//     firstName: "prashant",
//     age: 24,
    
// }
// const user2 = {
//     firstName: "prashan",
//     age: 24,
    
// }
// about.call(user1, "singing", "in the end")

// about.call(user2,"dance")

// about.apply(user2, ["run", "Halo"])//same as call but only passing arguments like in array

// const func = about.bind(user1, "guitar", "run the world")//bind returns function
// func();

// const user1 = {
//     id: 1,
//     name: "prashant",
//     about:function(){
//         console.log(this.id);
//     }
// }
// const myfunc = user1.about.bind(user1) //binding nhi huyi
// myfunc()

// Arrow function this.
// const user1 = {
//         id: 1,
//         name: "prashant",
//     about: () => {
//         console.log(this);//ek level uppar se lega this
//         console.log(this.id, this.name);
    
//         }
// }
// // user1.about()
// user1.about.call(user1)
// shortening the about
//  const user1 = {
//     id: 1,
//     name: "prashant",
//     about(){
//         console.log(this.id,this.name);
//     }
// }
// user1.about();

