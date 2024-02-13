import createTodoListItem from "./todoListItem";
import { closeModal } from "./modal";
import createTodoForm from "./todoForm";

// Callback for handling edit todo form submission behaviour
function editTodo(currentUser, todo, project) {
    const editTodoForm = document.querySelector("#edit-todo-form");

    // Update todo object properties
    todo.title = editTodoForm.elements["todo-title"].value;
    todo.description = editTodoForm.elements["todo-description"].value;
    todo.dueDate = editTodoForm.elements["todo-due-date"].value;
    todo.priority = editTodoForm.elements["todo-priority"].value;

    currentUser.updateLocalStorage();

    // Replace old todo list item with new one in DOM
    const editedTodoIndex = project.todos.indexOf(todo);
    const oldTodoListItem =
        document.querySelector("#list-of-todos").children[editedTodoIndex];
    const newTodoListItem = createTodoListItem(currentUser, todo, project);
    oldTodoListItem.replaceWith(newTodoListItem);

    const editTodoModal = document.querySelector("#edit-todo-modal");
    closeModal(editTodoModal);
}

function createEditTodoForm(currentUser, todo, project) {
    const editTodoForm = createTodoForm();
    editTodoForm.id = "edit-todo-form";

    // Fill editTodoForm fields with current todo's details
    editTodoForm.elements["todo-title"].value = todo.title;
    editTodoForm.elements["todo-description"].value = todo.description;
    editTodoForm.elements["todo-due-date"].value = todo.dueDate;
    editTodoForm.elements["todo-priority"].value = todo.priority;

    // Handle "enter" key press when focused on certain fields in edit todo form
    // Note: HTMLFormElement: elements property won't return our form rows as they are divs
    // More here: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
    const submitOnEnterElements = Array.from(editTodoForm.elements).filter(
        (element) => element.tagName == "INPUT" || element.tagName == "SELECT"
    );
    submitOnEnterElements.forEach((element) => {
        element.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                editTodoForm.checkValidity()
                    ? editTodo(currentUser, todo, project)
                    : editTodoForm.reportValidity();
            }
        });
    });

    // Make sure pressing enter or space while focused on submit button submits the form
    const submitBtn = Array.from(editTodoForm.elements).find(
        (element) => element.type == "submit"
    );
    submitBtn.addEventListener("keydown", (e) => {
        if (e.key == "Enter" || e.key == " ") {
            e.preventDefault();
            editTodoForm.checkValidity()
                ? editTodo(currentUser, todo, project)
                : editTodoForm.reportValidity();
        }
    });

    // Handle edit todo form submission
    editTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        editTodo(currentUser, todo, project);
    });

    return editTodoForm;
}

export default createEditTodoForm;
