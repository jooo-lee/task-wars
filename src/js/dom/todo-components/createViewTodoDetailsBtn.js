function closeModal(modal) {
    modal.close();
    modal.remove();
    document.querySelector("body").style.overflow = "auto"; // Allow for scrolling after modal is closed
}

function createViewTodoDetailsBtn(todo) {
    const todoDetailsBtn = document.createElement("button");
    todoDetailsBtn.textContent = "View details";
    todoDetailsBtn.addEventListener("click", function () {
        const modal = document.createElement("dialog");

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.addEventListener("click", function () {
            closeModal(modal);
        });
        modal.appendChild(closeBtn);

        const p = document.createElement("p");
        p.textContent = "Todo details";
        modal.appendChild(p);

        // Close modal when clicking outside of it
        modal.addEventListener("click", function (e) {
            const modalDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < modalDimensions.left ||
                e.clientX > modalDimensions.right ||
                e.clientY < modalDimensions.top ||
                e.clientY > modalDimensions.bottom
            ) {
                closeModal(modal);
            }
        });

        const body = document.querySelector("body");
        body.appendChild(modal);
        body.style.overflow = "hidden"; // Prevent scrolling of background
        modal.showModal();
    });
    return todoDetailsBtn;
}

export default createViewTodoDetailsBtn;
