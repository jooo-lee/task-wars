import trashCanImg from "assets/trash-can.svg";
import { loadProject, currentProject } from "../loadProject";

function createDeleteProjectBtn(currentUser, project) {
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete-project-btn");

    const trashCan = new Image();
    trashCan.src = trashCanImg;
    trashCan.classList.add("trash-can-img");
    trashCan.alt = "Delete project";
    deleteProjectBtn.appendChild(trashCan);

    deleteProjectBtn.addEventListener("click", function () {
        // If project we're deleting is being displayed, load inbox into DOM
        if (currentProject == project) {
            loadProject(currentUser, currentUser.getInbox());
        }

        currentUser.deleteProject(project);
        currentUser.updateLocalStorage();
        this.parentElement.remove();
    });
    return deleteProjectBtn;
}

export default createDeleteProjectBtn;
