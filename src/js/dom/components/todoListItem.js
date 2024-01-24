import createTodoDetailsBtn from "./todoDetailsBtn";
import createDeleteTodoBtn from "./deleteTodoBtn";

// Here, list item refers to the <li> tag
function createTodoListItem(todo, project) {
    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = todo.title;
    checkBox.addEventListener("click", function () {
        todo.complete = this.checked;
    });
    li.appendChild(checkBox);

    const todoTitle = document.createElement("label");
    todoTitle.for = todo.title;
    todoTitle.textContent = todo.title;
    li.appendChild(todoTitle);

    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;
    li.appendChild(todoDueDate);

    const todoDetailsBtn = createTodoDetailsBtn(todo);
    li.appendChild(todoDetailsBtn);

    const deleteTodoBtn = createDeleteTodoBtn(todo, project);
    li.appendChild(deleteTodoBtn);

    return li;
}

export default createTodoListItem;
