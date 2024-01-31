import loadProject from "../loadProject";

function createDeleteProjectBtn(currentUser, project) {
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete project";
    deleteProjectBtn.addEventListener("click", function () {
        // If project we're deleting is being displayed, load inbox into DOM
        if (currentUser.currentProject == project) {
            loadProject(currentUser, currentUser.getInbox());
        }

        currentUser.deleteProject(project);
        this.parentElement.remove();
    });
    return deleteProjectBtn;
}

export default createDeleteProjectBtn;
