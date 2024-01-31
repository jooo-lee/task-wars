import createAddProjectDialog from "./components/addProjectDialog";
import loadProject from "./loadProject";

function initializePage(currentUser) {
    handleAddProject(currentUser);
    createInbox(currentUser);
}

function createInbox(currentUser) {
    loadProject(currentUser, currentUser.getInbox());

    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        loadProject(currentUser, currentUser.getInbox());
    });
}

function handleAddProject(currentUser) {
    const addProjectBtn = document.querySelector("#add-project-btn");
    const projectList = document.querySelector("#project-list");
    addProjectBtn.addEventListener("click", () => {
        const addProjectDialog = createAddProjectDialog(currentUser);
        projectList.after(addProjectDialog);
        addProjectDialog.show();
    });
}

export { initializePage };
