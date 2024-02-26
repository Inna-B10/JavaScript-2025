// export const getData = async (url) => {
//     const response = await fetch(url)
//     if (response.ok !== true) {
//         return;
//     }
//     const data = await response.json()
//     console.log(data)
// }

export let fetchedData;

async function getData(url) {
    const response = await fetch(url)
    if (response.ok !== true) {
        return;
    }
    const data = await response.json()
    console.log(data)
    fetchedData = data
    console.log(fetchedData)
}





export default getData