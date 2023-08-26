// First compile,(early error check and scope checking)
// second code execute inside Global execution context
// GEC me Memory (creation phase) and code execution phase4
// Js is single threaded synchronous,but it word like asynchronous with help of browser,event loops and promises.
// Lexical Scope Language.Check where which variable present ,or function present

// console.log(this);                                 // GEC...> code execution phase | Global Memory
// console.log(window);
// console.log(myFunction);
// console.log(fullName);
// let myFunction=function() { //will be initialized in memory creation phase as unitialezed
//     console.log("hd")
// }
// var firstName = "prashant";
// var lastName = "Kumar";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(a)
// a=5 // will not update uninitialized,in let you have to initialize on time of declaring
// let a;
// console.log(a)
// test()
// var test = function () {
//     console.log("test0")
// }
// test()
// function test() { //functions definition set once
//     console.log("test1")
// }
// test()
// var test = function () {
//     console.log("test2")
// }
// test()


// Closures {ability to access outer scope of inner function even if outer function is closed.Binds all variable from outer scope function}
// function outer() {
//     let count = 0;
//     return function () {
//         if (count < 1) {
//             console.log("First Call");
//             count++
//         } else {
//             console.log("Hi called me for repeated ");
//         }
//     }
// }

// const myfunc = outer();
// myfunc()
// myfunc()
// myfunc();
// const myfunc1 = outer();
// myfunc1()
// myfunc1()