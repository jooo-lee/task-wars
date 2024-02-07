import { createModal } from "./modal";
import createNewTodoForm from "./newTodoForm";

function createNewTodoModal(currentUser, project) {
    const newTodoModal = createModal();
    newTodoModal.id = "new-todo-modal";

    const p = document.createElement("p");
    p.textContent = "New Todo";
    newTodoModal.appendChild(p);

    const newTodoForm = createNewTodoForm(currentUser, project);
    newTodoModal.appendChild(newTodoForm);

    return newTodoModal;
}

export default createNewTodoModal;
