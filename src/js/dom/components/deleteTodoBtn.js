import trashCanImg from "assets/trash-can.svg";

function createDeleteTodoBtn(currentUser, todo, project) {
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.classList.add("delete-todo-btn");

    const trashCan = new Image();
    trashCan.src = trashCanImg;
    trashCan.classList.add("trash-can-img");
    trashCan.alt = "Delete todo";
    deleteTodoBtn.appendChild(trashCan);

    deleteTodoBtn.addEventListener("click", function () {
        project.deleteTodo(todo);
        currentUser.updateLocalStorage();
        this.parentElement.parentElement.remove();
    });
    return deleteTodoBtn;
}

export default createDeleteTodoBtn;
