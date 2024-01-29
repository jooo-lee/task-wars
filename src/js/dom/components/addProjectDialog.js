import { createDialog } from "./dialog";
import createAddProjectForm from "./addProjectForm";

function createAddProjectDialog() {
    const addProjectDialog = createDialog();
    addProjectDialog.id = "add-project-dialog";

    const addProjectForm = createAddProjectForm();
    addProjectDialog.appendChild(addProjectForm);

    return addProjectDialog;
}

export default createAddProjectDialog;
