const originalRandomArrayElement = document.getElementById("original-randomArray");
const squaredRandomValuesElement = document.getElementById("squared-randomValues");
const doubledRandomValuesElement = document.getElementById("doubled-randomValues");

function generateRandomNumbersArray(max) {
    return Array.from({ length: max }, () => Math.floor(Math.random() * 100) + 1);
}

function squareNumber(number) {
    return number * number;
}

function doubleNumber(number) {
    return number + number
}

function displayNumbers(element, numbers) {
    element.innerHTML = numbers.map((number)=> `
    <li>${number}</li>
    `).join("")
}

function flexibleDisplayAllNumbers() {
    const randomNumbers = generateRandomNumbersArray(20)
    const squaredRandomNumbers = randomNumbers.map(squareNumber);
    const doubledRandomNumbers = randomNumbers.map(doubleNumber);

    displayNumbers(originalRandomArrayElement, randomNumbers);
    displayNumbers(squaredRandomValuesElement, squaredRandomNumbers);
    displayNumbers(doubledRandomValuesElement, doubledRandomNumbers);
}