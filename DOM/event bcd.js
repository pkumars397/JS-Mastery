// event bubbling or propagation
// document.querySelector(".grandparent").addEventListener("click", () => { console.log("Bubble grandparent") })
// document.querySelector(".parent").addEventListener("click", () => { console.log("Bubble parent") })
// document.querySelector(".child").addEventListener("click", () => { console.log("Bubble child") })
// document.body.addEventListener("click", () => { console.log("bubble body") })

// document.querySelector(".grandparent").addEventListener("click", () => { console.log("Capturing !! grandparent") }, true)
// document.querySelector(".parent").addEventListener("click", () => { console.log("Capturing !! parent") },true)
// document.querySelector(".child").addEventListener("click", () => { console.log("Capturing !! child") },true)
// document.body.addEventListener("click", () => { console.log("Capturing !! body") },true)


// document.querySelector(".grandparent").addEventListener("click", () => { console.log("Bubble grandparent") })
// document.querySelector(".parent").addEventListener("click", () => { console.log("Bubble parent") })
// document.querySelector(".child").addEventListener("click", () => { console.log("Bubble child") })
// document.body.addEventListener("click", () => { console.log("bubble body") })

// document.querySelector(".grandparent").addEventListener("click", () => { console.log("Capturing !! grandparent") }, true)
// // document.querySelector(".parent").addEventListener("click", () => { console.log("Capturing !! parent") },true)
// document.querySelector(".child").addEventListener("click", () => { console.log("Capturing !! child") },true)
// document.body.addEventListener("click", () => { console.log("Capturing !! body") },true)

// Event Delegation
// document.querySelector(".grandparent").addEventListener("click", () => { console.log("you clicked something") });
// document.querySelector(".grandparent").addEventListener("click",(ev)=>{console.log(ev)});
// document.querySelector(".grandparent").addEventListener("click",(ev)=>{console.log(ev.target)});