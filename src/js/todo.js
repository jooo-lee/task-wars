import { format } from "date-fns";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? dueDate : format(new Date(), "yyyy-MM-dd");
        this.priority = priority;
        this.complete = false;
    }
}

export default Todo;
