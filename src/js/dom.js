import inbox from "./inbox";

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
        li.textContent = `${todo.title}`;
        todoContainer.appendChild(li);
    }
    main.appendChild(todoContainer);
}

export { initializePage };
