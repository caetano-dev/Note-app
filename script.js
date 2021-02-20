const todoList = document.querySelector("#todoContainer ul");
const todoInput = document.querySelector("#write-todo input");
const todoButton = document.querySelector("#write-todo button");
const todos = JSON.parse(localStorage.getItem("list_todos")) || [];

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js")
}

function renderTodos() {
  todoList.innerHTML = "";
  for (todo of todos) {
    const todoElement = document.createElement("li");
    const todoText = document.createTextNode(todo);
    const linkElement = document.createElement("a");
    const linkText = document.createTextNode("Delete");
    const pos = todos.indexOf(todo);

    todoElement.setAttribute("class", "listItem");
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("id", "link");
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    todoList.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  const { value: todoText } = todoInput;

  if (!todoText) {
    todoInput.classList.add("apply-shake");
    todoInput.addEventListener("animationend", (e) =>
      todoInput.classList.remove("apply-shake")
    );
    return;
  }

  todos.push(todoText);
  todoInput.value = "";

  renderTodos();
  saveToStorage();
}
todoButton.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

todoInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    todoButton.click();
  }
});
