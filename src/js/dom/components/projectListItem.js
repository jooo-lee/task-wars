function createProjectListItem(project) {
    const projectListItem = document.createElement("li");
    projectListItem.textContent = project.title;
    return projectListItem;
}

export default createProjectListItem;
