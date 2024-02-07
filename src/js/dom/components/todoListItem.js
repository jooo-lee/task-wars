import createTodoDetailsBtn from "./todoDetailsBtn";
import createDeleteTodoBtn from "./deleteTodoBtn";
import createEditTodoBtn from "./editTodoBtn";

// Here, list item refers to the <li> tag
function createTodoListItem(currentUser, todo, project) {
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.id = todo.title;
    checkBox.type = "checkbox";
    checkBox.name = todo.title;
    checkBox.addEventListener("click", function () {
        todo.complete = this.checked;
        currentUser.updateLocalStorage();
    });
    checkBox.checked = todo.complete;
    li.appendChild(checkBox);

    const todoTitle = document.createElement("label");
    todoTitle.setAttribute("for", todo.title);
    todoTitle.textContent = todo.title;
    li.appendChild(todoTitle);

    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;
    li.appendChild(todoDueDate);

    const todoDetailsBtn = createTodoDetailsBtn(todo);
    li.appendChild(todoDetailsBtn);

    const editTodoBtn = createEditTodoBtn(currentUser, todo, project);
    li.appendChild(editTodoBtn);

    const deleteTodoBtn = createDeleteTodoBtn(currentUser, todo, project);
    li.appendChild(deleteTodoBtn);

    return li;
}

export default createTodoListItem;
