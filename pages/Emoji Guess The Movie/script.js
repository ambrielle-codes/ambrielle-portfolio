movies = [
    {
        name: "The Lion King",
        creator: "Disney",
        emojis: "👑🦁🌴"
    },

    {
        name: "Moana",
        creator: "Disney",
        emojis: "👧🏽🌋⛵"
    },

    {
        name: "Zootopia",
        creator: "Disney",
        emojis: "🦊🐰🚓"
    },

    {
        name: "Toy Story",
        creator: "Disney",
        emojis: "🤠🐖👽"
    },

    {
        name: "Aladdin",
        creator: "Disney",
        emojis: "🧞👦🏽🐒"
    },

    {
        name: "Peter Pan",
        creator: "Disney",
        emojis: "🧚‍♀️🐊🏝️"
    },

    {
        name: "Tangled",
        creator: "Disney",
        emojis: "🏰🦎💇‍♀️"
    },

    {
        name: "Cinderella",
        creator: "Disney",
        emojis: "👠🧹👑"
    },

    {
        name: "Frozen",
        creator: "Disney",
        emojis: "❄️🦌☃️"
    },

    {
        name: "Ratatoullie",
        creator: "Disney",
        emojis: "🐀👨‍🍳🥐"
    },

    {
        name: "Tarzan",
        creator: "Disney",
        emojis: "👨🏽🦍🌴"
    },

    {
        name: "The Jungle Book",
        creator: "Disney",
        emojis: "🐅👦🏽🐍"
    },

    {
        name: "The Lady and the Tramp",
        creator: "Disney",
        emojis: "💞🐕🍼"
    },

    {
        name: "The Fox and the Hound",
        creator: "Disney",
        emojis: "🦊🐶🦉"
    },

    {
        name: "Mulan",
        creator: "Disney",
        emojis: "👧🏻🐱‍👤🐲"
    },

    {
        name: "The Little Mermaid",
        creator: "Disney",
        emojis: "🔱👩🏻‍🦰🧜‍♀️"
    },

    {
        name: "Elemental",
        creator: "Disney",
        emojis: "🔥💗💧"
    },

    {
        name: "Pinnochio",
        creator: "Disney",
        emojis: "👦🏻🤥🦗"
    },

    {
        name: "The Good Dinosaur",
        creator: "Disney",
        emojis: "🦕🦖👦🏽"
    },

    {
        name: "Big Hero 6",
        creator: "Disney",
        emojis: "🗼🦹👦🏻"
    },

    {
        name: "Wall-E",
        creator: "Disney",
        emojis: "💞🤖🌱"
    },

    {
        name: "Chicken Little",
        creator: "Disney",
        emojis: "🐥⚾🚀"
    },

    {
        name: "Up",
        creator: "Disney",
        emojis: "👨🏻‍🦳👦🏻🎈"
    },

    {
        name: "The Emperor's New Groove",
        creator: "Disney",
        emojis: "🦙👑👦🏻"
    },

    {
        name: "Lilo and Stitch",
        creator: "Disney",
        emojis: "👧🏻👽🌺"
    },
    
    {
        name: "Luca",
        creator: "Disney",
        emojis: "🧜‍♂️🍝🛵"
    },

    {
        name: "Encanto",
        creator: "Disney",
        emojis: "🏘️🕯️👩🏽"
    },

    {
        name: "Dumbo",
        creator: "Disney",
        emojis: "🐘🐭🎪"
    },

    {
        name: "Fantasia",
        creator: "Disney",
        emojis: "🧹🐳🔮"
    },

    {
        name: "Hercules",
        creator: "Disney",
        emojis: "⚡🐐💪"
    },

    {
        name: "Coco",
        creator: "Disney",
        emojis: "🎸👵💀"
    }
    
]


let chosenIndex = 0;
let chosenMovie = "";
let optionIndexes = [];
function getRandom(){
    return Math.floor(Math.random() * movies.length);
}

function evaluateGuess(answer){
    const outputText = document.getElementById('outputText');
    document.getElementById('nextButton').style.display = "block";

    document.getElementById('optionsContainer').style.display = 'none';
 
    console.log('answer', answer);
    let html = '';
        if (Number(answer) === chosenIndex){
            html = 'Correct!'
        } else {
            html = 'Incorrect.'
        }
        html += ` The movie is ${chosenMovie.name} by ${chosenMovie.creator}.`;
    outputText.style.display = "block";
    outputText.innerHTML = html;
}

function generateOptions(){
    const outputText = document.getElementById('outputText');
    document.getElementById('nextButton').style.display = "none";

    document.getElementById('optionsContainer').style.display = 'grid';

    outputText.innerHTML = "";
    outputText.style.display = "none";


    optionIndexes = [];

    chosenIndex = getRandom();
    chosenMovie = movies[chosenIndex];
    console.log(chosenIndex);

    for (let i = 1; i <= 4; i++) {
        let movieIndex = getRandom();
        while (movieIndex === chosenIndex || optionIndexes.includes(movieIndex)){
            movieIndex = getRandom();
        }
        optionIndexes.push(movieIndex);
    }
    optionIndexes[Math.floor(Math.random() * 4)] = chosenIndex;

    console.log(optionIndexes);

    renderOptions(optionIndexes);
    
}


function renderOptions(optionIndexes){
    const optionsContainer = document.getElementById('optionsContainer');
    emojiOutput = document.getElementById('emojiOutput');

    emojiOutput.innerHTML = chosenMovie.emojis;


    let html = '';
    optionIndexes.forEach((optionIndex, index) => {
        html += `
        <button class="options" id="option${index}" onclick="evaluateGuess(${optionIndex})">${movies[optionIndex].name}</button>`
    });


    optionsContainer.innerHTML = html;

}

generateOptions();
