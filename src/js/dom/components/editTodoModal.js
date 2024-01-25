import { createModal } from "./modal";

function createEditTodoModal(todo) {
    const editTodoModal = createModal();

    const p = document.createElement("p");
    p.textContent = "Edit Todo";
    editTodoModal.appendChild(p);

    return editTodoModal;
}

export default createEditTodoModal;
