const pixelGridContainer = document.getElementById("pixel-grid-container");
let gridSize = 16;

for (let i = 0; i < gridSize*gridSize; i++) {
    let square = document.createElement("div");
    square.classList.add("grid-square");
    pixelGridContainer.appendChild(square);
}
