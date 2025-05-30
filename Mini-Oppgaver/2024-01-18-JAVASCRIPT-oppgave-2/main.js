/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Do NOT change the name of any of the
functions in this assignment, it will disable the automated unit testing.

0.

Complete the function below:

Return true from this function to see how the testing works

Read the terminal output before and after to see the difference

******************************************************************************/

export function start() {
  //your code here
  return true;
}

/******************************************************************************
1.

Complete the function below:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

HINT: Use the modulo operator (%) Google it! 😊
******************************************************************************/
/* ------------------------------ Alternative1 ------------------------------ */
export const oddOrEven = (num) => {
  if (Math.abs(num % 2) > 0) {
    return "Odd";
  } else {
    return "Even";
  }
};
console.log(oddOrEven(-3));

/* ------------------------------ Alternative2 ------------------------------ */
// export const oddOrEven2 = (num) => (Math.abs(num % 2) > 0 ? "Odd" : "Even");
// console.log(oddOrEven2(3));

//? start                          This does NOT work. WHY?
/* ----------------------------------- №1 ----------------------------------- */
// const oddOrEven3 = (num) => {
//   if (Math.abs(num % 2) > 0) {
//     console.log("Odd");
//   } else {
//     console.log("Even");
//   }
// };
// oddOrEven3(-5);

/* ----------------------------------- №2 ----------------------------------- */
// const oddOrEven4 = (num) =>
//   Math.abs(num % 2) > 0 ? console.log("Odd") : console.log("Even");
// oddOrEven4(10);
//? end
/******************************************************************************
2.

Complete the function below:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

export function makeMeLoud(message) {
  let someText = message.toUpperCase();
  return `${someText}!`;
}
const UpperCaseMessage = makeMeLoud("hello word");
console.log(UpperCaseMessage);

/******************************************************************************
3.

Complete the function below:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23


******************************************************************************/

export const greeter = (str, num) => {
  if (num < 0 || num > 23 || typeof num !== "number") {
    return "Invalid time";
  } else {
    const name =
      str.trim().length === 0 ? "" : str.charAt(0).toUpperCase() + str.slice(1);
    if (num >= 0 && num <= 5) {
      return `Good night ${name}`;
    }
    if (num >= 6 && num <= 11) {
      return `Good morning ${name}`;
    }
    if (num >= 12 && num <= 17) {
      return `Good day ${name}`;
    }
    if (num >= 18 && num <= 23) {
      return `Good evening ${name}`;
    }
  }
};

console.log(greeter("lars", -5));

/******************************************************************************
4.

Complete the function below:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
/* ------------------------------ Alternative 1 ----------------------------- */
// export function arrayTrimmer(array) {
//   let newArray = array.slice(1, -1);
//   return newArray;
// }
// const oldArray = ["One", "Two", "Three", "Four", "Five", "Six"];
// console.log(arrayTrimmer(oldArray));
/* ------------------------------ Alternative 2 ----------------------------- */
export function arrayTrimmer(array) {
  array.pop();
  array.shift();
  return array;
}
const oldArray = ["One", "Two", "Three", "Four", "Five", "Six"];
console.log(arrayTrimmer(oldArray));

/******************************************************************************
5.

Complete the function below:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

export const cleanAndFun = (str) => {
  let newString = str.trim();
  newString = newString.replace("hard", "fun");
  return newString;
};
const pattern = " It's hard to use methods ";
console.log(cleanAndFun(pattern));

/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

export function marvelEditor(array) {
  let newHeroArray = array.slice(1);
  newHeroArray[newHeroArray.indexOf("Doctor Strange")] = "Skrull";

  // newHeroArray.splice(newHeroArray.indexOf("Thor"), 2, "Capitan America");
  newHeroArray.splice(0, 2, "Captain America");
  newHeroArray = newHeroArray.join("💪");
  return newHeroArray;
}

const heroArray = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];
console.log(marvelEditor(heroArray));

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

export function coolMaker(param) {
  let prm = param;
  const type = typeof param;
  switch (type) {
    case "string":
      return `😎${prm}😎`;
    case "number":
      prm = prm * 2;
      return "😎" + prm.toString() + "😎";
    case "boolean":
      return !prm ? "😎Chill😎" : "😎Yeah😎";
    default:
      return "😎Primitive values only😎";
  }
}
const param = 45;
console.log(coolMaker(param));

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

export const addOrRemove = (array, str) => {
  const string = str;
  const arr = array;
  if (arr.includes(string)) {
    arr.splice(arr.indexOf(string), 1);
    return arr;
  } else {
    arr.push(string);
    return arr;
  }
};
const item = "Green";
const array = ["Red", "Green", "Blue"];
console.log(addOrRemove(array, item));
