import Project from "./project";

let currentProject;
const projects = [];

function initializePage() {
    // Default, undeletable project that todos go into
    const inbox = new Project("Inbox");
    currentProject = inbox;
}

export { currentProject, projects, initializePage };
