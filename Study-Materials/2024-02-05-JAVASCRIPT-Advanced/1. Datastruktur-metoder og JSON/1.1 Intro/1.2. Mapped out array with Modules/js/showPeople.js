const cardContainer = document.getElementById("cards_container")

export const showPeople = (data) => {
    data.map((person) => {
        const card = `
        <div class="card standard-box_style">
            <img src="${person.image}" alt="${person.name}'s profile picture">
            <div class="card-content">
            <h2>${person.name}</h2>
            <p>Age: ${person.age}</p>
            <p>Occupation: ${person.occupation}</p>
            </div>
        </div>
        `;

        const newCard = document.createElement("div")
        newCard.innerHTML = card;
        cardContainer.appendChild(newCard)
    })
}


//! Without using innerHtml:
function showPeopleWithLongCode(data) {
    data.map((person) => {
        // Create card container
        const card = document.createElement("div");
        card.classList.add("card", "standard-box_style");

        // Create image element
        const image = document.createElement("img");
        image.src = person.image;
        image.alt = `${person.name}'s profile picture`;

        // Create card content container
        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        // Create heading element
        const heading = document.createElement("h2");
        heading.textContent = person.name;

        // Create paragraph elements
        const ageParagraph = document.createElement("p");
        ageParagraph.textContent = `Age: ${person.age}`;

        const occupationParagraph = document.createElement("p");
        occupationParagraph.textContent = `Occupation: ${person.occupation}`;

        // Append elements to their respective containers
        cardContent.appendChild(heading);
        cardContent.appendChild(ageParagraph);
        cardContent.appendChild(occupationParagraph);

        card.appendChild(image);
        card.appendChild(cardContent);

        // Append the card to the cardsContainer
        cardContainer.appendChild(card);
    });
}



