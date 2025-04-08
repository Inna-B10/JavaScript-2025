import isEven from 'is-even'

export function setupCounter(element) {
	let counter = 0
	const setCounter = count => {
		counter = count
		element.innerHTML = `count is ${counter}`
		console.log(isEven(count))
	}
	element.addEventListener('click', () => setCounter(counter + 1))
	setCounter(0)
}
