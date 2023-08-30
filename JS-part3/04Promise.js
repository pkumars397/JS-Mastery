// ! Promise Like Future Value  of certain task;
console.log ("Script Started");
const bucket = ["vegetable", "salt", "rice", "wheat"]
// *producing the Promise
const FriedRice=new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("FriedRice")
    } else {
        reject("Items not available")
    }
})
// ?consuming is main part(two way of consuming)
// * its works asynchronous,i.e first all the js task will be completed then browser will send it to js from callback queue

// FriedRice.then((friedRice) => {
//     console.log("lets eat",friedRice)
// },(error)=>{console.log(error)})

FriedRice.then((friedRice) => {
    console.log("lets eat",friedRice)
}).catch((error) => { console.log(error) })

for (let i = 0; i < 30; i++){
    console.log("",i)
}
console.log("Script Ended!!")