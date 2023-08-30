// function test(callback) {
//     console.log("hello testing")
//     callback();
// }

// function func() {
//     console.log("call back function")
// }

// test(func);

// test(function () {
//     console.log("callback func")
// });

// create a callback function to add two numbers
function addTwoNum(n1, n2,callback) {
    console.log(`two numbers are :${n1}, ${n2}`);
    callback(n1, n2);
}

function callback(n1, n2) {
    console.log(`sum is : ${n1+n2}`)
}
addTwoNum(1, 2, callback);