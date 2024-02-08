const peopleArrayWithObjects = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    country: "USA",
    hobbies: ["Reading", "Hiking", "Photography", "Swimming"],
  },
  {
    id: 2,
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    country: "Canada",
    hobbies: ["Cooking", "Playing guitar", "Gardening", "Traveling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    email: "charlie@example.com",
    country: "UK",
    hobbies: ["Painting", "Skiing", "Music", "Cycling"],
  },
  {
    id: 4,
    name: "David",
    age: 40,
    email: "david@example.com",
    country: "Australia",
    hobbies: ["Swimming", "Fishing", "Reading"],
  },
  {
    id: 5,
    name: "Eva",
    age: 32,
    email: "eva@example.com",
    country: "Germany",
    hobbies: ["Skiing", "Playing Guitar", "Photography", "Cooking"],
  },
];

//! 1.
/* console.log the array */

console.log(peopleArrayWithObjects);

//! 1.1:
/* create variables for firstPerson (first person object in the array) and lastPerson (last person object in the array) for peopleArrayWithObjects: */

const firstPerson = peopleArrayWithObjects[0];
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];

//! 1.2
/* console.log all the objects of the first and last persons using Object.entries. Expected output: 
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
*/

console.log(Object.entries(firstPerson));
console.log(Object.entries(lastPerson));

//! 1.3
/* console.log the hobbies of the first person using Object.entries. Expected output is to be an array with 4 elements */

let firstPersonHobbies = [];
for (const [key, value] of Object.entries(firstPerson)) {
  if (key == "hobbies") {
    firstPersonHobbies = value;
  }
}
console.log(firstPersonHobbies);

let lastPersonHobbies = [];
for (const [key, value] of Object.entries(lastPerson)) {
  if (key == "hobbies") {
    lastPersonHobbies = value;
  }
}

//! 1.4
/* Use .map instead of Object.entries to achieve the same result in the console as in 1.3: */

let mappedPeople = peopleArrayWithObjects
  .map((person, i) => {
    if (i === 0) {
      return person;
    }
  })
  .filter((person) => person !== undefined);

for (const line of mappedPeople) {
  console.log(line.hobbies);
}

//! 1.5.
/* Use .filter and .includes to find out which hobbies are common between firstPerson and lastPerson. Expected output is an array with common hobbies */

const hobbiesFirstLast = firstPersonHobbies.filter((element) => {
  return lastPersonHobbies.includes(element);
});
console.log(hobbiesFirstLast);

//! 1.6.
/* Use .map to display all the persons with their information on your page DOM manipulation (look at the shared repo of the lessons in the js file mappedOutArray.js for tips). It should also show what hobbies they have in common. Choose whether to use createElement or innerHTML. (Great if you do it both ways, comment out the unused code. Remember to use defer if the script tag is in the head!) */

const wrapper = document.getElementById("oppgave");
/* ---------------------------- InnerHTML Method ---------------------------- */
// wrapper.innerHTML =
//   '<h1></h1><content class="flex"><div><p>Display All peoples:</p></div></content>';
//   const section1 = wrapper.querySelector("content div")
//
// function displayInfo(array){
//   array.map((person) =>{
//     const card = `
//     <div class="flex column card">
//       <h2>${person.name}</h2>
//       <span><span class="bold">Age:</span> ${person.age}</span>
//       <span><span class="bold">Country:</span> ${person.country}</span>
//       <span><span class="bold">Hobbies:</span> ${person.hobbies}</span>
//     </div>`;
//     const newCard = document.createElement("div")
//     newCard.innerHTML = card;
//     section1.appendChild(newCard)
//   })
// }
// displayInfo(peopleArrayWithObjects);
/* -------------------------------------------------------------------------- */
const assignment1 = document.createElement("H1");
const content = document.createElement("content");
content.classList.add("flex");

const elementDiv1 = document.createElement("div");
const elementP1 = document.createElement("p");
elementP1.innerText = "Display All peoples:";
elementDiv1.appendChild(elementP1);
content.appendChild(elementDiv1);
wrapper.appendChild(assignment1);
wrapper.appendChild(content);

