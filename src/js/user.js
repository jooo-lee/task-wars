import Project from "./project";

class User {
    #projects;
    #inbox; // Default project that all users have, do not delete!

    constructor() {
        if (localStorage.length == 0) {
            this.#inbox = new Project("Inbox");
            localStorage.setItem("inbox", JSON.stringify(this.#inbox));
            this.#projects = [this.#inbox];
        } else {
            const parsedInbox = JSON.parse(localStorage.getItem("inbox"));
            // Create new Project object to add back object methods
            // since we cannot stores functions in JSON
            this.#inbox = new Project("Inbox");
            this.#inbox.uuid = parsedInbox.uuid;
            this.#inbox.title = parsedInbox.title;
            this.#inbox.todos = parsedInbox.todos;
            this.#projects = [this.#inbox];

            // Retrieve stored projects excluding inbox
            Object.keys(localStorage).forEach((key) => {
                if (key != "inbox") {
                    const parsedProject = JSON.parse(localStorage.getItem(key));
                    const projectWithMethods = new Project(parsedProject.title);
                    projectWithMethods.uuid = parsedProject.uuid;
                    projectWithMethods.todos = parsedProject.todos;
                    this.#projects.push(projectWithMethods);
                }
            });
        }
    }

    getInbox() {
        return this.#inbox;
    }

    getProjects() {
        return this.#projects;
    }

    addProject(project) {
        this.#projects.push(project);
        localStorage.setItem(`${project.uuid}`, JSON.stringify(project));
    }

    deleteProject(targetProject) {
        const projectToBeDeleted = this.#projects.find(
            (project) => project.uuid === targetProject.uuid
        );
        const indexOfProjectToBeDeleted =
            this.#projects.indexOf(projectToBeDeleted);

        if (indexOfProjectToBeDeleted > -1) {
            this.#projects.splice(indexOfProjectToBeDeleted, 1);
        }

        localStorage.removeItem(`${targetProject.uuid}`);
    }
}

export default User;
