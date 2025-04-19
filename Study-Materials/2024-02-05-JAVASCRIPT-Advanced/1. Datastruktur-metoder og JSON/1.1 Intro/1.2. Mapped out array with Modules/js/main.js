import { showPeople } from "./showPeople.js";
import people from "../data/people.json" assert {type: "json"}
import { modifiedPeople } from "./modifyData.js";

showPeople(people)
showPeople(modifiedPeople(people))