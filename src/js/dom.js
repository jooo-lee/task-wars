import inbox from "./inbox";
import Todo from "./todo";

function initializePage() {
    createInbox();
}

function createInbox() {
    loadProject(inbox);
    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        // if inbox is active tab, return
        // set inbox as active tab
        loadProject(inbox);
    });
}

function loadProject(project) {
    const main = document.querySelector("main");

    // Display title of current project
    const tabTitle = document.createElement("h2");
    tabTitle.textContent = project.title;
    main.appendChild(tabTitle);

    // Get todos of current project and display them
    const todoContainer = document.createElement("ol");
    for (const todo of project.todos) {
        const li = document.createElement("li");

        // Display title of todo
        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.title;
        li.appendChild(todoTitle);

        // Create button to delete todo
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.textContent = "Delete todo";
        deleteTodoBtn.addEventListener("click", function () {
            project.deleteTodo(todo.title);
            this.parentElement.remove();
        });
        li.appendChild(deleteTodoBtn);

        todoContainer.appendChild(li);
    }
    main.appendChild(todoContainer);

    // Create button to add new todos
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        const li = document.createElement("li");

        // Display title of new todo
        const newTodoTitle = document.createElement("p");
        newTodoTitle.textContent = newTodo.title;
        li.appendChild(newTodoTitle);

        // Create button to delete this todo
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.textContent = "Delete todo";
        deleteTodoBtn.addEventListener("click", function () {
            project.deleteTodo(newTodo.title);
            this.parentElement.remove();
        });
        li.appendChild(deleteTodoBtn);

        todoContainer.appendChild(li);
    });
    main.appendChild(addTodoBtn);
}

export { initializePage };
