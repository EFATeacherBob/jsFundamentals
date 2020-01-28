let y = 12;

function scope() {
    y = 33;
    console.log(y);
}

scope();
console.log(y);

/*
    - const is constant and can't be changed
    - var is scoped to the nearest function block
    - let is scoped to the nearest enclosing block
*/

var x =12;

function varTest() {
    var x = 33;

        if (1 == 1) {
            var x = 45;
            console.log(x);
        }

    console.log(x);
}

varTest();
console.log(x);

let x = 12;

function varTest() {
    var x = 33;

        if (true) {
            let x = 45;
            console.log(x);
        }

    console.log(x);
}

varTest();
console.log(x);

//

function constTest() {
    const scope = 1;

        if (true) {
            const scope = 2;
            console.log(scope);
        }
    console.log(scope);
}

constTest();