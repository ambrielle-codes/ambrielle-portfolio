// global variables

let firstNum = ' '; // stores first operend
let secondNum = ' ';
let operator = ' '; // stores operation type

// gets display element
var display = document.getElementById('display');

// create addNumber function
function addNumber(num){
    if (operator === ' '){
        firstNum += num;
        display.value = firstNum;
        console.log(firstNum);
    } else {
        secondNum += num;
        display.value = secondNum;
        console.log(secondNum);
    }

}

// create addOperator function
function addOperator(op){
    firstNum = display.value;
    console.log(firstNum);
    operator = op;
    console.log(operator);
    // stores display value and resets display so that b can store new display value

}

// create to clear the text area which used for displaying
function clearDisplay(){
    firstNum = ' ';
    secondNum = ' ';
    operator = ' ';
    display.value = ' ';
}

function calculate(){
    let result = 0;
    let a = Number(firstNum);
    let b = Number(display.value);

    
    if (operator === "+"){
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else {
        result = b !== 0 ? a/b : 'Error';
    }
    display.value = result;
    console.log(result);
    firstNum = ' ';
    secondNum = ' ';
    operator = ' ';

}