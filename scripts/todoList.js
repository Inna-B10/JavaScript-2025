import { createUniqueId } from "./utilities.js";

const todoes = [];

/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo}
 */
export function getAllTodoes() {
  return todoes;
}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 * @returns {Todo}
 */
export function createNewTodo(data) {
  //check if input not empty
  if (data.title.trim() === "") {
    alert("Add new task!");
    return;
  }
  //create new object
  const newTodo = {
    id: createUniqueId(),
    title: data.title,
    createdAt: data.createdAt,
  };
  //get all todoes
  const allTodoes = getAllTodoes();
  // add new created object to array
  allTodoes.push(newTodo);
}
