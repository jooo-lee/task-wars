/* 
Returns a form with fields for the user to enter todo details.
Form submission behaviour, including the "enter" key being pressed, should be handled
in the modules that depend on this one.
*/

function createTodoForm() {
    const todoForm = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "title");
    todoForm.appendChild(titleLabel);

    const title = document.createElement("input");
    title.id = "title";
    title.type = "text";
    title.name = "title";
    title.required = true;
    title.placeholder = "Reclaim Mandalore";
    todoForm.appendChild(title);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.setAttribute("for", "description");
    todoForm.appendChild(descriptionLabel);

    const description = document.createElement("textarea");
    description.id = "description";
    description.name = "description";
    description.placeholder = "Defeat Moff Gideon and retrieve the darksaber";
    description.rows = "10";
    description.cols = "30";
    todoForm.appendChild(description);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date: ";
    dueDateLabel.setAttribute("for", "due-date");
    todoForm.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.id = "due-date";
    dueDate.type = "date";
    dueDate.name = "due-date";
    todoForm.appendChild(dueDate);

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.setAttribute("for", "priority");
    todoForm.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.id = "priority";
    priority.name = "priority";

    const lowPriority = document.createElement("option");
    lowPriority.value = "Low";
    lowPriority.textContent = lowPriority.value;
    priority.appendChild(lowPriority);

    const mediumPriority = document.createElement("option");
    mediumPriority.value = "Medium";
    mediumPriority.textContent = mediumPriority.value;
    priority.appendChild(mediumPriority);

    const highPriority = document.createElement("option");
    highPriority.value = "High";
    highPriority.textContent = highPriority.value;
    priority.appendChild(highPriority);

    todoForm.appendChild(priority);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    todoForm.appendChild(submitBtn);

    return todoForm;
}

export default createTodoForm;
