const jokeText = document.getElementById("jokeText")

const url = "https://api.chucknorris.io/jokes/random"

const fetchJoke = async () => {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            jokeText.textContent = data.value;
            console.log("Works!")
        } else {
            jokeText.textContent = "Could not fetch joke"
            console.log("Does not work!")
        }
    } catch (error) {
        console.error("An error occurred:,", error)
        jokeText.textContent = "An error occurred when fetching the joke"
    } finally {
        console.log("Fetching complete!")
    }

}

fetchJoke()

