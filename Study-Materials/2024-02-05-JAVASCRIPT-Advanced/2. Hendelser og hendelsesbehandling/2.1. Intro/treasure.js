const toggleButton = document.getElementById("toggleButton");
const hiddenDiv = document.getElementById("hiddenDiv")
const treasure = document.getElementById("treasure")
const treasureText = document.getElementById("treasureText")
const form = document.getElementById("form")
const textOutput = document.getElementById("output")


form.style.display = "none"
treasure.style.display = "none"

treasure.addEventListener("mouseenter", ()=> {
    treasure.style.scale = 1.2
})

treasure.addEventListener("mouseleave", ()=> {
    treasure.style.scale = 1.0
})


const handleKeyPress = (event) => {
    switch (event.key) {
        case "b":
            document.body.style.backgroundColor = "blue";
            break;
        case "r":
            document.body.style.backgroundColor = "red";
            break;
        case "g":
            document.body.style.backgroundColor = "green";
            break;
        case "v":
            document.body.style.backgroundColor = "violet";
            break;
        case "y":
            document.body.style.backgroundColor = "yellow";
            break;
        case "w":
            document.body.style.backgroundColor = "white";
            break;
        default:
            break;
    }
 if (document.body.style.backgroundColor === "yellow") {
    treasure.style.display = "block"
    treasureText.style.display = "none"
    textOutput.textContent === "YAR! ME BOOTY!" ? treasureText.style.display = "block" : treasureText.style.display = "none"
 } else {
    treasure.style.display = "none"
 }
 if (document.body.style.backgroundColor === "green") {
    form.style.display = "block"
 } else {
    form.style.display = "none"
 }
 console.log(event)
}


toggleButton.addEventListener("click", function () {
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        document.addEventListener("keypress", handleKeyPress)
        hiddenDiv.style.display = "block"
    } else {
        document.removeEventListener("keypress", handleKeyPress)
        hiddenDiv.style.display = "none"
    }
})

form.addEventListener("submit", (event)=> {
    event.preventDefault()
    const inputText = document.getElementById("input").value;
    textOutput.innerHTML = inputText === "open" ? "YAR! ME BOOTY!" : "HAR HAR HAR! WRONG LANDLUBBER!"
})