import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.uuid = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate ? dueDate : format(new Date(), "yyyy-MM-dd");
        this.priority = priority;
        this.complete = false;
    }
}

export default Todo;
