import { createModal } from "./modal";

function createTodoDetailsModal(todo) {
    const todoDetailsModal = createModal();

    const title = document.createElement("p");
    title.textContent = `Title: ${todo.title}`;
    todoDetailsModal.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `Description: ${todo.description}`;
    todoDetailsModal.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${todo.dueDate}`;
    todoDetailsModal.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;
    todoDetailsModal.appendChild(priority);

    return todoDetailsModal;
}

export default createTodoDetailsModal;
