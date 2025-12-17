function createDiv(id, parent) {
    const div = document.createElement("div");
    //div.textContent = "im a grid";
    div.setAttribute("id", id);
    div.setAttribute("class", "row");
    return div
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let column = createDiv("column" + i, container);
        for (let y = 0; y < size; y++) {
            let row= createDiv("c" + i + "r" + y, column)
            column.appendChild(row);
        }
        column.setAttribute("class", "column");
        container.appendChild(column);
    }
}

const container = document.querySelector(".grid-container");
createGrid(16);
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target != container) {
        let color1 = Math.floor(Math.random() * 255);
        let color2 = Math.floor(Math.random() * 255);
        let color3 = Math.floor(Math.random() * 255);
        let opacity = Number(target.style.opacity) + 0.1;
        target.style.backgroundColor = "rgb(" + color1 + "," + color2+ "," + color3 + ")";
        target.style.opacity = opacity + 0.1; 
    }
})

const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", () => {
    let gridSize = prompt("how many squares per side of the grid?");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(gridSize);
})
