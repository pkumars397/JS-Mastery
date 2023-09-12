const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
sectionTodo.classList.add("bg-color"); //adds class bg-color
// console.log(sectionTodo.classList);
sectionTodo.classList.remove("bg-color");
console.log(sectionTodo.classList.contains("bg-color")); //check if certain class is there or not
sectionTodo.classList.toggle("bg-color"); //adds class if that class is not available,else delete
sectionTodo.classList.toggle("bg-color"); //removed bg-color
