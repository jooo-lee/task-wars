import createNewProjectDialog from "./components/newProjectDialog";
import createProjectListItem from "./components/projectListItem";
import { loadProject } from "./loadProject";
import groguFavicon from "assets/grogu.png";
import mythosaurLogoImg from "assets/logo.png";
import inboxIconImg from "assets/inbox.svg";

function initializePage(currentUser) {
    createFavicon();
    loadHeaderLogo();
    loadSavedProjects(currentUser);
    handleNewProject(currentUser);
    createInbox(currentUser);
}

function createFavicon() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = groguFavicon;
    link.type = "image/x-icon";
    document.head.appendChild(link);
}

function loadHeaderLogo() {
    const header = document.querySelector("header");

    const mythosaurLogo = new Image();
    mythosaurLogo.src = mythosaurLogoImg;
    mythosaurLogo.id = "mythosaur-logo";
    mythosaurLogo.alt = "Mythosaur skull emblem";
    header.prepend(mythosaurLogo);
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
    const savedProjects = currentUser.getNonInboxProjects();

    // If user has non-inbox projects, don't show quote in project list
    if (savedProjects.length != 0) {
        document.querySelector("#project-list-quote").style.display = "none";
    }

    savedProjects.forEach((project) => {
        const projectListItem = createProjectListItem(currentUser, project);
        projectList.appendChild(projectListItem);
    });
}

export { initializePage };
