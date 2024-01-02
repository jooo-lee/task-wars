class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    deleteTodo(todoName) {
        const todoToBeDeleted = this.todos.find(
            (todo) => todo.title === todoName
        );
        const indexOfTodoToBeDeleted = this.todos.indexOf(todoToBeDeleted);

        if (indexOfTodoToBeDeleted > -1) {
            this.todos.splice(indexOfTodoToBeDeleted, 1);
        }
    }
}

export default Project;
