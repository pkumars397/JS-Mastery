//change text
//textContent and innerText

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent) //will show all text which is hidden also
console.log(mainHeading.innerText)//will only show the text which is on website
mainHeading.textContent = "textContent"//will change the text
mainHeading.innerText="Op"//same thing