import inbox from "../inbox";
import createAddProjectDialog from "./components/addProjectDialog";
import loadProject from "./loadProject";

function initializePage() {
    handleAddProject();
    createInbox();
}

function createInbox() {
    loadProject(inbox);
    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        // if inbox is active tab, return
        // set inbox as active tab
        loadProject(inbox);
    });
}

function handleAddProject() {
    const addProjectBtn = document.querySelector("#add-project-btn");
    const projectList = document.querySelector("#project-list");
    addProjectBtn.addEventListener("click", () => {
        const addProjectDialog = createAddProjectDialog();
        projectList.after(addProjectDialog);
        addProjectDialog.show();
    });
}

export { initializePage };
