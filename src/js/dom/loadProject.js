import createListOfTodos from "./components/listOfTodos";
import createAddNewTodoBtn from "./components/newTodoBtn";

let currentProject;

function loadProject(project) {
    // Don't reload children in <main> if project is already displayed
    if (project == currentProject) {
        return;
    } else {
        currentProject = project;
    }

    const main = document.querySelector("main");
    main.replaceChildren();

    const tabTitle = document.createElement("h2");
    tabTitle.textContent = project.title;
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const addTodoBtn = createAddNewTodoBtn(project);
    main.appendChild(addTodoBtn);
}

export default loadProject;
