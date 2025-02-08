// create function that makes a new pixel grid (can be used by clearCanvas)

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

const drawButton = document.getElementById("draw-btn");
drawButton.addEventListener("click", () =>{
    
})

let erase = false;
const eraseButton = document.getElementById("erase-btn");
eraseButton.addEventListener("click", () => {

})

const clearCanvasButton = document.getElementById("clear-canvas-btn");
clearCanvasButton.addEventListener("click", () => {

})