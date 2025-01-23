let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let groceriesExpense = 0;
let transportExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;
let savingsGoal = 0;


function add(inputId){
    let input = document.getElementById(inputId);
    let amount = Number(input.value)
    if (amount > 0){
        if (inputId === 'salaryInput') {
            totalIncome = totalIncome + amount;
            console.log(totalIncome)
        } else if (inputId === 'rentInput'){
            rentExpense = rentExpense + amount;
        } else if (inputId === 'utilitiesInput'){
            utilitiesExpense = utilitiesExpense + amount;
        } else if (inputId === 'groceriesInput'){
            groceriesExpense = groceriesExpense + amount;
        } else if (inputId === 'transportInput'){
            transportExpense = transportExpense + amount;
        } else if (inputId === 'entertainmentInput'){
            entertainmentExpense = entertainmentExpense + amount;
        } else if (inputId === 'miscInput'){
            miscExpense = miscExpense + amount;
        } else if (inputId === 'savingsInput'){
            savingsGoal = amount;
        }  
    }
    input.value = '';
    updateSummary();
}

function updateSummary() {
    let housingExpenses = rentExpense + utilitiesExpense;
    let livingExpenses = groceriesExpense + transportExpense;
    let otherExpenses = entertainmentExpense + miscExpense;
    let totalExpenses = housingExpenses + livingExpenses + otherExpenses;
    let remainingBudget = totalIncome - totalExpenses;
    let actualSavings = remainingBudget;
    let yearlyIncome = totalIncome * 12;
    let yearlyExpenses = totalExpenses * 12;
    let yearlySavings = remainingBudget * 12;

    let variables = [totalIncome, housingExpenses, livingExpenses, otherExpenses, totalExpenses, remainingBudget, savingsGoal, actualSavings, yearlyIncome, yearlyExpenses, yearlySavings];
    let Ids = ['totalIncome', 'housingExpenses', 'livingExpenses', 'otherExpenses', 'totalExpenses', 'remainingBudget', 'savingsGoal', 'actualSavings', 'yearlyIncome', 'yearlyExpenses', 'yearlySavings'];

    for (let i = 0; i < variables.length; i++){
        console.log(Ids[i], variables[i]);
        document.getElementById(Ids[i]).innerHTML = variables[i];
    }
}
