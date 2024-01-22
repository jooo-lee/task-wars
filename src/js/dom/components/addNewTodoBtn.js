import createNewTodoModal from "./newTodoModal";

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";

    addTodoBtn.addEventListener("click", () => {
        const newTodoModal = createNewTodoModal(listOfTodos, project);

        const body = document.querySelector("body");
        body.appendChild(newTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background

        newTodoModal.showModal();
    });
    return addTodoBtn;
}

export default createAddNewTodoBtn;
