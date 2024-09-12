let k;
k = 34;
console.log(k);

let g = 23;
g = 'amar';  // Dynamic language
console.log(g);

// Variables are declared using let keyword

// ............🔴🟠🟡JavaScript Projects Faulty Calculator..........
let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter Operation");

let object = { 
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);  //eval(2 - 3)
} else {
    // Perform wrong calculation
    c = object[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);    
}
