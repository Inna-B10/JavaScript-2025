/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

const template = `
          <div class="todo-item">
            <h2></h2>
            <p class="text-white">Created at: <span></span></p>
          </div>
          `;

export function createHtmlElement(data) {
  const htmlWrapper = document.createElement("li");
  htmlWrapper.innerHTML = template;

  const hTitle = htmlWrapper.querySelector("h2");
  hTitle.innerText = data.title;

  const createdTime = htmlWrapper.querySelector("span");
  createdTime.innerText = data.createdAt;

  return htmlWrapper;
}
