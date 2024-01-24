import Todo from "../../todo";
import { createModal, closeModal } from "./modal";
import createTodoListItem from "./todoListItem";

// Callback for handling new todo form submission
function addNewTodo(project) {
    const newTodoForm = document.querySelector("#new-todo-form");

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

    const newTodoModal = document.querySelector("#new-todo-modal");
    closeModal(newTodoModal);
}

function createNewTodoModal(project) {
    const newTodoModal = createModal();
    newTodoModal.id = "new-todo-modal";

    const p = document.createElement("p");
    p.textContent = "Add Todo";
    newTodoModal.appendChild(p);

    const newTodoForm = document.createElement("form");
    newTodoForm.id = "new-todo-form";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.for = "title";
    newTodoForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.required = true;
    title.placeholder = "Reclaim Mandalore";
    newTodoForm.appendChild(title);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.for = "description";
    newTodoForm.appendChild(descriptionLabel);

    const description = document.createElement("textarea");
    description.name = "description";
    description.placeholder = "Defeat Moff Gideon and retrieve the darksaber";
    description.rows = "10";
    description.cols = "30";
    newTodoForm.appendChild(description);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date: ";
    dueDateLabel.for = "due-date";
    newTodoForm.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.name = "due-date";
    newTodoForm.appendChild(dueDate);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.for = "priority";
    newTodoForm.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.name = "priority";

    const lowPriority = document.createElement("option");
    lowPriority.value = "low-priority";
    lowPriority.textContent = "Low Priority";
    priority.appendChild(lowPriority);

    const mediumPriority = document.createElement("option");
    mediumPriority.value = "medium-priority";
    mediumPriority.textContent = "Medium Priority";
    priority.appendChild(mediumPriority);

    const highPriority = document.createElement("option");
    highPriority.value = "high-priority";
    highPriority.textContent = "High Priority";
    priority.appendChild(highPriority);

    newTodoForm.appendChild(priority);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    newTodoForm.appendChild(submitBtn);

    // Handle "enter" key press when focused on input fields in new todo form
    const elementsSubmittedOnEnter = [title, dueDate, priority];
    elementsSubmittedOnEnter.forEach((elem) => {
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

    newTodoModal.appendChild(newTodoForm);

    return newTodoModal;
}

export default createNewTodoModal;
