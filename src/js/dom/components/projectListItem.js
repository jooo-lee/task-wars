import { loadProject } from "../loadProject";
import createDeleteProjectBtn from "./deleteProjectBtn";

function createProjectListItem(currentUser, project) {
    const projectListItem = document.createElement("li");
    projectListItem.classList.add("project-list-item");
    projectListItem.setAttribute("uuid", project.uuid);

    const projectLink = document.createElement("a");
    projectLink.href = "#";
    projectLink.classList.add("project");
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
