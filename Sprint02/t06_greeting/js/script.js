"use strict"
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');

if (firstName.match(/^\b[a-zA-Z]+\b$/i) && lastName.match(/^\b[a-zA-Z]+\b$/i))  {
    let orFirstName = (firstName[0].toUpperCase() + firstName.slice(1).toLowerCase());
    let orLastName = (lastName[0].toUpperCase()+ lastName.slice(1).toLowerCase())
    alert('Greetings' + orFirstName + ' ' + orLastName)
} else {
    alert('Wrong input');
}

