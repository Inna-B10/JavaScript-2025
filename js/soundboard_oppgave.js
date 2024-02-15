//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file"
// Remember:
// to use type="module" for this js file when using imports
// to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder
import { sounds } from "../data/soundsJSexample.js";

//*1. Catch the html element with id drumkit: */

//const drumkit = document.getElementById("drumkit");
// I use #buttons in my template
const buttons = document.getElementById("buttons");

//*2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */

// console.log(sounds[0].file);
// console.log(sounds);

//*3. Create the function with a parameter that is refering to the sound used that does the following: */

//3.1. make a variable that creates a button element with .createElement

// add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed

function setButton(item) {
  let playFile = "";
  let button = "";

  sounds.map((el) => {
    if (el.file === item) {
      button = createNode("button", {
        class: "button-square",
      });
      button.textContent = el.key;

      //3.2. make a variables that create an audio element with .createElement
      //the audio element that is created should have the src equal to the file source
      //the audio element that is created should have the id equal to the textcontent created in 3.1.

      playFile = createNode("audio", {
        src: el.file,
        id: el.key,
      });
    }
  });
  return { button: button, playFile: playFile };
}

//3.3. add an eventlistner to the whole page that:
//actives when pressing a keyboard key (first parameter of the eventlistener)
//runs a nameless function with parameter event (refering to the key pressed)

//** --------------------------------- Keydown -------------------------------- */
// document.addEventListener("keydown", (KeyboardEvent) => {
//   sounds.map((el) => {
//   if (KeyboardEvent.key === el.key) {
//     setPause();
//     const playFile = document.getElementById(KeyboardEvent.key);
//     playFile.play();
//   }
// });
// });
/* -------------------------------------------------------------------------- */

document.addEventListener("keypress", (KeyboardEvent) => {
  playSound(KeyboardEvent.key);
  // sounds.map((el) => {
  //   if (KeyboardEvent.key === el.key) {
  //     setPause();
  //     const playFile = document.getElementById(KeyboardEvent.key);
  //     playFile.play();
  //   }
  // });
});

// 3.3.1. inside of the eventlistner:

// create a variable that refers to the key pressed
// make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
// if the conditional is true, play the audio element that you created in 3.2.

//3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
//actives when releasing a keyboard key (first parameter of the eventlistener)

//* ---------------------------------- Keyup --------------------------------- */
// document.addEventListener("keyup", (KeyboardEvent) => {
//   const element = document.getElementById(KeyboardEvent.key);
//   if (element) {
//     element.pause();
//     element.currentTime = 0;
//     // element.load();
//   }
// });
/* -------------------------------------------------------------------------- */
// 3.4.1. inside of the eventlistner:

// pauses the audio element
// sets the current time of the audio element to 0

//3.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("button-square")) {
    const buttonId = event.target.lastElementChild.id;
    playSound(buttonId);
  }
});

//3.6. append the created button and audio element to the html element you refered in 1.

// drumkit.appendChild(button);
// button.appendChild(playFile);

//*4. Create a function that loops over the sounds (from the data file you created). Use that function created in 3. to use the logic there to create the buttons. I prefer that you use .forEach or .map */
function createButtons() {
  sounds.forEach((value) => {
    const array = setButton(value.file);
    const divButton = createNode("div", {
      class: "button-block flex center",
    });
    array.button.appendChild(array.playFile);
    divButton.appendChild(array.button);
    buttons.appendChild(divButton);
  });
}

//*4. Call on the function that loops over the sounds and creates the buttons */

createButtons();

/* -------------------------- Additional Functions -------------------------- */
function playSound(id) {
  sounds.map((el) => {
    if (id === el.key) {
      setPause();
      const playingNow = document.getElementById(id);
      playbackRate.disabled = false;
      volume.disabled = false;
      volume.addEventListener("input", () => {
        playingNow.volume = volume.value / 100;
        currentVol.innerText = volume.value;
      });

      playbackRate.addEventListener("input", () => {
        playingNow.playbackRate = playbackRate.value;
        currentPbr.innerText = playbackRate.value;
      });
      playingNow.play();
    }
  });
}

function setPause() {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
    audio.playbackRate = 1;
    const resetSpeed = document.getElementById("currentPbr");
    resetSpeed.innerText = 1;
    playbackRate.value = 1;
  });
}

function createNode(node, attributes) {
  const el = document.createElement(node);
  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }
  return el;
}

/* ------------------------------- Button Stop ------------------------------ */
const muteButton = createNode("button", {
  id: "stop",
});
muteButton.innerHTML = "<span>STOP</span>";
muteButton.addEventListener("click", () => {
  setPause();
});
const divStop = createNode("div", {
  class: "button-block flex center",
});
divStop.appendChild(muteButton);
buttons.appendChild(divStop);

/* ---------------------- PlaybackRate + Volume Buttons --------------------- */
const form = createNode("form", {
  class: "flex column",
});
//playbackRate
const playbackRate = createNode("input", {
  id: "pbr",
  type: "range",
  value: 1,
  min: 0.25,
  max: 2,
  step: 0.25,
  disabled: "",
});
playbackRate.value = 1;
const currentPbr = createNode("span", {
  id: "currentPbr",
});
currentPbr.innerText = playbackRate.value;
const pbrText = createNode("p", {});

pbrText.innerHTML = "Playback rate: ";
pbrText.appendChild(currentPbr);
form.appendChild(playbackRate);
form.appendChild(pbrText);

//volume
const volume = createNode("input", {
  id: "volume",
  type: "range",
  value: 50,
  min: 0,
  max: 100,
  step: 25,
  disabled: "",
});
// volume.value = 50;
const currentVol = createNode("span", {
  id: "currentVol",
});
currentVol.innerText = volume.value;
const volText = createNode("p", {});

volText.innerHTML = "Volume: ";
volText.appendChild(currentVol);
form.appendChild(volume);
form.appendChild(volText);

const range = document.getElementById("range");
range.appendChild(form);
