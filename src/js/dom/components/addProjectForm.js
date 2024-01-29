import { closeDialog } from "./dialog";

function createAddProjectForm() {
    const addProjectForm = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-project-title");
    addProjectForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.type = "text";
    title.name = "new-project-name";
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
        console.log(addProjectForm.elements["new-project-name"].value);
        const addProjectDialog = document.querySelector("#add-project-dialog");
        closeDialog(addProjectDialog);
    });
    addProjectForm.appendChild(submitBtn);

    return addProjectForm;
}

export default createAddProjectForm;
