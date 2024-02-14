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

        // Remove project <li> element from DOM
        const projectListItemToDelete = document.querySelector(
            `[uuid="${project.uuid}"]`
        );
        projectListItemToDelete.remove();

        // Display quote in project list if user has no more non-inbox projects
        if (currentUser.getNonInboxProjects().length == 0) {
            document.querySelector("#project-list-quote").style.display =
                "initial";
        }
    });
    return deleteProjectBtn;
}

export default createDeleteProjectBtn;
