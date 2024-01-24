function createTodoForm(project, handleSubmit) {
    const todoForm = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.for = "title";
    todoForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.required = true;
    title.placeholder = "Reclaim Mandalore";
    todoForm.appendChild(title);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.for = "description";
    todoForm.appendChild(descriptionLabel);

    const description = document.createElement("textarea");
    description.name = "description";
    description.placeholder = "Defeat Moff Gideon and retrieve the darksaber";
    description.rows = "10";
    description.cols = "30";
    todoForm.appendChild(description);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date: ";
    dueDateLabel.for = "due-date";
    todoForm.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.name = "due-date";
    todoForm.appendChild(dueDate);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.for = "priority";
    todoForm.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.name = "priority";

    const lowPriority = document.createElement("option");
    lowPriority.value = "low-priority";
    lowPriority.textContent = "Low Priority";
    priority.appendChild(lowPriority);

    const mediumPriority = document.createElement("option");
    mediumPriority.value = "medium-priority";
    mediumPriority.textContent = "Medium Priority";
    priority.appendChild(mediumPriority);

    const highPriority = document.createElement("option");
    highPriority.value = "high-priority";
    highPriority.textContent = "High Priority";
    priority.appendChild(highPriority);

    todoForm.appendChild(priority);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    todoForm.appendChild(submitBtn);

    // Handle "enter" key press when focused on input fields in todo form
    const elementsSubmittedOnEnter = [title, dueDate, priority];
    elementsSubmittedOnEnter.forEach((elem) => {
        elem.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                e.preventDefault();
                todoForm.checkValidity()
                    ? handleSubmit(project)
                    : todoForm.reportValidity();
            }
        });
    });

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        handleSubmit(project);
    });

    return todoForm;
}

export default createTodoForm;
