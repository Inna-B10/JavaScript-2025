import { jsSounds } from "./jsexample.js";
import sounds from "./soundJSONexample.json" assert {type: "json"};




console.log("hello")
console.log(sounds)
console.log(jsSounds)

let files = sounds.soundFiles

console.log(files)
// console.log(files[0].file)

files.forEach((sound)=> console.log(`"Key:" ${sound.key}`))
files.forEach((sound)=> console.log(`"Key:" ${sound.file}`))

jsSounds.forEach((sound)=> console.log(`"Key:" ${sound.key}`))
jsSounds.forEach((sound)=> console.log(`"Key:" ${sound.file}`))
