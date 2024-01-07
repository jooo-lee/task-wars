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

        // Create title of todo
        const todoTitle = document.createElement("p");
        todoTitle.textContent = todo.title;
        li.appendChild(todoTitle);

        todoContainer.appendChild(li);
    }
    main.appendChild(todoContainer);

    // Create button to add new todos to current project
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        // Display new todo
        const li = document.createElement("li");
        li.textContent = `${newTodo.title}`;
        todoContainer.appendChild(li);
    });
    main.appendChild(addTodoBtn);
}

export { initializePage };
