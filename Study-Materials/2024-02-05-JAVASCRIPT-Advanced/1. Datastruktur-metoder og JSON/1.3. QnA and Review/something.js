const numberArray = [1, 2, 3, 4, 5]

console.log("return the array and convert all odd numbers to even numbers:")
console.log(numberArray.map((num) => num % 2 === 0 ? num : num * 2))


//! Use arrays and map instead of objects and object.entries for these types of data extraction/modification
const numbersObject = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }

console.log(Object.entries(numbersObject))

console.log(Object.keys(numbersObject))

console.log(numberArray[0])
console.log(numbersObject)


let arr = new Array // better to write: let arr = [];
let obj = new Object // better to write: let obj = {};




