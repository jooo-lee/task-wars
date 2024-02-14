import createTodoDetailsBtn from "./todoDetailsBtn";
import createDeleteTodoBtn from "./deleteTodoBtn";
import createEditTodoBtn from "./editTodoBtn";

// Here, list item refers to the <li> tag
function createTodoListItem(currentUser, todo, project) {
    const li = document.createElement("li");
    li.classList.add("todo-list-item");
    li.setAttribute("uuid", todo.uuid);

    const todoListItemFirstRow = document.createElement("div");
    todoListItemFirstRow.classList.add("todo-list-item-first-row");

    const checkBox = document.createElement("input");
    checkBox.id = todo.uuid;
    checkBox.classList.add("todo-checkbox");
    checkBox.type = "checkbox";
    checkBox.name = todo.title;
    checkBox.addEventListener("click", function () {
        todo.complete = this.checked;
        currentUser.updateLocalStorage();
    });
    checkBox.checked = todo.complete;
    todoListItemFirstRow.appendChild(checkBox);

    const todoTitle = document.createElement("label");
    todoTitle.classList.add("todo-title");
    todoTitle.setAttribute("for", todo.uuid);
    todoTitle.textContent = todo.title;
    todoListItemFirstRow.appendChild(todoTitle);

    const todoDueDate = document.createElement("p");
    todoDueDate.classList.add("todo-due-date");
    todoDueDate.textContent = `Due: ${todo.dueDate}`;
    todoListItemFirstRow.appendChild(todoDueDate);

    li.appendChild(todoListItemFirstRow);

    const todoBtnsContainer = document.createElement("div");
    todoBtnsContainer.classList.add("todo-btns-container");

    const todoDetailsBtn = createTodoDetailsBtn(todo);
    todoBtnsContainer.appendChild(todoDetailsBtn);

    const editTodoBtn = createEditTodoBtn(currentUser, todo, project);
    todoBtnsContainer.appendChild(editTodoBtn);

    const deleteTodoBtn = createDeleteTodoBtn(currentUser, todo, project);
    todoBtnsContainer.appendChild(deleteTodoBtn);

    li.appendChild(todoBtnsContainer);

    return li;
}

export default createTodoListItem;
