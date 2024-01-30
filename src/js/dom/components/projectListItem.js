import loadProject from "../loadProject";

function createProjectListItem(project) {
    const projectListItem = document.createElement("li");

    const projectLink = document.createElement("a");
    projectLink.href = "#";
    projectLink.textContent = project.title;
    projectLink.addEventListener("click", () => {
        loadProject(project);
    });
    projectListItem.appendChild(projectLink);

    return projectListItem;
}

export default createProjectListItem;
