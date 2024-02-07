function createDeleteTodoBtn(currentUser, todo, project) {
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.textContent = "Delete todo";
    deleteTodoBtn.addEventListener("click", function () {
        project.deleteTodo(todo);
        currentUser.updateLocalStorage();
        this.parentElement.remove();
    });
    return deleteTodoBtn;
}

export default createDeleteTodoBtn;
