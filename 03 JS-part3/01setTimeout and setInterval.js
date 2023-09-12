// setTimeout will go to callback queue and event loop will loop to callStack for if all the operations are done or not .
// setTimeout callback will be sended to CallStack at last ,so it will always print at last.
// setTimeout gives a id each time its go to web API.

// console.log("script Started");
// // setTimeout(function () {
// //     console.log("in settimeout")
// // }, 2000);
// setTimeout(() => {
//     console.log("Inside the Settimeout");
// }, 0)
// for (let i = 0; i < 100; i++){
//     console.log("...");
// }
// console.log("script ended")


// console.log("script Started");
// const id=setTimeout(function () {
//     console.log("in settimeout")
// }, 2000);
// for (let i = 0; i < 100; i++){
//     console.log("...");
// }
// console.log("script ended")


// console.log("script Started");
// const id=setTimeout(function () {
//     console.log("in settimeout")
// }, 2000);
// for (let i = 0; i < 100; i++){
//     console.log("...");
// }
// clearTimeout(id);//setTimeout callback will be removed from the callback queue.So it will not execute.
// console.log("script ended")

// setTimeout>> will keep calling callback on certain ,timeInterval.

// console.log("Script Started!!")
// const id=setInterval(() =>{
//     console.log("printing on interval");
// },1000)
// console.log("script Ended")
// // clearInterval(id)


// Project for changing Bg color and stoping it using button.

const body = document.body;

const id=setInterval(() => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red},${green},${blue})`
    body.style.backgroundColor =rgb
}, 2000)

document.querySelector("button").addEventListener("click", () => {
    clearInterval(id)
    document.querySelector("button").textContent = body.style.backgroundColor;
    document.querySelector("button").style.backgroundColor=body.style.backgroundColor
})
