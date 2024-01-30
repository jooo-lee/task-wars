import createListOfTodos from "./components/listOfTodos";
import createAddNewTodoBtn from "./components/newTodoBtn";

function loadProject(project) {
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
