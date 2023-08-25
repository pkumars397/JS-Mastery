// function test() {
//     console.log("test");
// }
  // js uses function as function and object
// console.log(test.name)//name propertry tells function name

// we can create our own properties
// test.myOwnProp = "very good"
// console.log(test.myOwnProp)

// function provides more useful properties.
// console.log(test.prototype)//{}
// only function provides prototype property(free ka object maal)

// test.prototype.abc = "abc";
// test.prototype.dance = 2;
// test.prototype.run = function () {
//     return "haha"
// }
// console.log(test.prototype)
// console.log(test.prototype.run())

// const arr = [1, 2, 3, 4, 5,]
// console.log(arr)//Proto sets to predefined array methods in Array prototype(array ke form me rhta hai prototype in Array ,which is also object)
// const arr2 = new Array()
// console.log(Object.getPrototypeOf(arr2))
// console.log(Array.prototype)
// arr2.prototype = []//we can also set prototype to empty
// console.log(arr2.prototype)