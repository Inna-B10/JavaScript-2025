const current = document.getElementById("current")

const API_key = `0a4335c630a44d8f84690004242002`
const weatherLocation = `Bergen`

const weatherUrl =
    `https://api.weatherapi.com/v1/forecast.json?key=${API_key}&q=${weatherLocation}&days=3&aqi=no&alerts=yes`;


async function getWeather() {
    const data = await fetch(weatherUrl)
    const response = await data.json()
    console.log(response)
    const cityName = response.location.name
    console.log(cityName)
    const imgUrl = response.current.condition.icon
    console.log(imgUrl)



    current.innerHTML = `
<h2>${response.location.name} in ${response.location.region} weather looks like this now:</h2>
<img src=${response.current.condition.icon}></img>
`

}

getWeather()





