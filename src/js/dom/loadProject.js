import Todo from "../todo";
import createHeading2 from "./createHeading2";
import createParagraph from "./createParagraph";

function createDeleteTodoBtn(todoToBeDeleted, project) {
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.textContent = "Delete todo";
    deleteTodoBtn.addEventListener("click", function () {
        project.deleteTodo(todoToBeDeleted.title);
        this.parentElement.remove();
    });
    return deleteTodoBtn;
}

function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    for (const todo of project.todos) {
        const li = document.createElement("li");

        const todoTitle = createParagraph(todo.title);
        li.appendChild(todoTitle);

        const deleteTodoBtn = createDeleteTodoBtn(todo, project);
        li.appendChild(deleteTodoBtn);

        listOfTodos.appendChild(li);
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

        const li = document.createElement("li");

        const newTodoTitle = createParagraph(newTodo.title);
        li.appendChild(newTodoTitle);

        const deleteTodoBtn = createDeleteTodoBtn(newTodo, project);
        li.appendChild(deleteTodoBtn);

        listOfTodos.appendChild(li);
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
