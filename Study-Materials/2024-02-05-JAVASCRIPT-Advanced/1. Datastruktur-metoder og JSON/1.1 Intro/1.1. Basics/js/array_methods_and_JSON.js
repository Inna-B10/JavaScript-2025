//* JSON - Javascript Object Notation
//* JSON parse, stringify, import json file into the js file.

// Importing a JSON file using ES6 module syntax:
import person from "../data/person.json" assert {type: "json"}

// Logging the imported JSON object:
console.log(person)

// Defining a simple JSON object:
const simpelJsonData = { "name": "John", "age": 30, "city": "New York" };
// Defining a JSON-formatted string:
const jsonData = '{ "name": "John", "age": 30, "city": "New York" }'

// Logging both the simple JSON object and the JSON-formatted string:
console.log(simpelJsonData)
console.log(jsonData)

// Parsing the JSON-formatted string into an object:
const parsedData = JSON.parse(jsonData)

// Logging the parsed JSON object:
console.log(parsedData)

// Converting the parsed JSON object back into a JSON-formatted string:
const jsonString = JSON.stringify(simpelJsonData)

// Logging the JSON-formatted string:
console.log(jsonString)

// Creating an array of numbers:
const dataArray = [5, 2, 8, 1, 7, 0, 321, 75]

// Logging the array:
console.log(dataArray)

// Converting the array into a JSON-formatted string:
const jsonArray = JSON.stringify(dataArray)

// Logging the JSON-formatted string:
console.log(jsonArray)

// Parsing the JSON-formatted string back into an array:
const parsedArray = JSON.parse(jsonArray)

// Logging the parsed array:
console.log(parsedArray)

//* JSON END */


//* Object.entries */

// Logging the parsed JSON object using Object.entries:
console.log("Object entries:")
for (const [key, value] of Object.entries(parsedData)) {
    // Logging each key-value pair in the parsed JSON object:
    console.log(`${key}: ${value}`)
}

// Counting the number of entries in the parsed JSON object:
const numEntries = Object.entries(parsedData).length
// Logging the number of entries in the parsed JSON object:
console.log(`Number of entries: ${numEntries}`)

//* Object.entries END */

//* Advanced array-methods */

// Defining an array of complex objects:
const complexArrayWithObject = [
    {
        name: "John",
        age: 25,
        address: {
            city: "ExampleCity",
            country: "ExampleCountry"
        },

    },
    {
        name: "Jane",
        age: 30,
        address: {
            city: "AnotherCity",
            country: "AnotherCountry",
        },
    },
]

// Extracting the address from each object in the array:
const address = complexArrayWithObject.map((person) => person.address);

// Logging the address:
console.log("Address:", address)

// Checking if the array of numbers contains the number 0:
if (dataArray.includes(0)) {
    console.log("The array contains 0")
} else {
    console.log("The array does not contain 0")
}


// Doubling each number in the array with .map()
const doubleArray = dataArray.map((number) => number * 2)
console.log(doubleArray)

// Filtering the out even numbers in the array with .filter()
const oddArray = dataArray.filter((number) => number % 2 !== 0)
console.log(oddArray)

// Filtering the out odd numbers in the array with .filter()
const evenArray = dataArray.filter((number) => number % 2 === 0)
console.log(evenArray)

// Summing the numbers in the array with .reduce()
const sum = dataArray.reduce((sum, number) => sum + number, 0)

// Logging the sum
console.log(sum)

// Sorting the numbers in the array in ascending order with .sort()
const sortedArray = dataArray.sort((a, b) => a - b)

// Logging the sorted array
console.log(sortedArray)

// Sorting the numbers in the array in decending order with .sort()
const sortedArrayDesc = dataArray.sort((a, b) => b - a)

// Logging the sorted array
console.log(sortedArrayDesc)

// Change data in the name key of the array with spread operator
const modfiedObject = {
    ...parsedData,
    name: `Mr ${parsedData.name} Wick`
}

// Logging the modified object
console.log(modfiedObject)

// Find sum of dataArray * 3 with only odd numbers:
const result = dataArray.map((number) => number * 3).filter((number) => number % 2 !== 0).reduce((sum, number) => sum + number, 0)

// Logging the result
console.log(result)


// Creating an array of colors
const colors = ["red", "blue", "green"]
// Looping through the array with forEach
colors.forEach(color => console.log(color))

// Checking if the array contains an even number
const hasEvenNumber = dataArray.some(num => num % 2 === 0)

// Logging the result. Returns a boolean
console.log(hasEvenNumber)

// Checking if all numbers in the array are even
const allEvenNumbers = dataArray.every(num => num % 2 === 0)

// Logging the result. Returns a boolean
console.log(allEvenNumbers)

const randomNumbersArray = (length, maxNum) => {
    return Array.from({ length }, () => Math.ceil(Math.random() * maxNum))
}

// Logging the result

console.log(randomNumbersArray(100, 10))

// remove the duplicates:
const removeDuplicates = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index)
}

console.log(removeDuplicates(randomNumbersArray(100, 10)))




















