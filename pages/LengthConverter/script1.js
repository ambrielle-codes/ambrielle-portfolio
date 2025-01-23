
// capture input value from the form

function convertToMeters(value, fromUnit){
    if (fromUnit === "kilometers"){
        return value * 1000;  
    } if (fromUnit === "centimeters"){
        return value / 100;
    } if (fromUnit === "feet"){
        return value /  3.281;
    } if (fromUnit === "inches"){
        return value / 39.3701;
    } return value;
}

function convertFromMeters(meters, toUnit){
    if (toUnit === "kilometers"){
        return meters/1000;
    } if (toUnit === "centimeters"){
        return meters * 100;
    } if (toUnit === "feet"){
        return meters * 3.288;
    } if (toUnit === "inches"){
        return meters * 39.3701;
    } return meters;
}


function convert() {

    let input = document.getElementById('inputValue').value;
    console.log(input);

    let fromUnit = document.getElementById('fromUnit').value;
    console.log(fromUnit);
    
    let toUnit = document.getElementById('toUnit').value;
    console.log(toUnit);
    //converts input to meters
    let valueInMeters = convertToMeters(parseInt(input), fromUnit);
    // converts meters to target unit
    const resultInMeters = convertFromMeters(valueInMeters, toUnit);


     
    // display the result
    document.getElementById('result').innerHTML = input + " " + fromUnit + " = " + resultInMeters + " " + toUnit;
}


