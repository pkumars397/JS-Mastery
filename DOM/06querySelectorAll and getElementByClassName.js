// let h2List = document.querySelectorAll("h2")[1].style.color="blue";
// console.log(h2List) //gives nodelist(arraylike objects ,means we can use length and indexing property)
// let anchorList=document.querySelectorAll("a")
// console.log(anchorList.length);
// console.log(anchorList[0]) //will give first anchortag
 // Basically we can use all iterating methods
// for (let i = 0; i < anchorList.length; i++){
//     anchorList[i].style.color = "lightBlue";
//     anchorList[i].style.backgroundColor = "White";
//     // anchorList[i].style.display="none"
// }

// for (let val of anchorList) {
//     val.style.color = "Green";
//     val.style.backgroundColor = "Dark";
// }

// anchorList.forEach((nav)=>{
//     nav.style.color = "Blue";
// })

// convert to array;
// anchorList = Array.from(anchorList);
// console.log(anchorList) //now array

// ***getElementsByClassName and getElementsByTagName
// console.log(document.getElementsByClassName("nav-item"))//htmlList(it is also array like object)
// console.log(document.getElementsByClassName("nav-item")[0])
//  //also iterable by for and for of not by for.forEach

// let htmlList = document.getElementsByClassName("nav-item")
// htmlList=Array.from(htmlList) //converted to array
// console.log(htmlList)

// let htmlList = document.getElementsByTagName("a");
// console.log(htmlList)
// for (let listItem of htmlList) {
//     listItem.style.display = "none";
// }
