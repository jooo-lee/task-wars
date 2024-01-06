import inbox from "./inbox";

function initializePage() {
    displayTodos(inbox);
    initializeInbox();
}

function initializeInbox() {
    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        // if inbox is active tab, return
        // set inbox as active tab
        displayTodos(inbox);
    });
}

function displayTodos(project) {
    const main = document.querySelector("main");

    const tabTitle = document.createElement("h4");
    tabTitle.textContent = project.title;
    main.appendChild(tabTitle);

    const todoContainer = document.createElement("ol");
    for (const todo of project.todos) {
        const li = document.createElement("li");
        li.textContent = `${todo.title}, ${todo.dueDate}`;
        todoContainer.appendChild(li);
    }
    main.appendChild(todoContainer);
}

export { initializePage };
