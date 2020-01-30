let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
console.log('Original Array:', food);

food.push('Pizza');
console.log('push: ', food);

// splice

food.splice(1, 1, 'Bananas');
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potto Pie');
console.log('splice 2: ', food);

food.pop();
console.log('pop:',food);

food.shift(); // removes first element in the array
console.log('shift: ', food);

food.unshift('Popcorn', 'Steak'); // unshift adds one or more items to the beginning of the array
console.log('unshift: ', food);

console.log('Original array:', food);

