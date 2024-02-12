import createEditTodoModal from "./editTodoModal";
import squareEditImg from "assets/square-edit.svg";

function createEditTodoBtn(currentUser, todo, project) {
    const editTodoBtn = document.createElement("button");
    editTodoBtn.classList.add("edit-todo-btn");

    const squareEdit = new Image();
    squareEdit.src = squareEditImg;
    squareEdit.classList.add("square-edit-img");
    squareEdit.alt = "Edit todo";
    editTodoBtn.appendChild(squareEdit);

    editTodoBtn.addEventListener("click", () => {
        const editTodoModal = createEditTodoModal(currentUser, todo, project);

        const body = document.querySelector("body");
        body.appendChild(editTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background

        editTodoModal.showModal();
    });

    return editTodoBtn;
}

export default createEditTodoBtn;
