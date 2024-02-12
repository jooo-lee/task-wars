import createListOfTodos from "./components/listOfTodos";
import createNewTodoBtn from "./components/newTodoBtn";

let currentProject;

function loadProject(currentUser, project) {
    const main = document.querySelector("main");

    if (!currentProject) {
        // No project has been loaded yet, load inbox
        currentProject = currentUser.getInbox();
    } else if (currentProject == project) {
        // Desired project is already loaded, do not load again
        return;
    } else {
        // Clear <main> and load new project
        currentProject = project;
        main.replaceChildren();
    }

    const currentProjectTitle = document.createElement("h2");
    currentProjectTitle.id = "current-project-title";
    currentProjectTitle.textContent = project.title;
    main.appendChild(currentProjectTitle);

    const todosOfProject = createListOfTodos(currentUser, project);
    main.appendChild(todosOfProject);

    const newTodoBtn = createNewTodoBtn(currentUser, project);
    main.appendChild(newTodoBtn);
}

export { loadProject, currentProject };
