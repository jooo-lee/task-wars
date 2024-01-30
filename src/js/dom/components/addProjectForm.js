import Project from "../../project";
import { closeDialog } from "./dialog";
import createProjectListItem from "./projectListItem";

function createAddProjectForm(currentUser) {
    const addProjectForm = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-project-title");
    addProjectForm.appendChild(titleLabel);

    const title = document.createElement("input");
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
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Prevent user from creating new project with no title
        if (!addProjectForm.elements["new-project-title"].value) {
            addProjectForm.reportValidity();
            return;
        }

        const newProject = new Project(
            addProjectForm.elements["new-project-title"].value
        );
        currentUser.addProject(newProject);

        console.log(currentUser.projects); // TODO: Display new project in DOM here
        const projectList = document.querySelector("#project-list");
        const projectListItem = createProjectListItem(newProject);
        projectList.appendChild(projectListItem);

        const addProjectDialog = document.querySelector("#add-project-dialog");
        closeDialog(addProjectDialog);
    });
    addProjectForm.appendChild(submitBtn);

    return addProjectForm;
}

export default createAddProjectForm;
