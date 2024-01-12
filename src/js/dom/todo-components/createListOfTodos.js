import createTodoListItem from "./createTodoListItem";

// Here, list refers to the <ol> tag
function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

export default createListOfTodos;
