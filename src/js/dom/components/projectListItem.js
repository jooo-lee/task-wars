import loadProject from "../loadProject";

function createProjectListItem(currentUser, project) {
    const projectListItem = document.createElement("li");

    const projectLink = document.createElement("a");
    projectLink.href = "#";
    projectLink.textContent = project.title;
    projectLink.addEventListener("click", () => {
        loadProject(currentUser, project);
    });
    projectListItem.appendChild(projectLink);

    return projectListItem;
}

export default createProjectListItem;
