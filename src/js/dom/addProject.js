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
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const addProjectDialog = document.querySelector("#add-project-dialog");
        addProjectDialog.close();
        addProjectDialog.remove();
    });
    addProjectForm.appendChild(cancelBtn);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.value = "submit";
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(addProjectForm.elements["new-project-name"].value);
        const addProjectDialog = document.querySelector("#add-project-dialog");
        addProjectDialog.close();
        addProjectDialog.remove();
    });
    addProjectForm.appendChild(submitBtn);

    return addProjectForm;
}

function handleAddProject() {
    const addProjectBtn = document.querySelector("#add-project");
    const projectsList = document.querySelector("#project-list");
    addProjectBtn.addEventListener("click", () => {
        const addProjectDialog = document.createElement("dialog");
        addProjectDialog.id = "add-project-dialog";

        const addProjectForm = createAddProjectForm();
        addProjectDialog.appendChild(addProjectForm);

        projectsList.after(addProjectDialog);
        addProjectDialog.show();
    });
}

export default handleAddProject;
