const peopleOutput = document.getElementById("people-output")

const peoples = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
      image: "https://images.unsplash.com/photo-1564047484632-71639cf14e09?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
      image: "https://images.unsplash.com/photo-1674574124349-0928f4b2bce3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
      image: "https://images.unsplash.com/photo-1564150533474-2a3aa9634475?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Avery",
      male: false,
      age: 28,
      hobbies: ["coding", "games", "memes"],
      image: "https://images.unsplash.com/photo-1593601680767-3a289f3761aa?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
      image: "https://images.unsplash.com/photo-1503576770205-2af8d10f2551?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
      image: "https://images.unsplash.com/photo-1502990285482-0258c90bb69e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
      image: "https://images.unsplash.com/photo-1508454938498-8a1c2d496af4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
      image: "https://images.unsplash.com/photo-1660151174291-7e3f702e639f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  

  peoples.map((person)=> {
    const personWrapper = document.createElement("div")
    personWrapper.classList.add("person_wrapper");

    const name = document.createElement("h3")
    name.textContent = `${person.name}`

    const age = document.createElement("p")
    age.textContent = `Age: ${person.age}`
    // age.textContent = "Age " + person.age
    
    const imageWrapper = document.createElement("figure")

    const img = document.createElement("img")
    img.src = person.image

    const description = document.createElement("p")
    const text = `${person.name} is a ${person.age} years old ${person.male ? "man, and " : "woman, and s"}he likes ${person.hobbies[Math.floor(Math.random()*person.hobbies.length)]} among other things`
    description.textContent = text;

    personWrapper.appendChild(name)
    personWrapper.appendChild(age)
    personWrapper.appendChild(imageWrapper)
    imageWrapper.appendChild(img)
    personWrapper.appendChild(description)
    peopleOutput.append(personWrapper)



})





let alphabet = "abcdefghijklmnopqrstuvwxyz";
let letterIndexes = [7, 4, 11, 11, 14];

let word = "";

for (let i = 0; i < letterIndexes.length; i++) {
    word += alphabet.charAt(letterIndexes[i]);
}

// console.log(word);