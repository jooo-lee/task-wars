function createParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

export default createParagraph;
