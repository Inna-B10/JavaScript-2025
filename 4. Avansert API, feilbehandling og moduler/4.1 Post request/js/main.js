// import { getData } from "./utils";

import getData, { fetchedData } from "./utils.js";


// getData()
getData("https://jsonplaceholder.typicode.com/todos/2")

// console.log(fetchedData ? fetchedData : "data not found")

// console.log(fetchedData)


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
    return response.json()
}).then((json) => console.log("POST response:", json)).catch((error) => {
    console.log("Error:", error)
})



