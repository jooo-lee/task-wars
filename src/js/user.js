class User {
    #projects = []; // Later on we will load the user's projects using local storage

    get projects() {
        return this.#projects;
    }

    addProject(project) {
        this.#projects.push(project);
    }
}

export default User;
