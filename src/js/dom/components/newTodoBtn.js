import createNewTodoModal from "./newTodoModal";

function createNewTodoBtn(project) {
    const newTodoBtn = document.createElement("button");
    newTodoBtn.textContent = "New todo";

    newTodoBtn.addEventListener("click", () => {
        const newTodoModal = createNewTodoModal(project);

        const body = document.querySelector("body");
        body.appendChild(newTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background

        newTodoModal.showModal();
    });
    return newTodoBtn;
}

export default createNewTodoBtn;
