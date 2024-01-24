import Todo from "../../todo";
import createTodoListItem from "./todoListItem";
import { closeModal } from "./modal";
import createTodoForm from "./todoForm";

// Callback for handling new todo form submission
function addNewTodo(project) {
    const newTodoForm = document.querySelector("form");

    const newTodo = new Todo(
        newTodoForm.elements["title"].value,
        newTodoForm.elements["description"].value,
        newTodoForm.elements["due-date"].value,
        newTodoForm.elements["priority"].value
    );

    project.addTodo(newTodo);

    const todoListItem = createTodoListItem(newTodo, project);
    const listOfTodos = document.querySelector("#list-of-todos");
    listOfTodos.appendChild(todoListItem);

    const newTodoModal = document.querySelector("dialog");
    closeModal(newTodoModal);
}

function createNewTodoForm(project) {
    return createTodoForm(project, addNewTodo);
}

export default createNewTodoForm;