function displayInfo2(array) {
  array.map((person) => {
    const divCard = createNode("div", {
      class: "flex column card",
    });

    const personName = createNode("h2", {});
    personName.innerText = `${person.name}`;
    divCard.appendChild(personName);

    //!why <span class="bold"> does not show ?
    const personAge = createNode("span", {});
    const spanBold1 = createNode("span", {
      class: "bold",
    });
    spanBold1.innerText = "Age: ";
    personAge.appendChild(spanBold1);
    personAge.innerText += `${person.age}`;
    divCard.appendChild(personAge);

    const personCountry = createNode("span", {});
    const spanBold2 = createNode("span", {
      class: "bold",
    });
    spanBold2.innerText = "Country: ";
    personCountry.appendChild(spanBold2);
    personCountry.innerText += `${person.country}`;
    divCard.appendChild(personCountry);

    const personHobbies = createNode("span", {});
    const spanBold3 = createNode("span", {
      class: "bold",
    });
    spanBold3.innerText = "Hobbies: ";
    personHobbies.appendChild(spanBold3);
    personHobbies.innerText += `${person.hobbies}`;
    divCard.appendChild(personHobbies);

    const section1 = wrapper.querySelector("content div");
    section1.appendChild(divCard);
  });
}
displayInfo2(peopleArrayWithObjects);

//! 1.7
/* Use .filter to find all persons who have atleast 1 hobby that is the same hobbies as firstPerson. Display this using DOM manipulation */

let commonOtherWithFirst = {};
firstPersonHobbies.filter((element) => {
  for (const [key, person] of Object.entries(peopleArrayWithObjects)) {
    if (key > 0) {
      if (person.hobbies.includes(element)) {
        // commonOtherWithFirst.push(person.name, element);
        if (element in commonOtherWithFirst) {
          commonOtherWithFirst[element] =
            commonOtherWithFirst[element] + `,${person.name}`;
        } else {
          commonOtherWithFirst[element] = person.name;
        }
      }
    }
  }
});
console.log(commonOtherWithFirst);

const elementDiv2 = createNode("div", {});
const elementP2 = createNode("p", {});
elementP2.innerText =
  "Persons who have atleast 1 hobby that is the same hobbies as firstPerson:";
elementDiv2.appendChild(elementP2);
content.appendChild(elementDiv2);
wrapper.appendChild(content);

const div2 = createNode("div", {});
const firstPersonInfo = (array) => {
  for (const [key, value] in array) {
    console.log(key);
  }
};

div2.innerHTML = firstPersonInfo;
/* ---------------------------- Not Finished Code --------------------------- */
// let commonHobbiesAll = []
// firstPersonHobbies.filter((element) => {
//   for (const [key, person] of Object.entries(peopleArrayWithObjects)) {
//
//       if (person.hobbies.includes(element)) {
//
//         commonHobbiesAll.push(element);
//       }
//   }
// });
// console.log(commonHobbiesAll);
/* -------------------------------------------------------------------------- */
//! 2
/* Generate a random array with 10 random numbers between 1 and 100. console.log the array. */

const randomNum = Array.from(
  { length: 10 },
  () => Math.floor(Math.random() * 100) + 1
);
const uniqueRandomNum = randomNum
  .filter((interim, index) => randomNum.indexOf(interim) === index)
  .sort((a, b) => a - b);

console.log(uniqueRandomNum);

//! 2.1
/* Separate odd and even numbers in the array you created in task 2 into two new arrays. console.log the new arrays. */

const oddArray = uniqueRandomNum
  .filter((num) => {
    if (num % 2 !== 0) {
      return num;
    }
  })
  .sort((a, b) => a - b);

const evenArray = uniqueRandomNum
  .filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  })
  .sort((a, b) => a - b);

