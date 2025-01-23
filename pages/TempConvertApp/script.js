// const prompt = require("prompt-sync")();

// function convertTemp(inputNum, unit){
//     let result = 0;
//     if (unit === "f"){
//         result = (inputNum - 32) * 5/9;
//         result = inputNum + " fahrenheit is " + Math.round(result * 1000)/ 1000 + " celcius."
//     } else if (unit === "c") {
//         result = (inputNum * 9/5) + 32; 
//         result = inputNum + " celcius is " + Math.round(result * 1000)/ 1000 + " fahrenheit."
//     }
//     return result; 
// }

// let unit = prompt("What is your starting unit? (f or c) ");
// let inputNum = prompt("How many degrees? ");

// console.log(convertTemp(inputNum, unit));



function convert(){
    const output = document.getElementById('output');
    const inputNum = document.getElementById('inputNum').value;
    const inputUnit = document.getElementById('inputUnit').value;
    let result = 0;
    let outputUnit = ' ';

    if (inputNum !== ""){
        if (inputUnit === "f") {
            outputUnit = "Celcius"
            result = (inputNum - 32) * 5/9;  
        } else if (inputUnit === "c") {
            outputUnit = "Fahrenheit"
            result = (inputNum * 9/5) + 32; 
        }
        result = Math.round(result);
        output.style.color = "black";
        output.value = result + " degrees " + outputUnit;
    } else {
        output.value = "Please fill in all fields!";
        output.style.color = "red";
    }
}


