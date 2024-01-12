import createAddNewTodoBtn from "./todo-components/createAddNewTodoBtn";
import createTodoListItem from "./todo-components/createTodoListItem";

// Here, list refers to the <ol> tag
function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

function loadProject(project) {
    const main = document.querySelector("main");

    const tabTitle = document.createElement("h2");
    tabTitle.textContent = project.title;
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const addTodoBtn = createAddNewTodoBtn(todosOfProject, project);
    main.appendChild(addTodoBtn);
}

export default loadProject;
