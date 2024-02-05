import { loadProject } from "../loadProject";
import createDeleteProjectBtn from "./deleteProjectBtn";

function createProjectListItem(currentUser, project) {
    const projectListItem = document.createElement("li");

    const projectLink = document.createElement("a");
    projectLink.href = "#";
    projectLink.textContent = project.title;
    projectLink.addEventListener("click", () => {
        loadProject(currentUser, project);
    });
    projectListItem.appendChild(projectLink);

    const deleteProjectBtn = createDeleteProjectBtn(currentUser, project);
    projectListItem.appendChild(deleteProjectBtn);

    return projectListItem;
}

export default createProjectListItem;
