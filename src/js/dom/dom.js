import createNewProjectDialog from "./components/newProjectDialog";
import { loadProject } from "./loadProject";

function initializePage(currentUser) {
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

export { initializePage };
