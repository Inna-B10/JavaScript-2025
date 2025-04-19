const pokemonData = "https://pokeapi.co/api/v2/pokemon/?limit=386";


// creating similar structure as react. Below is the same as react useState:
let data = null;
let pokemonDetails = null
let pokemonMoreDeails = null

// function fetchData() {

async function getData() {
    try {
        // first fetch:
        const response = await fetch(pokemonData)
        data = await response.json()
        console.log(data)

        // second fetch:
        const pokemonUrls = data.results.map((pokemon) => pokemon.url);
        const pokemonPromises = pokemonUrls.map((url) => fetch(url).then((response) => response.json()))
        pokemonDetails = await Promise.all(pokemonPromises)
        console.log(pokemonDetails)

        // third fetch:
        const pokemonMoreDetailsPromises = pokemonDetails.map((pokemon) => fetch(pokemon.species.url).then((response) => response.json()))
        pokemonMoreDeails = await Promise.all(pokemonMoreDetailsPromises)
        console.log(pokemonMoreDeails)

    } catch (error) {
        console.error(error)
    }
}

getData()

// }

// fetchData()
