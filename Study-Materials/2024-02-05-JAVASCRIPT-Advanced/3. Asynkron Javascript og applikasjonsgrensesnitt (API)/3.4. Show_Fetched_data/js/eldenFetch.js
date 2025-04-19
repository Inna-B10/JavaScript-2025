const bosses = document.getElementById("bosses")


const endpoint = "bosses"
const url = `https://eldenring.fanapis.com/api/${endpoint}`

const eldenFetch = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.data)
    const bossHTML = data.data.map((boss) => `
    <div class="boss-container">
        <div class="boss-text">
        <h2>${boss.name}</h2>
        <p>${boss.location}</p>
        <ul>
            ${boss.drops.map((drop) =>
        `<li>${drop}</li>`).join("")}
            </ul>
            <p>${boss.healthPoints}</p>
            <div class="boss-image">
                ${boss.image ? `<img src="${boss.image}" alt="${boss.name}">` : ""}
            </div>
        </div>
        </div>
    `).join("")
    bosses.innerHTML = bossHTML
}

eldenFetch()