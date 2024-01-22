import { format } from "date-fns";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? dueDate : format(new Date(), "yyyy-MM-dd");
        this.priority = priority;
        this.complete = false;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateCompletion() {
        this.complete = !this.complete;
    }
}

export default Todo;
