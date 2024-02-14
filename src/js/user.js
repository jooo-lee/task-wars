import Project from "./project";

class User {
    #projects;
    #inbox; // Default project that all users have, do not delete!

    constructor() {
        this.#loadLocalStorageProjects();
    }

    #loadLocalStorageProjects() {
        if (!localStorage.getItem("projects")) {
            this.#inbox = new Project("Inbox");
            this.#inbox.isDefault = true;
            this.#projects = [this.#inbox];
            localStorage.setItem("projects", JSON.stringify(this.#projects));
        } else {
            const parsedProjects = JSON.parse(localStorage.getItem("projects"));
            const parsedInbox = parsedProjects.find((project) =>
                Object.hasOwn(project, "isDefault")
            );
            // Create new Project object to add back object methods
            // since we cannot stores functions in JSON
            this.#inbox = new Project("Inbox");
            this.#inbox.uuid = parsedInbox.uuid;
            this.#inbox.title = parsedInbox.title;
            this.#inbox.todos = parsedInbox.todos;
            this.#inbox.isDefault = true;
            this.#projects = [this.#inbox];

            // Remove inbox from parsedProjects for easier iteration
            const parsedInboxIndex = parsedProjects.indexOf(parsedInbox);
            parsedProjects.splice(parsedInboxIndex, 1);

            // Retrieve stored projects, excluding inbox
            parsedProjects.forEach((project) => {
                const projectWithMethods = new Project(project.title);
                projectWithMethods.uuid = project.uuid;
                projectWithMethods.todos = project.todos;
                this.#projects.push(projectWithMethods);
            });
        }
    }

    updateLocalStorage() {
        localStorage.setItem("projects", JSON.stringify(this.#projects));
    }

    getInbox() {
        return this.#inbox;
    }

    getNonInboxProjects() {
        const nonInboxProjects = this.#projects.slice();
        const inboxIndex = this.#projects.indexOf(this.getInbox());
        nonInboxProjects.splice(inboxIndex, 1);
        return nonInboxProjects;
    }

    addProject(project) {
        this.#projects.push(project);
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
    }
}

export default User;
