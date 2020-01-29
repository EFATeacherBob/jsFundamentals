let name = () => {
    return 'Zach';
}

let myNameIs = name();
console.log(myNameIs);


let tipper = (n) => {
    return (0.25 * n).toFixed(2);
}

let tip = tipper(94.89);
console.log("Your meal cost is $100.00 and the tip is $" + tip + ".");