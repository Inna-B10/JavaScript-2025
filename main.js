/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createHtmlElement } from "./scripts/createTodoElement.js";

// events to listen for
const userInput = document.querySelector("#text-input");
const addButton = document.querySelector("#add-task");
const displayList = document.querySelector("#todo-list");

// when user clicks on the button "add"
addButton.addEventListener("click", () => {
  if (displayList.innerHTML === "") {
    displayList.classList.add("todo-list");
  }
  //read input text
  const taskTitle = userInput.value;

  //create date stamp and convert to local format
  const createdTime = new Intl.DateTimeFormat("no-NO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const newItem = {
    title: taskTitle,
    createdAt: createdTime,
  };

  //add new task to list
  todoList.createNewTodo(newItem);

  //display updated list of tasks
  updateTasksList(newItem);

  //clean input form
  userInput.value = "";
});
/**
 * Update Todo List
 * get all todoes and wrapp each of them in HTML
 */
function updateTasksList() {
  //delete previous list
  displayList.innerHTML = "";

  //get all todoes
  const allTodoTasks = todoList.getAllTodoes();

  //for each todo in array create html template and display
  for (const todo of allTodoTasks) {
    const newElement = createHtmlElement(todo);
    displayList.appendChild(newElement);
  }
}
// test
