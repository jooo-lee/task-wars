import Todo from "../todo";
import createHeading2 from "./createHeading2";
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

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        const todoListItem = createTodoListItem(newTodo, project);
        listOfTodos.appendChild(todoListItem);
    });
    return addTodoBtn;
}

function loadProject(project) {
    const main = document.querySelector("main");

    const tabTitle = createHeading2(project.title);
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const addTodoBtn = createAddNewTodoBtn(todosOfProject, project);
    main.appendChild(addTodoBtn);
}

export default loadProject;
