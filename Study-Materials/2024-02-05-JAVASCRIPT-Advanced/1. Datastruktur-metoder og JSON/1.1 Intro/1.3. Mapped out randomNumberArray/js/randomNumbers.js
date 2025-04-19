const originalRandomArrayElement = document.getElementById("original-randomArray");
const squaredRandomValuesElement = document.getElementById("squared-randomValues");
const doubledRandomValuesElement = document.getElementById("doubled-randomValues");

const randomNumbersArray = (max) => {
    const randomNumbers = []
    if (max > 0 && max <= 20) {
        for (let i = 0; i < max; i++) {
           randomNumbers.push(Math.floor(Math.random()* 100) + 1) 
        }
        return randomNumbers
    } else {
        return alert("Max must be between 1 and 20")
    }
}

//! Alternativly use this:
// function generateRandomNumbersArray(max) {
//     return Array.from({ length: max }, () => Math.floor(Math.random() * 100) + 1);
// }

const randomNumbers = randomNumbersArray(20)

function displayOriginalRandomArray() {
    originalRandomArrayElement.innerHTML = randomNumbers.map((number) => `<li>${number}</li>`).join("");
}

function squareNumber(number) {
    return number * number;
}

const squaredRandomNumbers = randomNumbers.map(squareNumber);
function displaySquaredRandomNumbers() {
    squaredRandomValuesElement.innerHTML = squaredRandomNumbers.map((number) => `<li>${number}</li>`).join("");
}


function doubleNumber(number) {
    return number + number
}

const doubledRandomNumbers = randomNumbers.map(doubleNumber)

function displayDoubledRandomNumbers() {
    doubledRandomValuesElement.innerHTML = doubledRandomNumbers.map((number) => `<li>${number}</li>`).join("");
}


function displayAllRandomNumbers() {
    displayOriginalRandomArray()
    displayDoubledRandomNumbers()
    displaySquaredRandomNumbers()
}