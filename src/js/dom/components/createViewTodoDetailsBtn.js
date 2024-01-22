import { createModal, closeModal } from "./createModal";

function loadTodoDetails(todo, modal) {
    const title = document.createElement("p");
    title.textContent = `Title: ${todo.title}`;
    modal.appendChild(title);

    const description = document.createElement("p");
    description.textContent = `Description: ${todo.description}`;
    modal.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.textContent = `Due: ${todo.dueDate}`;
    modal.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.textContent = `Priority: ${todo.priority}`;
    modal.appendChild(priority);
}

function createViewTodoDetailsBtn(todo) {
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "View details";
    todoDetailsBtn.addEventListener("click", function () {
        const detailsModal = createModal();
        loadTodoDetails(todo, detailsModal);

        const body = document.querySelector("body");
        body.appendChild(detailsModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        detailsModal.showModal();
    });
    return todoDetailsBtn;
}

export default createViewTodoDetailsBtn;
