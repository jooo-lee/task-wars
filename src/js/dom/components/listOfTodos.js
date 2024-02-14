import createTodoListItem from "./todoListItem";

// Here, list refers to the <ul> tag
function createListOfTodos(currentUser, project) {
    const listOfTodos = document.createElement("ul");
    listOfTodos.id = "list-of-todos";

    // Create quote to display when current project has no todos
    const figure = document.createElement("figure");
    figure.id = "list-of-todos-quote";
    figure.classList.add("quote");

    const blockquote = document.createElement("blockquote");
    blockquote.textContent = '"I will initiate self-destruct."';
    figure.appendChild(blockquote);

    const figCaption = document.createElement("figcaption");
    figCaption.innerHTML = "&mdash; IG-11";
    figure.appendChild(figCaption);

    // Hide quote if current project has todos
    if (project.todos.length != 0) {
        figure.style.display = "none";
    }

    listOfTodos.appendChild(figure);

    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(currentUser, todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

export default createListOfTodos;
