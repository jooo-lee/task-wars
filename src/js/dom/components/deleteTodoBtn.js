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

        // Remove todo <li> element from DOM
        const todoListItemToDelete = document.querySelector(
            `[uuid="${todo.uuid}"]`
        );
        todoListItemToDelete.remove();

        // Display quote in list of todos if project contains no more todos
        if (project.todos.length == 0) {
            document.querySelector("#list-of-todos-quote").style.display =
                "initial";
        }
    });
    return deleteTodoBtn;
}

export default createDeleteTodoBtn;
