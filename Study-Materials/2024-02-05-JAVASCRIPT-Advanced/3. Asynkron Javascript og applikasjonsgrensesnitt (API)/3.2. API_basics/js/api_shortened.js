const jokeText = document.getElementById("jokeText")

const url = "https://api.chucknorris.io/jokes/random"

const fetchJoke = async () => {
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        console.log(data)
        jokeText.textContent = data.value;
    } else {
        console.log("error")
        jokeText.textContent = "Could not fetch joke"
    }
}

fetchJoke()