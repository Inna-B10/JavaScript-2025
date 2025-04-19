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
  createNewTodo: (data: TodoCreationInfo) => Todo;
}

/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 */
type createHtmlElement = (todo: Todo) => HTMLElement;

/**
 * A function for updating the display with the current Todoes
 * To keep things simple, just delete whatever is already there and
 * recreate the elements
 */
type updateDisplay = (todoes: Todo[]) => void;
