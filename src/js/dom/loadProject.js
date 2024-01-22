import createListOfTodos from "./components/listOfTodos";
import createAddNewTodoBtn from "./components/addNewTodoBtn";

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
