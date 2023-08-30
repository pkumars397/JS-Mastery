const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeColor(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                reject("element doesn't exist");
            }
        },time)
    })
}

changeColor(heading1, "one", "Blue", 2000)
    .then(() => changeColor(heading2, "one", "Blue", 2000))
    .then(() => changeColor(heading3, "two", "Green", 1000))
    .then(() => changeColor(heading4, "two", "Green", 1000))
    .then(() => changeColor(heading5, "two", "Green", 1000))
    .then(() => changeColor(heading6, "two", "Green", 1000))
    .then(() => changeColor(heading7, "two", "Green", 1000))
    .catch((error)=>alert(error));