# Frontend Development Assignment: Todo List Implementation

## Introduction

In this assignment, you will be working on creating a simple Todo List application using JavaScript, HTML and CSS. You will be provided with a set of models and interfaces to build upon, and your task is to implement the application based on these specifications along with a set of mostly empty files for a starting folder structure.

## Task Description

### Provided Models and Interfaces

We have provided you with the following models and interfaces that define the structure of our Todo List:

```typescript
/**
 * A Todo Item
 */
type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * The information needed when creating a new Todo
 */
type TodoCreationInfo = {
  title: string;
};

/**
 * The initial methods supported by our Todo List
 */
interface TodoList {
  getAllTodoes: () => Todo[];
  addTodo:      (data: TodoCreationInfo) => boolean;
}
```

### Functions to Implement

You are required to implement the todo list according to the interface.
In addition you need atleast the following functions for creating elements and updating the DOM:

#### 1. `createTodoElement(todo: Todo)`

This function should take a `Todo` item as input and generate an HTML element that represents that Todo. You have creative freedom to design the HTML structure as you see fit.

#### 2. `updateDisplay(todoes: Todo[])`

This function should update the display with the current list of Todos. To keep things simple, you should delete whatever Todo elements are already displayed and recreate them based on the updated list of Todos.

### Wiring Everything Together

In addition to implementing the functions mentioned above, your task is to wire everything together by:

- Creating an HTML page that includes an input field for adding new Todos and a section for displaying the Todos.
- Adding necessary event listeners to the input field and any other relevant elements to handle user interactions (e.g., adding new Todos).
- Using the provided `TodoList` interface to manage the list of Todos, adding new Todos, and retrieving all Todos.

## Guidelines

- Create a fork of this repository and implement the functions
- Use the initial file layout as a guide for structuring your application
- Ensure that your code is well-structured and follows best practices.
- Use meaningful variable and function names to enhance code readability.
- Test your application thoroughly to make sure it functions as expected.

## Submission

Please submit the following as part of your assignment:

1. Link to your GitHub repository
2. (Optional) Link to the Figma design files
3. (Optional) Link to the deployed site

## Evaluation Criteria

Your assignment will be evaluated based on the following criteria:

- Correct implementation of the `TodoList` interface.
- Proper rendering of Todo elements using the `createTodoElement` and `updateDisplay` functions.
- Functional user interface with event listeners for adding Todos.
- Code organization and readability.
- Documentation and explanation of your implementation choices.

Good luck with your assignment, and have fun building your Todo List application! If you have any questions or need clarification, feel free to reach out for assistance.

## Bonus Tasks (Expand the TodoList Interface)

For those who want to challenge themselves further, consider expanding the TodoList interface with new methods and wiring them up in your Todo List application. Here are some extensions you could try to implement:

```typescript
interface TodoList {
  // Existing methods...

  markTodoComplete:   (todoId: number) => boolean;
  deleteTodo:         (todoId: number) => boolean;
  getCompletedTodos:  () => Todo[];
  getIncompleteTodos: () => Todo[];
  updateTodoTitle:    (todoId: number, newTitle: string) => boolean;
}
```

**Extra Hard**

A nice addition which would simplify running our todo function would be to implement something similar to the addEventListner method that comes with the browser. See if you can figure out how these should work.

```typescript
type ChangeListner: (currentTodoes: Todo[]) => void

interface TodoList {
  // Existing methods...

  addChangeListner:     (listner: ChangeListner) => boolean;
  removeChangeListner:  (listner: ChangeListner) => boolean;
}
```

_You might have to do some searching for how these are implmented, [secret hint](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)_

<details>
<summary>Nice stuff you can do with these</summary>

- Setup the update display to be run everytime the todolist changes
- Setup a new function for persisting the Todo List to [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) whenever it changes

<details>

## Links

- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- DOM Manipulations
  - [Find Single Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
  - [Find All Elements](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  - [Create Element](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - [Remove Element](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)
- [JSDoc](https://jsdoc.app/)
