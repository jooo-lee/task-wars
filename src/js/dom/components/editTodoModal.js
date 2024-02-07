import { createModal } from "./modal";
import createEditTodoForm from "./editTodoForm";

function createEditTodoModal(currentUser, todo, project) {
    const editTodoModal = createModal();
    editTodoModal.id = "edit-todo-modal";

    const p = document.createElement("p");
    p.textContent = "Edit Todo";
    editTodoModal.appendChild(p);

    const editTodoForm = createEditTodoForm(currentUser, todo, project);
    editTodoModal.appendChild(editTodoForm);

    return editTodoModal;
}

export default createEditTodoModal;
