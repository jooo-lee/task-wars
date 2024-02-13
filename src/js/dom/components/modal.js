function closeModal(modal) {
    modal.close();
    modal.remove();
    document.querySelector("body").style.overflow = "auto"; // Allow for scrolling after modal is closed
}

function createModal(title) {
    const modal = document.createElement("dialog");

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-modal-btn");
    closeBtn.textContent = "Close";
    closeBtn.type = "button";
    closeBtn.addEventListener("click", function () {
        closeModal(modal);
    });
    modal.appendChild(closeBtn);

    const modalTitle = document.createElement("p");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = title;
    modal.appendChild(modalTitle);

    // Close modal when esc key pressed
    modal.addEventListener("keydown", function (e) {
        if (e.key == "Escape") closeModal(modal);
    });

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
    return modal;
}

export { createModal, closeModal };
