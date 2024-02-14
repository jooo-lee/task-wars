import Project from "../../project";
import { loadProject } from "../loadProject";
import { closeDialog } from "./dialog";
import createProjectListItem from "./projectListItem";

function addNewProject(currentUser, projectTitle) {
    // Hide quote in project list (user will have at least project)
    document.querySelector("#project-list-quote").style.display = "none";

    const newProject = new Project(projectTitle);
    currentUser.addProject(newProject);
    currentUser.updateLocalStorage();

    const projectList = document.querySelector("#project-list");
    const projectListItem = createProjectListItem(currentUser, newProject);
    projectList.appendChild(projectListItem);

    loadProject(currentUser, newProject);

    const newProjectDialog = document.querySelector("#new-project-dialog");
    closeDialog(newProjectDialog);
}

function createNewProjectForm(currentUser) {
    const newProjectForm = document.createElement("form");
    newProjectForm.id = "new-project-form";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-project-title");
    newProjectForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.id = "new-project-title";
    title.type = "text";
    title.name = "new-project-title";
    title.required = true;
    title.placeholder = "Help Boba Fett";
    newProjectForm.appendChild(title);

    const btnsContainer = document.createElement("div");
    btnsContainer.id = "new-project-form-btns";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.value = "cancel";
    cancelBtn.type = "button";
    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const newProjectDialog = document.querySelector("#new-project-dialog");
        closeDialog(newProjectDialog);
    });
    btnsContainer.appendChild(cancelBtn);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.value = "submit";
    btnsContainer.appendChild(submitBtn);

    newProjectForm.appendChild(btnsContainer);

    newProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewProject(
            currentUser,
            newProjectForm.elements["new-project-title"].value
        );
    });

    return newProjectForm;
}

export default createNewProjectForm;
