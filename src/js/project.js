import { v4 as uuidv4 } from "uuid";

class Project {
    #todos;

    constructor(title) {
        this.uuid = uuidv4();
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
