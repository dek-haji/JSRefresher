// playing with objects and using FOR OF with object.values();

// creating new array of objects
const allCars = [{
        model: "Mustang",
        color: "Midnight Blue",
        year: 1976,
        length: 120,
        width: 62,
        height: 47
    },
    {
        model: "Xterra",
        color: "Forest Green",
        year: 2011,
        length: 144,
        width: 71,
        height: 55
    },
    {
        model: "Thunderbird",
        color: "Red",
        year: 2005,
        length: 115,
        width: 58,
        height: 42
    },
    {
        model: "Suburban",
        color: "Grey",
        year: 2015,
        length: 149,
        width: 73,
        height: 58
    }
]

const output = document.querySelector("#app");
// using for of by object.values() now
// Iterate the array of cars. Individual objects stored in `car`.
//so object.value is getting you the value of the object
allCars.forEach(car => {
    for (const value of Object.values(car)) {
        output.innerHTML += `<div>${value}</div>`
    }
})

//now lets try using for of object.keys();
// object.keys getting you the keys of the object, not the value 
allCars.forEach(car => {
    for (const key of Object.keys(car)) {
        output.innerHTML += `<div>${key}</div>`
    }
})

// ok now we using object.entries
//This method returns an array, with the first item being the key name, and the second item being the value.
allCars.forEach(car => {
    for (const entry of Object.entries(car)) {
        output.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})