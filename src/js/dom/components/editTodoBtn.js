import createEditTodoModal from "./editTodoModal";

function createEditTodoBtn(todo) {
    const editTodoBtn = document.createElement("button");
    editTodoBtn.textContent = "Edit todo";

    editTodoBtn.addEventListener("click", () => {
        const editTodoModal = createEditTodoModal(todo);

        const body = document.querySelector("body");
        body.appendChild(editTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background

        editTodoModal.showModal();
    });

    return editTodoBtn;
}

export default createEditTodoBtn;
