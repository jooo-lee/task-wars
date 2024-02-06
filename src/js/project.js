import { v4 as uuidv4 } from "uuid";

class Project {
    constructor(title) {
        this.uuid = uuidv4();
        this.title = title;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.#updateThisProjectInLocalStorage();
    }

    deleteTodo(targetTodo) {
        const todoToBeDeleted = this.todos.find(
            (todo) => todo.uuid === targetTodo.uuid
        );
        const indexOfTodoToBeDeleted = this.todos.indexOf(todoToBeDeleted);

        if (indexOfTodoToBeDeleted > -1) {
            this.todos.splice(indexOfTodoToBeDeleted, 1);
        }

        this.#updateThisProjectInLocalStorage();
    }

    #updateThisProjectInLocalStorage() {
        if (localStorage.getItem(this.uuid)) {
            localStorage.setItem(this.uuid, JSON.stringify(this));
        } else {
            const inboxUuid = JSON.parse(localStorage.getItem("inbox")).uuid;
            if (this.uuid == inboxUuid) {
                localStorage.setItem("inbox", JSON.stringify(this));
            }
        }
    }
}

export default Project;