console.log(oddArray);
console.log(evenArray);
/* ------------------------------- Alternative ------------------------------ */
// const result = uniqueRandomNum.reduce((arr, num) => {
//     if (num % 2 === 0) {
//       arr.evenArray2.push(num);
//     } else {
//       arr.oddArray2.push(num);
//     }
//     return arr;
//   },
//   { oddArray2: [], evenArray2: [] }
// );
//
// const oddArray2 = result.oddArray2;
// const evenArray2 = result.evenArray2;
//
// console.log(oddArray2)
// console.log(evenArray2)
/* -------------------------------------------------------------------------- */

//! 2.2
/* Write a function that finds the largest number in the different arrays. Use a parameter so that the same function can be used on both arrays. Tips: Math.max() */

const maxOddNum = maxNumber(oddArray);
const maxEvenNum = maxNumber(evenArray);

function maxNumber(array) {
  return array.reduce(
    (interim, element) => Math.max(interim, element),
    -Infinity
  );
}

// console.log(maxOddNum)
// console.log(maxEvenNum)

//! 2.3.
/* Write a function that adds up all the numbers in the different arrays. So the sum of odd numbers in one result and the sum of even numbers in another result. Use a parameter in the function so that the same function can be used on both arrays. console.log the results. */

const sumEvenNum = sumNumbers(evenArray);
const sumOddNum = sumNumbers(oddArray);

function sumNumbers(array) {
  return array.reduce((a, b) => a + b);
}
console.log(sumEvenNum);
console.log(sumOddNum);

//! 2.4
//Oppgave 2.4 skal dere bruke funksjonen dere har laget på det randomiserte nummer arrayet (hvis det ikke var forstått). Lost in translation 😅
/* Create a function that adds up the numbers in different arrays. Use 2 parameters to be able to use 2 different arrays (the odds and evens arrays you created earlier). Write an if-else statement that console logs which of the two arrays has the largest sum. Remember an else statement that says if both are equal (very unlikely) */

let largestSum = "";
if (sumEvenNum > sumOddNum) {
  largestSum = `The sum of even numbers is the largest: ${sumEvenNum} > ${sumOddNum}`;
} else if (sumEvenNum < sumOddNum) {
  largestSum = `The sum of odd numbers is the larges: ${sumOddNum} > ${sumEvenNum}`;
} else {
  largestSum = `Both arrays have an equal sum: ${sumEvenNum} = ${sumOddNum}`;
}
console.log(largestSum);

//! 2.5:

/* Display the results from all steps in task 2 (2, 2.1, 2.2, 2.3, 2.4) with DOM in a good way */

const wrapper2 = createNode("div", {
  id: "oppgave2",
});

const title = createNode("h1", {});
wrapper2.appendChild(title);

const sub2 = createNode("div", {});
sub2.innerText = `The array of 10 randomly generated (unique) numbers between 1 and 100:
 ${uniqueRandomNum}`;
wrapper2.appendChild(sub2);

const ol = createNode("ol", {});

const li1 = createNode("li", {
  class: "subsection",
});
li1.innerText = `The array of odd numbers: ${oddArray}
The array of even numbers: ${evenArray}`;
ol.appendChild(li1);

const li2 = createNode("li", {
  class: "subsection",
});
li2.innerText = `The largest number in the array of odd numbers is: ${maxOddNum}
The largest number in the array of even numbers is: ${maxEvenNum}`;
ol.appendChild(li2);

const li3 = createNode("li", {
  class: "subsection",
});
li3.innerText = `The sum of odd numbers is: ${sumOddNum}
The sum of even numbers is: ${sumEvenNum}`;
ol.appendChild(li3);

const li4 = createNode("li", {
  class: "subsection",
});
li4.innerText = largestSum;
ol.appendChild(li4);

wrapper2.appendChild(ol);

const oppgave2 = document.querySelector("body");
oppgave2.appendChild(wrapper2);

/* ------------------- Create HTML Element With Attributes ------------------ */
function createNode(node, attributes) {
  const el = document.createElement(node);
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}
