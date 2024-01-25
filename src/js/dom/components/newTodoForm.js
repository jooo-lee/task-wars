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
    const newTodoForm = createTodoForm();

    // Handle "enter" key press when focused on certain fields in new todo form
    const submitOnEnterElements = [...newTodoForm.children].filter(
        (child) => child.tagName == "INPUT" || child.tagName == "SELECT"
    );
    submitOnEnterElements.forEach((elem) => {
        elem.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                newTodoForm.checkValidity()
                    ? addNewTodo(project)
                    : newTodoForm.reportValidity();
            }
        });
    });

    newTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewTodo(project);
    });

    return newTodoForm;
}

export default createNewTodoForm;
