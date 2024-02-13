import { createModal } from "./modal";
import createEditTodoForm from "./editTodoForm";

function createEditTodoModal(currentUser, todo, project) {
    const editTodoModal = createModal("Edit Todo");
    editTodoModal.classList.add("modal");
    editTodoModal.id = "edit-todo-modal";

    const editTodoForm = createEditTodoForm(currentUser, todo, project);
    editTodoModal.appendChild(editTodoForm);

    return editTodoModal;
}

export default createEditTodoModal;
