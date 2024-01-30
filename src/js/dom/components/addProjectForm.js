import Project from "../../project";
import { closeDialog } from "./dialog";
import createProjectListItem from "./projectListItem";

function addProject(currentUser, projectTitle) {
    const newProject = new Project(projectTitle);
    currentUser.addProject(newProject);

    const projectList = document.querySelector("#project-list");
    const projectListItem = createProjectListItem(newProject);
    projectList.appendChild(projectListItem);

    const addProjectDialog = document.querySelector("#add-project-dialog");
    closeDialog(addProjectDialog);
}

function createAddProjectForm(currentUser) {
    const addProjectForm = document.createElement("form");
    addProjectForm.id = "add-project-form";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-project-title");
    addProjectForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.id = "new-project-title";
    title.type = "text";
    title.name = "new-project-title";
    title.required = true;
    title.placeholder = "Help Boba Fett";
    addProjectForm.appendChild(title);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.value = "cancel";
    cancelBtn.type = "button";
    cancelBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const addProjectDialog = document.querySelector("#add-project-dialog");
        closeDialog(addProjectDialog);
    });
    addProjectForm.appendChild(cancelBtn);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.value = "submit";
    addProjectForm.appendChild(submitBtn);

    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addProject(
            currentUser,
            addProjectForm.elements["new-project-title"].value
        );
    });

    return addProjectForm;
}

export default createAddProjectForm;
