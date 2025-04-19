const heading = document.querySelector("h1");

heading.addEventListener("click", typeTimesPressed);
let timesPressed = 0
function typeTimesPressed() {
timesPressed++;
heading.innerHTML = "You have pressed me " + timesPressed + " times.";
if (heading.innerHTML === "You have pressed me " + "10" + " times.") {
    heading.removeEventListener("click", typeTimesPressed);
    heading.innerHTML = "Disabled!"
}
}