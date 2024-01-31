import createTodoListItem from "./todoListItem";

// Here, list refers to the <ol> tag
function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    listOfTodos.id = "list-of-todos";
    for (const todo of project.getTodos()) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

export default createListOfTodos;
