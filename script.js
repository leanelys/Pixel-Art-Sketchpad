const pixelGridContainer = document.getElementById("pixel-grid-container");
let draw = false;
let gridSize = 16;

for (let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    pixelGridContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
        if (draw) {
            square.classList.remove("grid-square");
            square.classList.add("colored-grid-square");
        }
    })
    square.addEventListener("mousedown", () => {
        draw = true;
    })
    square.addEventListener("mouseup", () => {
        draw = false;
    })
}
