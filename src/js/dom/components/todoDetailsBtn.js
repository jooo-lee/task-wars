import createTodoDetailsModal from "./todoDetailsModal";

function createTodoDetailsBtn(todo) {
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "Details";
    todoDetailsBtn.addEventListener("click", function () {
        const todoDetailsModal = createTodoDetailsModal(todo);

        const body = document.querySelector("body");
        body.appendChild(todoDetailsModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        todoDetailsModal.showModal();
    });
    return todoDetailsBtn;
}

export default createTodoDetailsBtn;
