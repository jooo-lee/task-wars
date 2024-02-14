import createNewProjectDialog from "./components/newProjectDialog";
import createProjectListItem from "./components/projectListItem";
import { loadProject } from "./loadProject";
import inboxIconImg from "assets/inbox.svg";

function initializePage(currentUser) {
    loadSavedProjects(currentUser);
    handleNewProject(currentUser);
    createInbox(currentUser);
}

function createInbox(currentUser) {
    loadProject(currentUser, currentUser.getInbox());

    const inboxLink = document.querySelector("#inbox");

    const inboxIcon = new Image();
    inboxIcon.src = inboxIconImg;
    inboxIcon.id = "inbox-img";
    inboxIcon.alt = "Inbox icon image";
    inboxLink.prepend(inboxIcon);

    inboxLink.addEventListener("click", () => {
        loadProject(currentUser, currentUser.getInbox());
    });
}

function handleNewProject(currentUser) {
    const newProjectBtn = document.querySelector("#new-project-btn");
    newProjectBtn.addEventListener("click", () => {
        if (
            !document.body.contains(
                document.querySelector("#new-project-dialog")
            )
        ) {
            const newProjectDialog = createNewProjectDialog(currentUser);
            newProjectBtn.after(newProjectDialog);
            newProjectDialog.show();
        }
    });
}

function loadSavedProjects(currentUser) {
    const projectList = document.querySelector("#project-list");

    currentUser.getNonInboxProjects().forEach((project) => {
        const projectListItem = createProjectListItem(currentUser, project);
        projectList.appendChild(projectListItem);
    });
}

export { initializePage };
