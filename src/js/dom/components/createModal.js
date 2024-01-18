function closeModal(modal) {
    modal.close();
    modal.remove();
    document.querySelector("body").style.overflow = "auto"; // Allow for scrolling after modal is closed
}

function createModal() {
    const modal = document.createElement("dialog");

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.addEventListener("click", function () {
        closeModal(modal);
    });
    modal.appendChild(closeBtn);

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
