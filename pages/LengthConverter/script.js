let length = 0;

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const display = document.getElementById('result');

let input = document.getElementById("inputValue");
let result = 0;

function convert(){

    length = input.value;

    let unit1 = fromUnit.value;
    console.log("Unit 1", unit1);

    let unit2 = toUnit.value;
    console.log("Unit 2", unit2);

    if (unit1 === unit2){
        result = length;
    } else if (unit1 === "meters" && unit2 == "centimeters"){
        result = length * 100;
    } else if (unit1 === "centimeters" && unit2 == "meters") {
        result = length / 100;
    } else if (unit1 === "meters" && unit2 == "kilometers"){
        result = length / 1000;
    } else if (unit1 === "kilometers" && unit2 === "meters") {
        result = length * 1000;
    } else if (unit1 === "kilometers" && unit2 === "centimeters"){
        result = length * 100000;
    } else if (unit1 === "centimeters" && unit2 === "kilometers"){
        result = length / 100000;
    }
    
    console.log(length);
    display.value = result;

    console.log("From " + length + " " + unit1 + " to " + result + " " + unit2);
    

}