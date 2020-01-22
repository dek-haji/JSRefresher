//introduction to this, it will refer to the object instance itself.
const rufusTheDog = {
    age: 4,
    species: "Dalmatian",
    contentsOfStomach: [],
    eat: function (item) {
        this.contentsOfStomach.push(item)
    },
    puke: function () {
        this.contentsOfStomach.length = 0
    },
    bark: function (something) {
        window.alert(`Rufus barks 'WOOF!' at ${something}`)
    }
}
rufusTheDog.eat("wuuuuuuuh")
console.log(rufusTheDog.contentsOfStomach[0])
