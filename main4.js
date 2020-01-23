//fetching API calls
let foodFactory = document.querySelector("#container");
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        parsedFoods.forEach(food => {
            foodFactory.innerHTML += `${food.name}`
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
      })
    })