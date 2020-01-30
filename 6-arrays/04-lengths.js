let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let arr = ['blue', 25, true, ['string'], {key: 'vaue'}];
console.log(arr.length);
console.log(arr.toString());

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = myArr.map(x => x);

if (myArr instanceof Array) {
    const reversed = myArr.reverse();
    console.log(reversed);
    console.log(myArr);
    console.log(newArr);
} else {
    console.log("Not an array!");
}