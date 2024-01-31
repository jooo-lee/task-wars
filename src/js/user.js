class User {
    #projects = []; // Later on we will load the user's projects using local storage

    get projects() {
        return this.#projects;
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
