function add (a,b) {
    return a+b;
}

function substract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b) {
    return a/b;
}

function operate (operator,num1,num2) {
    let number1 = Number(num1);
    let number2 = Number(num2); 
    switch(operator) {
        case "add": return add(number1,number2); 
        break;
        case "substract": return substract(number1,number2); 
        break;
        case "multiply": return multiply(number1,number2) ;
        break;
        case "divide": return divide(number1,number2) ;
        break;
        case "default": return "error" ;
        break;
    }
}

let display="";
let previous="";
let operator="";
let current="";

const buttons = document.querySelectorAll(".button");
const operators = document.querySelectorAll(".bOps");
const clear = document.querySelector(".Clear");
const equals = document.querySelector(".Equals");
const displayScreen = document.querySelector("#display"); 

console.log(displayScreen.textContent);
console.log(buttons.length);

buttons.forEach(button => button.addEventListener("click", (e) => {clickNumber(e);}));
operators.forEach(button => button.addEventListener("click", (e) => {clickOperator(e);}));
clear.addEventListener("click", () => clearAll());
equals.addEventListener("click", () => equal());

function clickNumber(event) {
    if (previous !== "" && operator === "") {return}; 
    display += event.target.textContent;
    current += event.target.textContent
    displayScreen.textContent = display;
    console.log(operator);
    console.log(previous);
    console.log(current);
}

function clickOperator(event) {
    if (current === "") {return};
    if (operator === "") {
        previous = display;
    } else {
        previous = operate(operator,previous,current);
        display = previous;
    }
    operator = event.target.id;
    display += event.target.textContent
    current = ""
    displayScreen.textContent = display;
    console.log(operator);
    console.log(display);
    console.log(previous);
}

function clearAll() {
    display="";
    previous="";
    operator="";
    current="";
    displayScreen.textContent = display
}

function equal() {
    if (operator === "" || previous === "" || current === "") {return};
    displayScreen.textContent = operate(operator,previous,current);
    display="";
    previous="";
    operator="";
    current="";
}