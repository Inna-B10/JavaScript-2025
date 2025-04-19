export const modifiedPeople = (arr) => {
    return arr.map(person => ({
        ...person,
        name: `| ${person.name} |`,
        age: ` ${person.age ** 2}`,
        occupation: `Nr 1. ${person.occupation}`
    }))
}