const body = document.body;
const btn = document.querySelector(".container button")
function randomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256);
    const random=`rgb(${red},${green},${blue})`
    return random
}
const span = document.querySelector("span");
btn.addEventListener("click", (e) => {
    const randomcolor = randomColor();
    body.style.backgroundColor = randomcolor
    span.textContent = randomcolor;
   
})