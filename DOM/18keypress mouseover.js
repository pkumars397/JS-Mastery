const body = document.body;
body.addEventListener("keypress", (e) => {
  console.log(e.key);
});

const btn1 = document.getElementById("one");
btn1.addEventListener("mouseover", () => console.log("mouseover"));
btn1.addEventListener("mouseleave", () => console.log("mouseleave"));
// same way of firing an events on selected html element
