//events when some task is happen something to perfrom
// click event
// 1.)adding in the html itself by attribute to element ,onclick="console.log('you clicked me')"
// 2.)using click on the targeted element

// const btn = document.querySelector(".todo-list li")
// btn.onclick = () => { console.log("Clicked") } //click fire
// console.log(btn)

// 3.)addEventListeners

// const btn = document.querySelector(".todo-list li")
// btn.addEventListener("click", () => {console.log("you clicked me")})

// value of this inside eventListener callback

// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// function myfunc() {
//     console.log("clicked");
//     console.log("val of this")
//     console.log(this)
// }
// btn.addEventListener("click", myfunc);//value of this will be the btn itself(on which we are adding eventListner)

//in case of arrow function this is window object
// btn.addEventListener("click", () => {
//     console.log("clicked");
//     console.log("val of this")
//     console.log(this)
// })
