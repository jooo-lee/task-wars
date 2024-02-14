import Todo from "../../todo";
import createTodoListItem from "./todoListItem";
import { closeModal } from "./modal";
import createTodoForm from "./todoForm";

// Callback for handling new todo form submission
function addNewTodo(currentUser, project) {
    // Hide quote in list of todos (project will have at least one todo)
    document.querySelector("#list-of-todos-quote").style.display = "none";

    const newTodoForm = document.querySelector("#new-todo-form");

    const newTodo = new Todo(
        newTodoForm.elements["todo-title"].value,
        newTodoForm.elements["todo-description"].value,
        newTodoForm.elements["todo-due-date"].value,
        newTodoForm.elements["todo-priority"].value
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
    // Note: HTMLFormElement: elements property won't return our form rows as they are divs
    // More here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
    const submitOnEnterElements = Array.from(newTodoForm.elements).filter(
        (element) => element.tagName == "INPUT" || element.tagName == "SELECT"
    );
    submitOnEnterElements.forEach((element) => {
        element.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                newTodoForm.checkValidity()
                    ? addNewTodo(currentUser, project)
                    : newTodoForm.reportValidity();
            }
        });
    });

    // Make sure pressing enter or space while focused on submit button submits the form
    const submitBtn = Array.from(newTodoForm.elements).find(
        (element) => element.type == "submit"
    );
    submitBtn.addEventListener("keydown", (e) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault();
            newTodoForm.checkValidity()
                ? addNewTodo(currentUser, project)
                : newTodoForm.reportValidity();
        }
    });

    newTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewTodo(currentUser, project);
    });

    return newTodoForm;
}

export default createNewTodoForm;
