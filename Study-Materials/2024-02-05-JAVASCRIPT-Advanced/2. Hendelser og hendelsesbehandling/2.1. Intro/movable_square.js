const movable = document.getElementById("movable");

let posX = 0;
let posY = 0;
const moveAmount = 10
let currentSize = 50;
const sizeIncrement = 10;
let currentTextSize = 10;
const textSizeIncrement = 1;
let currentRotate = 0;
const rotateIncrement = 5;


function updateElement() {
    movable.style.transform = `translate(${posX}px, ${posY}px)`
    movable.style.width = `${currentSize}px`
    movable.style.height = `${currentSize}px`
    movable.style.rotate = `${currentRotate}deg`
    // movable.className = movable.className.replace(/text-\[\d+px\]/, "")
    movable.style.fontSize = `${currentTextSize}px`
    // movable.classList.add(`text-[${currentTextSize}px]`)
}




document.addEventListener("keydown", function (event) {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp":
            posY -= moveAmount
            break;
        case "ArrowDown":
            posY += moveAmount
            break;
        case "ArrowLeft":
            posX -= moveAmount
            break;
        case "ArrowRight":
            posX += moveAmount
            break;
        case "Enter":
            currentSize += sizeIncrement
            currentTextSize += textSizeIncrement;
            break;
        case "Backspace":
            currentSize -= sizeIncrement
            currentTextSize -= textSizeIncrement;
            break;
        case "l" || "L":
            currentRotate -= rotateIncrement
            break;
        case "r" || "R":
            currentRotate += rotateIncrement
            break;
    }
    updateElement()
})

// const handleKeyPress = (event) => {
//     switch (event.key) {
//         case "b":
//             document.body.style.backgroundColor = "blue";
//             break;
//         case "r":
//             document.body.style.backgroundColor = "red";
//             break;
//         case "g":
//             document.body.style.backgroundColor = "green";
//             break;
//         case "v":
//             document.body.style.backgroundColor = "violet";
//             break;
//         case "y":
//             document.body.style.backgroundColor = "yellow";
//             break;
//         case "w":
//             document.body.style.backgroundColor = "white";
//             break;
//         default:
//             break;
//     }
// }

// document.addEventListener("keypress", handleKeyPress)