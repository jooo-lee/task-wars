import { createDialog } from "./dialog";
import createAddProjectForm from "./addProjectForm";

function createAddProjectDialog(currentUser) {
    const addProjectDialog = createDialog();
    addProjectDialog.id = "add-project-dialog";

    const addProjectForm = createAddProjectForm(currentUser);
    addProjectDialog.appendChild(addProjectForm);

    return addProjectDialog;
}

export default createAddProjectDialog;
