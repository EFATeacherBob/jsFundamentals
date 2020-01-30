/*

    - the forEach() method executes a provided function once for each element in an array
    - the forEach() method does the same as a for loop of for of loop - both iterate over
    properties in an array

*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (let i = 0; i < food.length; i++) {
//     console.log(food[i])
// }

food.forEach((foodItem, ind) => console.log(foodItem, ind)); // called whatever you want

food.forEach((individualFoodItem, ind) => {
    console.log(individualFoodItem, ind);
})

food.forEach(function(foodItem, index) {
    console.log(index, foodItem)
})

let movies = ['It', 'Cujo', 'Godfather'];

movies.forEach(movie => console.log(movie))
movies.push('Godfather: Part II');
// console.log(movies);

movies.splice(1, 1, 'Mary Poppins');
console.log(movies);
