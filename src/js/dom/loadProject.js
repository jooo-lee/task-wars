import createListOfTodos from "./components/createListOfTodos";
import createAddNewTodoBtn from "./components/createAddNewTodoBtn";

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
