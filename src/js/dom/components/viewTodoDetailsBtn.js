import createTodoDetailsModal from "./todoDetailsModal";

function createViewTodoDetailsBtn(todo) {
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "View details";
    todoDetailsBtn.addEventListener("click", function () {
        const todoDetailsModal = createTodoDetailsModal(todo);

        const body = document.querySelector("body");
        body.appendChild(todoDetailsModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        todoDetailsModal.showModal();
    });
    return todoDetailsBtn;
}

export default createViewTodoDetailsBtn;
