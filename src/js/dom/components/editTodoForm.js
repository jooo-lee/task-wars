import createTodoListItem from "./todoListItem";
import { closeModal } from "./modal";
import createTodoForm from "./todoForm";

// Callback for handling edit todo form submission behaviour
function editTodo(todo, project) {
    const editTodoForm = document.querySelector("#edit-todo-form");

    // Update todo object properties
    todo.title = editTodoForm.elements["title"].value;
    todo.description = editTodoForm.elements["description"].value;
    todo.dueDate = editTodoForm.elements["due-date"].value;
    todo.priority = editTodoForm.elements["priority"].value;

    project.updateInLocalStorage();

    // Replace old todo list item with new one in DOM
    const editedTodoIndex = project.todos.indexOf(todo);
    const oldTodoListItem =
        document.querySelector("#list-of-todos").children[editedTodoIndex];
    const newTodoListItem = createTodoListItem(todo, project);
    oldTodoListItem.replaceWith(newTodoListItem);

    const editTodoModal = document.querySelector("#edit-todo-modal");
    closeModal(editTodoModal);
}

function createEditTodoForm(todo, project) {
    const editTodoForm = createTodoForm();
    editTodoForm.id = "edit-todo-form";

    // Fill editTodoForm fields with current todo's details
    editTodoForm.elements["title"].value = todo.title;
    editTodoForm.elements["description"].value = todo.description;
    editTodoForm.elements["due-date"].value = todo.dueDate;
    editTodoForm.elements["priority"].value = todo.priority;

    // Handle "enter" key press when focused on certain fields in edit todo form
    const submitOnEnterElements = [...editTodoForm.children].filter(
        (child) => child.tagName == "INPUT" || child.tagName == "SELECT"
    );
    submitOnEnterElements.forEach((elem) => {
        elem.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                editTodoForm.checkValidity()
                    ? editTodo(todo, project)
                    : editTodoForm.reportValidity();
            }
        });
    });

    // Handle edit todo form submission
    editTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        editTodo(todo, project);
    });

    return editTodoForm;
}

export default createEditTodoForm;
