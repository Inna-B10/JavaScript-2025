// window.onload mean that the script runs when the page is fully loaded (basicly a defer)
window.onload = function() {

const changeColorButton = document.getElementById("changeColorButton")
const textInput = document.getElementById("textInput")
const outputText = document.getElementById("outputText")


changeColorButton.onclick = function () {
    document.body.style.backgroundColor = getRandomColor()

}

//! Code below does the same as above:
// changeColorButton.addEventListener("click", function () {
//     document.body.style.backgroundColor = getRandomColor()

// })


textInput.oninput = function() {
    outputText.textContent = `Entered text: ${textInput.value}`
}

//! Code below does the same as above:
// textInput.addEventListener("change", function() {
//     outputText.textContent = `Entered text: ${textInput.value}`})




function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

}