import Todo from "../../todo";
import { createModal, closeModal } from "./modal";
import createTodoListItem from "./todoListItem";

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const newTodoModal = createModal();

        const p = document.createElement("p");
        p.textContent = "Add Todo";
        newTodoModal.appendChild(p);

        const newTodoForm = document.createElement("form");

        const titleLabel = document.createElement("label");
        titleLabel.textContent = "Title: ";
        titleLabel.for = "title";
        newTodoForm.appendChild(titleLabel);

        const title = document.createElement("input");
        title.type = "text";
        title.name = "title";
        title.required = true;
        title.placeholder = "Reclaim Mandalore";
        newTodoForm.appendChild(title);

        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description: ";
        descriptionLabel.for = "description";
        newTodoForm.appendChild(descriptionLabel);

        const description = document.createElement("textarea");
        description.name = "description";
        description.placeholder =
            "Defeat Moff Gideon and retrieve the darksaber";
        description.rows = "10";
        description.cols = "30";
        newTodoForm.appendChild(description);

        const dueDateLabel = document.createElement("label");
        dueDateLabel.textContent = "Due Date: ";
        dueDateLabel.for = "due-date";
        newTodoForm.appendChild(dueDateLabel);

        const dueDate = document.createElement("input");
        dueDate.type = "date";
        dueDate.name = "due-date";
        newTodoForm.appendChild(dueDate);

        const priorityLabel = document.createElement("label");
        priorityLabel.textContent = "Priority: ";
        priorityLabel.for = "priority";
        newTodoForm.appendChild(priorityLabel);

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

        newTodoForm.appendChild(priority);

        const submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.textContent = "Submit";
        newTodoForm.appendChild(submitBtn);

        newTodoForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const newTodo = new Todo(
                this.elements["title"].value,
                this.elements["description"].value,
                this.elements["due-date"].value,
                this.elements["priority"].value
            );

            project.addTodo(newTodo);

            const todoListItem = createTodoListItem(newTodo, project);
            listOfTodos.appendChild(todoListItem);

            closeModal(newTodoModal);
        });

        newTodoModal.appendChild(newTodoForm);

        const body = document.querySelector("body");
        body.appendChild(newTodoModal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        newTodoModal.showModal();
    });
    return addTodoBtn;
}

export default createAddNewTodoBtn;
