import Todo from "../../todo";
import createTodoListItem from "./todoListItem";
import { closeModal } from "./modal";
import createTodoForm from "./todoForm";

// Callback for handling new todo form submission
function addNewTodo(currentUser, project) {
    const newTodoForm = document.querySelector("#new-todo-form");

    const newTodo = new Todo(
        newTodoForm.elements["title"].value,
        newTodoForm.elements["description"].value,
        newTodoForm.elements["due-date"].value,
        newTodoForm.elements["priority"].value
    );

    project.addTodo(newTodo);
    currentUser.updateLocalStorage();

    const todoListItem = createTodoListItem(currentUser, newTodo, project);
    const listOfTodos = document.querySelector("#list-of-todos");
    listOfTodos.appendChild(todoListItem);

    const newTodoModal = document.querySelector("#new-todo-modal");
    closeModal(newTodoModal);
}

function createNewTodoForm(currentUser, project) {
    const newTodoForm = createTodoForm();
    newTodoForm.id = "new-todo-form";

    // Handle "enter" key press when focused on certain fields in new todo form
    const submitOnEnterElements = [...newTodoForm.children].filter(
        (child) => child.tagName == "INPUT" || child.tagName == "SELECT"
    );
    submitOnEnterElements.forEach((elem) => {
        elem.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                newTodoForm.checkValidity()
                    ? addNewTodo(currentUser, project)
                    : newTodoForm.reportValidity();
            }
        });
    });

    newTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewTodo(currentUser, project);
    });

    return newTodoForm;
}

export default createNewTodoForm;
