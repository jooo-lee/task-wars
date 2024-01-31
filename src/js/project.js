class Project {
    #todos;

    constructor(title) {
        this.title = title;
        this.#todos = [];
    }

    getTodos() {
        return this.#todos;
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    deleteTodo(targetTodo) {
        const todoToBeDeleted = this.#todos.find(
            (todo) => todo.uuid === targetTodo.uuid
        );
        const indexOfTodoToBeDeleted = this.#todos.indexOf(todoToBeDeleted);

        if (indexOfTodoToBeDeleted > -1) {
            this.#todos.splice(indexOfTodoToBeDeleted, 1);
        }
    }
}

export default Project;
