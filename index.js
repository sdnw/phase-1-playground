let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let names = [
    "Adriana",
    "Chase",
    "Edmund",
    "Hannah",
    "Kunj",
    "Ric",
    "Jamie",
    "Kelsey",
    "Steven",
    "Braylan",
    "JaiVon",
    "John",
    "Kristina",
    "Ryan",
    "Faith",
    "Marcus",
    "Spencer",
    "Sam",
    "Zach",
  ];

//forEach
// function forEachExample(array) {
//     return array.forEach((item) => {
//         debugger;
//         console.log(item);
//     });
// }

// use forEach to console.log the squared value of each element in the array
// function squaredValue(array) {
//     array.forEach(item => {
//         console.log(item ** 2)
//     })
// }

// map
// function mapExample(array) {
//     return array.map(item => {
//         console.log(item)
//         return "hello world"
//     })
// }

// transform array of names into an array of greeting i.e "Hello Adrianna"

// function mapNames(array) {
//         return array.map(name => {
//         // return 'Hello ' + name
//         return `Hello ${name}`
//     })
// }

// find
let number = numbers.find((num) => {
    return num === 5
})

// filter 
let oddNumbers = numbers.filter(num => {
    return num % 2 === 1 
})

let evenNumbers = numbers.filter(num => {
    return num % 2 === 0
})

let numbersGreaterThanTen = numbers.filter(num => {
    return num > 10
})

function searchName(query) {
    return names.filter(name => {
        return name.includes(query)
    })
}