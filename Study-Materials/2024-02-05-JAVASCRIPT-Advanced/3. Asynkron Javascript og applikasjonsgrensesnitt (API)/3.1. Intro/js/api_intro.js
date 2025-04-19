let delaySetting = 1000;

// setTimeout(() => {
//     console.log("One")
// }, 1000)

// setTimeout(() => {
//     console.log("Two")
// }, 2000)


//! This is called a callback-Hell. Dont write it like this!
// setTimeout(() => {
//     console.log("One")
//     setTimeout(() => {
//         console.log("Two")
//         setTimeout(() => {
//             console.log("Three")
//         }, delaySetting)
//     }, delaySetting)

// }, delaySetting)


function setTimeoutPromise(duration) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

// setTimeoutPromise(delaySetting).then(() => {
//     console.log("task 1 done")
//     setTimeoutPromise(delaySetting).then(() => {
//         console.log("task 2 done")
//         setTimeoutPromise(delaySetting).then(() => {
//             console.log("all tasks done!")
//         })
//     })
// })


const greetTexts = ["Hi", "Good", "Morning", "To you."]

// const greeting = async () =>
async function greeting() {
    for (const text of greetTexts) {
        await setTimeoutPromise(delaySetting)
        console.log(text)
    }
    // greetTexts.forEach(async (text) => {
    //     await setTimeoutPromise(delaySetting)
    //     console.log(text)
    // })

}

// greeting()

//* Very basic api fetch:
fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})









