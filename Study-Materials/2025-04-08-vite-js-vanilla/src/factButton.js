export default function FactButton(element) {
	element.innerHTML = 'Click for a fact'

	const fetchCatFact = async () => {
		const response = await fetch('https://catfact.ninja/fact')
		const data = await response.json()
		const fact = data.fact

		const factText = document.createElement('p')
		factText.textContent = fact
		document.body.appendChild(factText)
	}

	element.addEventListener('click', () => {
		fetchCatFact()
	})
}
