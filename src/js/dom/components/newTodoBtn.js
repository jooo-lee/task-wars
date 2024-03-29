import createNewTodoModal from "./newTodoModal";

function createNewTodoBtn(currentUser, project) {
    const newTodoBtn = document.createElement("button");
    newTodoBtn.id = "new-todo-btn";
    newTodoBtn.textContent = "+ New todo";

    newTodoBtn.addEventListener("click", () => {
        const newTodoModal = createNewTodoModal(currentUser, project);

        const body = document.querySelector("body");
        body.appendChild(newTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background

        newTodoModal.showModal();
    });
    return newTodoBtn;
}

export default createNewTodoBtn;
