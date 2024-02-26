
const endpoint = `Any`
// const url = `https://v2.jokeapi.dev/joke/${endpoint}`
const url = `https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1`

const fetchJoke = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

}

fetchJoke()