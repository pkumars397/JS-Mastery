const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem);
//cloning Element Node
const newTodoItem2=newTodoItem.cloneNode(true);
todoList.prepend(newTodoItem2);
// console.log(todoList);

// const todo1 = document.querySelector(".todo-list li")//will select first li in todolist class
// todo1.remove();
// console.log(todo1);
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "hello";
// const todoList = document.querySelector(".todo-list")
// todoList.after(newTodoItem);
// todoList.before(newTodoItem);

