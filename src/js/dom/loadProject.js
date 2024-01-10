import Todo from "../todo";
import createHeading2 from "./createHeading2";
import createParagraph from "./createParagraph";

function createDeleteTodoBtn(todo, project) {
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.textContent = "Delete todo";
    deleteTodoBtn.addEventListener("click", function () {
        project.deleteTodo(todo);
        this.parentElement.remove();
    });
    return deleteTodoBtn;
}

function closeModal(modal) {
    modal.close();
    modal.remove();
    document.querySelector("body").style.overflow = "auto"; // Allow for scrolling after modal is closed
}

function createViewTodoDetailsBtn(todo) {
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "View details";
    todoDetailsBtn.addEventListener("click", function () {
        const modal = document.createElement("dialog");

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            closeModal(modal);
        });
        modal.appendChild(closeBtn);

        const p = createParagraph("Todo details");
        modal.appendChild(p);

        // Close modal when clicking outside of it
        modal.addEventListener("click", function (e) {
            const modalDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < modalDimensions.left ||
                e.clientX > modalDimensions.right ||
                e.clientY < modalDimensions.top ||
                e.clientY > modalDimensions.bottom
            ) {
                closeModal(modal);
            }
        });

        const body = document.querySelector("body");
        body.appendChild(modal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        modal.showModal();
    });
    return todoDetailsBtn;
}

function createTodoListItem(todo, project) {
    const li = document.createElement("li");

    const todoTitle = createParagraph(todo.title);
    li.appendChild(todoTitle);

    const todoDueDate = createParagraph(todo.dueDate);
    li.appendChild(todoDueDate);

    const todoDetailsBtn = createViewTodoDetailsBtn(todo);
    li.appendChild(todoDetailsBtn);

    const deleteTodoBtn = createDeleteTodoBtn(todo, project);
    li.appendChild(deleteTodoBtn);

    return li;
}

function createListOfTodos(project) {
    const listOfTodos = document.createElement("ol");
    for (const todo of project.todos) {
        const todoListItem = createTodoListItem(todo, project);
        listOfTodos.appendChild(todoListItem);
    }
    return listOfTodos;
}

function createAddNewTodoBtn(listOfTodos, project) {
    const addTodoBtn = document.createElement("button");
    addTodoBtn.textContent = "Add todo";
    addTodoBtn.addEventListener("click", () => {
        const title = prompt("Title:");
        const newTodo = new Todo(title);
        project.addTodo(newTodo);

        const todoListItem = createTodoListItem(newTodo, project);
        listOfTodos.appendChild(todoListItem);
    });
    return addTodoBtn;
}

function loadProject(project) {
    const main = document.querySelector("main");

    const tabTitle = createHeading2(project.title);
    main.appendChild(tabTitle);

    const todosOfProject = createListOfTodos(project);
    main.appendChild(todosOfProject);

    const addTodoBtn = createAddNewTodoBtn(todosOfProject, project);
    main.appendChild(addTodoBtn);
}

export default loadProject;
