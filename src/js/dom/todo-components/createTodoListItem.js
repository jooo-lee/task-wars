import createViewTodoDetailsBtn from "./createViewTodoDetailsBtn";
import createDeleteTodoBtn from "./createDeleteTodoBtn";

// Here, list item refers to the <li> tag
function createTodoListItem(todo, project) {
    const li = document.createElement("li");

    const todoTitle = document.createElement("p");
    todoTitle.textContent = todo.title;
    li.appendChild(todoTitle);

    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;
    li.appendChild(todoDueDate);

    const todoDetailsBtn = createViewTodoDetailsBtn(todo);
    li.appendChild(todoDetailsBtn);

    const deleteTodoBtn = createDeleteTodoBtn(todo, project);
    li.appendChild(deleteTodoBtn);

    return li;
}

export default createTodoListItem;
