import Project from "./project";

class User {
    #projects = []; // Later on we will load the user's projects using local storage

    get projects() {
        return this.#projects;
    }

    addProject(title) {
        const newProject = new Project(title);
        userProjects.push(newProject);
    }
}

export default User;
