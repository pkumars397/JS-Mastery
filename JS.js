"use strict";
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
let arr=[obj1:]
