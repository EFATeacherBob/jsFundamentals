function hi() {
    console.log("Hello!");
}

hi;
hi();
console.log(hi);
console.log(hi());

// as soon as our parser sees there is a fx invocation, it happens immediately.

function looper() {
    for (let i = 1; i <= 10; i++)
       console.log(i);
}

looper();

let arr = ['This', 'is', 'really', 'cool'];

function arrayList() { // for of probably better
    for (i in arr)
        console.log(arr[i]);
}

arrayList();


