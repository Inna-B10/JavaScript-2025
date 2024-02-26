export const getData = async (url) => {
    const response = await fetch(url)
    if (response.ok !== true) {
        return;
    }
    const data = await response.json()
    console.log(data)
}

export let fetchedData = null;

export async function getData2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
    if (response.ok !== true) {
        return;
    }
    const data = await response.json()
    console.log(data)
    fetchedData = data
    console.log(fetchedData)
}



export default getData