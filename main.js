/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/
/* --------------------------------- number --------------------------------- */
const pi = 3.14;
let formVieta = 2 / pi;

//NaN - invalid, but still number
let num1 = 10 / "Blue";
//console.log(isNaN(num1) + ", " + typeof num1); //true, number

/* --------------------------------- boolean -------------------------------- */
let guestAge = 25;
let isAdult = guestAge > 18;

let isChild = true;

/* --------------------------------- string --------------------------------- */
const color = "Blue";
let text = "We are the so-called 'Vikings' from the north.";
let text2 = 'We are the so-called "Vikings" from the north.';
//let text3 = "We are the so-called \'Vikings\' from the north.";
//console.log(`${text2}`);          \\uses $ and ``

/* -------------------------------- undefined ------------------------------- */
let b;
let book = undefined; // Value is undefined, type is undefined

//empty value ≠ undefined !!!
let book2 = ""; // The value is "" (empty), but the typeof is "string"
//console.log(typeof book, typeof book2);

/* ---------------------------------- null ---------------------------------- */
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null; // Now value is null, but type is still an object

//undefined and null are equal in value but different in type:
let person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person2 = undefined; // Now both value and type is undefined

typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true

/* --------------------------------- object --------------------------------- */

//array [] aka "indexed list"

const oldCars = ["Oldsmobile", "Pontiac", "Saturn"];
oldCars[0] = "Ford Mercury"; //it changes the value of the first element in oldCars

const newCars = [];
newCars[0] = "Opel";
newCars[1] = "Volvo";
newCars[2] = "BMW";
let car = newCars[0]; //to access an array element by referring to the index number

//console.log(oldCars);                 //[ 'Ford Mercury', 'Pontiac', 'Saturn' ]
//console.log(oldCars.toString());      //Ford Mercury,Pontiac,Saturn  ---- convert to string

/* -------------------------------------------------------------------------- */
//object {} ( array with "key" => "value")

const personal = { firstName: "John", lastName: "Doe", age: 46 };
//console.log(personal.age); //to access an array element by referring to the name ("key")

const relatives = {
  lastName: "Nordman",
  mamaName: "Maria",
  papaName: "Ole",
  childName: "Nora",
};
let family =
  relatives["papaName"] + //square brackets and quotes
  " + " +
  relatives["mamaName"] +
  " = " +
  relatives.childName + //dot
  " " +
  relatives.lastName;
// console.log(family);

const studentA = { fname: "Ole", lname: "Nordman", age: 24 };
const studentB = { fname: "Anna", lname: "Anderssen", age: 27 };
const listOfStudents = [studentA, studentB];
//console.log(listOfStudents[0].age);

const listOfArray = [
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
  [10, 20, 30, 40, 50],
];
//console.log(listOfArray[1][2]);

const worker = {
  name: "Jack",
  hobbies: ["coding", "fishing", "football"],
};
//console.log(worker.hobbies[0]);

/* -------------------------------------------------------------------------- */
//How to Recognize an Array (is list, not object)
//console.log(Array.isArray(newCars));
//console.log(relatives instanceof Array);
/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//addition
let sum = 100 + 50; // Numerical addition
const someText = "Hello" + " " + "word!"; // String concatonation

const sub = 76 - 50; // subtraction
const div = 20 / 4; // division
const mul = 7 * 14; // multiplication

let a = 10;
a = a + 10;
a += 5;
a++; //incrementing

let k = 13;
k = k - 10;
k -= 5;
k--; //decrementing

let c = 100 + 50 * 3;
let d = (100 + 50) * 3;
/* ----------------------------- Bonus Operators ---------------------------- */
// Remainder
const rest = 5 % 2; // (остаток) of 5/2
//console.log(rest);

// Exponentiation
let x = 5;
let z = x ** 4; //5*5*5*5  ==   z = Math.pow(x,4);
//console.log(z);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 15;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName && userAge >= 18 && userIsBlocked === false) {
  goToPage = "/home";
  userIsLoggedIn = true;
  console.log("Welcome, " + userName + "!");
} else {
  if (userIsBlocked) {
    console.log("You are not allowed in here 😠");
  } else if (userAge < 18) {
    console.log("Sorry, you are not of legal age 😔");
  } else if (userName === "") {
    console.log("Please, fill in your name.");
  } else {
    console.log("Sorry, some errors occurred. Please try logging in later.");
  }
}

// console.log(goToPage);
/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here
