// JS introduction of objects
const SoccerPlayer = {
    position: "Midfielder",
    name: "Ronaldo",
    number: 11,
    country: "Portugal",
    team: "Juventus"
}
SoccerPlayer.position = "striker"
console.log(SoccerPlayer.position);
//dot notation 101
console.log(`Lassie's age is ${SoccerPlayer.number}`);
//bracket notation 101
console.log(SoccerPlayer["country"])
//Js Array 101
const animals = ["cat", "dog", "monkey", "donkey"]
console.log("my favorite animal is", animals[1]);
//for loop 101
for (let i = 0; i < animals.length; i++) {
    console.log(`I have ${animals[i]}`);
}
//for each 101
animals.forEach(animal => {
    console.log(`I am using foreach ${animal}`)
});

//function and logics 101
function displayPlayer(name, number) {
    console.log(`this is the best player in the world ${name} and his number is ${number}`)
}
displayPlayer("ronaldo", 12)
// using Math.random Method
const noice = function() {
    return Math.random()
}
console.log(noice());
function noice1() {
    return Math.random()
}
console.log(noice1())

//using function on the dom
const updateDom = function (message) {
    const el = document.getElementById("dom1")
    el.innerHTML += message;
}
updateDom(`This is the Dom`)

// let's play chicken Monkey game again
for (let currentNumber = 0; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 2 === 0) {
        console.log(`even numbers ${currentNumber}`)
    } else if(currentNumber % 5 === 0){
        console.log(`adds 10 to each time it loops${currentNumber}`)
    }
}
//