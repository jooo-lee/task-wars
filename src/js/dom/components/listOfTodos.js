import createTodoListItem from "./todoListItem";

// Here, list refers to the <ul> tag
function createListOfTodos(project) {
    const listOfTodos = document.createElement("ul");
    listOfTodos.id = "list-of-todos";
    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

export default createListOfTodos;
