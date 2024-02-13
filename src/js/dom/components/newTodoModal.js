import { createModal } from "./modal";
import createNewTodoForm from "./newTodoForm";

function createNewTodoModal(currentUser, project) {
    const newTodoModal = createModal("New Todo");
    newTodoModal.classList.add("modal");
    newTodoModal.id = "new-todo-modal";

    const newTodoForm = createNewTodoForm(currentUser, project);
    newTodoModal.appendChild(newTodoForm);

    return newTodoModal;
}

export default createNewTodoModal;
