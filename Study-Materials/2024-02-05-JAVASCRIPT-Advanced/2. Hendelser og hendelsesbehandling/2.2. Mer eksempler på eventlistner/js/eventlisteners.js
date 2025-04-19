const input = document.getElementById("myInput")
const output = document.getElementById("myOutput")

// The input eventlistner fires when the input field has changed
input.addEventListener("input", function () {
    // console.log("Input changed: " + input.value)
    output.textContent = input.value
})

const coloredDiv = document.getElementById("coloredDiv")

coloredDiv.addEventListener("mouseover", function () {
    coloredDiv.style.backgroundColor = "lightcoral";
})

coloredDiv.addEventListener("mouseout", function () {
    coloredDiv.style.backgroundColor = "lightblue";
})

const form = document.getElementById("form")

const formResult = document.getElementById("formResult")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userName = document.getElementById("userNameInput").value
    const password = document.getElementById("passwordInput").value

    formResult.innerHTML = `Username: ${userName} <br>Password: ${password}`
})


const clickButton = document.getElementById("clickButton")
const buttonClicks = document.getElementById("buttonClicks")

clickButton.addEventListener("click", function () {
    buttonClicks.textContent = "the button as clicked!"
})

//! If using attribute eventlistener:
// function updatePTag() {
//     return buttonClicks.textContent = "the button as clicked!"
// }

function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}



document.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor()
    console.log(getRandomColor())
})







