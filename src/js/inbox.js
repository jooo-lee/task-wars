import Project from "./project";
import Todo from "./todo";

// Undeletable project that todos go into by default
const inbox = new Project("Inbox");

// Creating sample todos for testing
const task1 = new Todo("Stretch", "Toe touches", "2024-01-22", "Medium");
const task2 = new Todo("Work out", "Pushups", "2024-01-24", "High");
const task3 = new Todo("Read", "10 pages", "2024-02-14", "Low");

// Adding sample todos
inbox.addTodo(task1);
inbox.addTodo(task2);
inbox.addTodo(task3);

export default inbox;
