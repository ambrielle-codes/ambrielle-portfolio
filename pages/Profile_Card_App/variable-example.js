// create variables

const fName = "John Doe";
const age = 28;
const occupation = 'Web Developer';
const bio = 'Passionate about coding and teaching others.';
const profilePicture = "profile.png";

const profileContainer = document.getElementById('profile-container');

// string literal example 
// - '' or "" 
// - "string " + variable

// const profileCard = '<div class="card">' +
//     '<img src="' + profilePicture + '" alt="Profile Picture">' +
//     '<h2>'+ fName +'</h2>' +
//     '<p>' + age + '</p>' +
//     '<p>' + occupation + '</p>' +
//     '<p>' + bio + '</p>'


//     + '</div>'

const profileCard = 
    `<div class="card"> 
        <img src="${profilePicture}" alt="Profile Picture">
        <h2>${fName}</h2>
        <p>${age}</p>
        <p>${occupation}</p>
        <p>${bio}</p>
    </div>`

profileContainer.innerHTML = profileCard;