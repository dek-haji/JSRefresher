
const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
 let cooked = false;
function grill(currentObject) {
    for(let i = 0; i < foods.length; i++) {
        if (foods[i].cooked == false) {
            foods[i].cooked += true;
            console.log(`${currentObject} is cooked`)
        } else if(foods[i].cooked == false){
            console.log("its not cooked")
        }
    }
   // Modify the food so that it is cooked
    currentObject.cooked = true;
    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
 };
grill(corn)
console.log(cookedFood[0].name, "is cooked");



