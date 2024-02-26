// import { getData } from "./utils";
import { fetchedData, getData2 } from "./utils.js"
import getData from "./utils.js";

async function updateData() {
    await getData2("https://jsonplaceholder.typicode.com/todos/2")
}

updateData()

setTimeout(() => {
    console.log(fetchedData ? fetchedData : "data not found")
}, 2000)

export let someData = null;

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        'Content-type': "application/json; charset=UTF-8",
    },
}).then((response) => {
    console.log("POST request Details:", {
        url: response.url,
        status: response.status,
        statusText: response.statusText
    });
    if (response.ok) {
        return response.json()
    }

}).then((json) => {
    someData = json;
    console.log("someData:", someData)
})





