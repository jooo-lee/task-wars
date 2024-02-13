import { format } from "date-fns";

/* 
Returns a form with fields for the user to enter todo details.
Form submission behaviour, including the "enter" key being pressed, should be handled
in the modules that depend on this one.
*/

function createFormRow() {
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    return formRow;
}

function createTodoForm() {
    const todoForm = document.createElement("form");

    const titleFormRow = createFormRow();

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    titleLabel.setAttribute("for", "todo-title");
    titleFormRow.appendChild(titleLabel);

    const title = document.createElement("input");
    title.id = "todo-title";
    title.type = "text";
    title.name = "todo-title";
    title.required = true;
    title.placeholder = "Reclaim Mandalore";
    titleFormRow.appendChild(title);

    todoForm.appendChild(titleFormRow);

    const descriptionFormRow = createFormRow();

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description: ";
    descriptionLabel.setAttribute("for", "todo-description");
    descriptionFormRow.appendChild(descriptionLabel);

    const description = document.createElement("textarea");
    description.id = "todo-description";
    description.name = "todo-description";
    description.placeholder = "Defeat Moff Gideon and retrieve the darksaber";
    description.rows = "5";
    description.cols = "30";
    descriptionFormRow.appendChild(description);

    todoForm.appendChild(descriptionFormRow);

    const dueDateFormRow = createFormRow();

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date: ";
    dueDateLabel.setAttribute("for", "todo-due-date");
    dueDateFormRow.appendChild(dueDateLabel);

    const dueDate = document.createElement("input");
    dueDate.id = "todo-due-date";
    dueDate.value = format(new Date(), "yyyy-MM-dd");
    dueDate.type = "date";
    dueDate.name = "todo-due-date";
    dueDateFormRow.appendChild(dueDate);

    todoForm.appendChild(dueDateFormRow);

    const priorityFormRow = createFormRow();

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Priority: ";
    priorityLabel.setAttribute("for", "todo-priority");
    priorityFormRow.appendChild(priorityLabel);

    const priority = document.createElement("select");
    priority.id = "todo-priority";
    priority.name = "todo-priority";

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

    priorityFormRow.appendChild(priority);
    todoForm.appendChild(priorityFormRow);

    const submitBtn = document.createElement("button");
    submitBtn.id = "submit-todo-form-btn";
    submitBtn.value = "submit";
    submitBtn.type = "submit";
    submitBtn.textContent = "Submit";
    todoForm.appendChild(submitBtn);

    return todoForm;
}

export default createTodoForm;
