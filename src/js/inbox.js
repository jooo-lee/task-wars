import Project from "./project";
import Todo from "./todo";

// Undeletable project that todos go into by default
const inbox = new Project("Inbox");

// Creating sample todos for testing
const task1 = new Todo("stretch", "toe touches", "today", "med");
const task2 = new Todo("work out", "pushups", "today", "high");
const task3 = new Todo("read", "10 pages", "today", "low");

// Adding sample todos
inbox.addTodo(task1);
inbox.addTodo(task2);
inbox.addTodo(task3);

export default inbox;
