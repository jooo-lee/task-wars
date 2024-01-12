import Todo from "../../todo";
import createTodoListItem from "./createTodoListItem";

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        const todoListItem = createTodoListItem(newTodo, project);
        listOfTodos.appendChild(todoListItem);
    });
    return addTodoBtn;
}

export default createAddNewTodoBtn;
