import createNewProjectDialog from "./components/newProjectDialog";
import createProjectListItem from "./components/projectListItem";
import { loadProject } from "./loadProject";

function initializePage(currentUser) {
    loadSavedProjects(currentUser);
    handleNewProject(currentUser);
    createInbox(currentUser);
}

function createInbox(currentUser) {
    loadProject(currentUser, currentUser.getInbox());

    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        loadProject(currentUser, currentUser.getInbox());
    });
}

function handleNewProject(currentUser) {
    const newProjectBtn = document.querySelector("#new-project-btn");
    const projectList = document.querySelector("#project-list");
    newProjectBtn.addEventListener("click", () => {
        const newProjectDialog = createNewProjectDialog(currentUser);
        projectList.after(newProjectDialog);
        newProjectDialog.show();
    });
}

function loadSavedProjects(currentUser) {
    const projectList = document.querySelector("#project-list");

    currentUser.getProjects().forEach((project) => {
        const inboxUuid = JSON.parse(localStorage.getItem("inbox")).uuid;
        if (project.uuid == inboxUuid) return;
        const projectListItem = createProjectListItem(currentUser, project);
        projectList.appendChild(projectListItem);
    });
}

export { initializePage };
