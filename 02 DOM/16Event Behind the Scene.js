console.log("Script Started !!");
const btnAll = document.querySelectorAll(".my-buttons button");
// console.log(btnAll)
btnAll.forEach((button) => {
    button.addEventListener("click", (e) => {
        // let num = 0;
        // for (let i = 0; i < 1000000000; i++){
        //     num = num + i;
            
        // }
        // console.log(e.currentTarget.innerText,num)
        e.target.style.backgroundColor = "grey";
        e.target.style.color="yellow"
    })
})
let outer = 0;
for (let i = 0; i < 100000000; i++){
    outer = outer + i;
    
}
console.log("outer Variable",outer);
console.log("Scripted Ended !!");


