import inbox from "../inbox";
import loadProject from "./loadProject";

function initializePage() {
    createInbox();
}

function createInbox() {
    loadProject(inbox);
    const inboxLink = document.querySelector("#inbox");
    inboxLink.addEventListener("click", () => {
        // if inbox is active tab, return
        // set inbox as active tab
        loadProject(inbox);
    });
}

export { initializePage };
