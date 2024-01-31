function closeDialog(dialog) {
    dialog.close();
    dialog.remove();
}

function createDialog() {
    const dialog = document.createElement("dialog");
    return dialog;
}

export { closeDialog, createDialog };
