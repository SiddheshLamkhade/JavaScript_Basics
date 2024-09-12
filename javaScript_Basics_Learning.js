let k;
k=34;
console.log(k);

let g=23;
g='amar';  //Dynamic language
console.log(g);
//Variables are declared using let keyword

//............🔴🟠🟡JavaScript Projects Faulty Calculator..........
let random = Math.random();
let a= prompt("Enter first number");
let b=prompt("Enter second number");
let c=prompt ("Enter Operation");
let object={ 
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random>0.1)
{
    //perform correct calculation
}
else
{
    //perform wrong calculation
    c=object[c];
}
