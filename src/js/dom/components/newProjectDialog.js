import { createDialog } from "./dialog";
import createNewProjectForm from "./newProjectForm";

function createNewProjectDialog(currentUser) {
    const newProjectDialog = createDialog();
    newProjectDialog.id = "new-project-dialog";

    const newProjectForm = createNewProjectForm(currentUser);
    newProjectDialog.appendChild(newProjectForm);

    return newProjectDialog;
}

export default createNewProjectDialog;
