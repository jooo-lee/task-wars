import createListOfTodos from "./components/listOfTodos";
import createNewTodoBtn from "./components/newTodoBtn";

function loadProject(currentUser, project) {
    const main = document.querySelector("main");

    // main.hasChildNodes() handles edge case where
    // currentUser.currentProject == inbox and project == inbox,
    // but inbox hasn't been loaded into the DOM yet
    if (project == currentUser.currentProject && main.hasChildNodes()) {
        // Don't reload children in <main> if project is already displayed
        return;
    }

    if (project != currentUser.currentProject) {
        currentUser.currentProject = project;
        main.replaceChildren();
    }

    const tabTitle = document.createElement("h2");
    tabTitle.textContent = project.title;
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const newTodoBtn = createNewTodoBtn(project);
    main.appendChild(newTodoBtn);
}

export default loadProject;
