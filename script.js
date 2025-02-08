// ===============================================================================================
// FUNCTIONS
// ===============================================================================================

function createPixelGrid(gridSize) {
    const pixelGridContainer = document.getElementById("pixel-grid-container");

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
        square.addEventListener("click", () => {
            square.classList.remove("grid-square");
            square.classList.add("colored-grid-square");
        })
        square.addEventListener("mousedown", () => {
            draw = true;
        })
        square.addEventListener("mouseup", () => {
            draw = false;
        })
    }
}

// ===============================================================================================
// MAIN LOGIC
// ===============================================================================================

// Loads the default pixel grid (16x16)
document.addEventListener("DOMContentLoaded", () => {
    let draw = false;
    createPixelGrid(16);
})

// Draw mode
const drawButton = document.getElementById("draw-btn");
drawButton.addEventListener("click", () =>{
    
})

// Erase mode
let erase = false;
const eraseButton = document.getElementById("erase-btn");
eraseButton.addEventListener("click", () => {

})

// Clear/erase entire canvas
const clearCanvasButton = document.getElementById("clear-canvas-btn");
clearCanvasButton.addEventListener("click", () => {

})