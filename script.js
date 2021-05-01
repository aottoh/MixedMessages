/*
Filename: script.js
Project: MixedMessages
Author: Alexander Hoffmann
Version: 0.1.2
Date: 2021-05-01
*/


// 01 - SETTING REQUIRED VARIABLES

let arrAllElements = [
    {
        _name: 'Augsburg',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Austria',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Andorra',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Argentina',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Amazon',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Aachen',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Ahmedabad',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Alz',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Essen',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Erfurt',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Estonia',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Egypt',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Elb',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Ingolstadt',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'India',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Israel',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Ireland',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Inn',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Isar',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Oslo',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Offenbach',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Oman',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Ohio River',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Udaipur',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'USA',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'UK',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'UAE',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Uzbekistan',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Union River',
        _type: 'river',
        _wasPlayed: false,
    },
    {
        _name: 'Germersheim',
        _type: 'city',
        _wasPlayed: false,
    },
    {
        _name: 'Germany',
        _type: 'country',
        _wasPlayed: false,
    },
    {
        _name: 'Ganges',
        _type: 'river',
        _wasPlayed: false,
    }
];
const arrAllowedLetters = ['A', 'E', 'I', 'O', 'U', 'G'];
let gameStatus = true;


// 02 - DECLARING NECESSARY FUNCTIONS

const prompt = require('prompt-sync')();

const checkUserInput = letter => {

    /* Checks if the user input is valid. An input 
    is considered valid, if it contains an 
    'allowed letter' (arrAllowedLetters) or the word 
    'exit' is typed. In case of exit, the 'gameStatus'
    is changed to false. In case of invalid Input, the
    user is prompted to enter a new input. */

    let validInput = false;
    
    if(letter === 'EXIT'){
        gameStatus = false;
        console.log('You have exited the game');
    } else if(!arrAllowedLetters.includes(letter)){
        console.log('Enter a valid letter.');
    } else {
        return validInput = true;
    }

};

const getRandomCCR = arr =>{

    /* Takes an object array as an argument. If the 
    array is empty, a predefined statement will be 
    returned. If the array contains objects, the name
    property of the randomly chose object is returned. */

    if(arr.length < 1){return "I'm out of words, dude. You're too amazing."};
    return arr[Math.floor(Math.random() * arr.length)]._name;

};


// 03 - RUNNING THE ALGO

while(gameStatus){

    /* The game status is initially declared as true
    and may only turn false upon the first call of 
    checkUserInput (evaluating gameStatus to false,
    if the user enters the word 'exit'.) */

    let userInput = prompt('Enter a vocal letter or exit: '); // Prompting user to log an entry
    userInput = userInput.toUpperCase(); // Changing userInput to upper case, as all CCR-names are capitalized
    checkedInput = checkUserInput(userInput); // Determine if we canmake use of the userInput
    if(gameStatus === false) {break}; // Upon checking user input, the game status might switch to false already

    // Filter for possibles CCRs, based on the starting name and a check if the CCR has been played before
    let arrPosCities = arrAllElements.filter(element => (element._type === 'city') && (element._name[0] === userInput) && (element._wasPlayed === false));
    let arrPosCountries = arrAllElements.filter(element => (element._type === 'country') && (element._name[0] === userInput)&& (element._wasPlayed === false));
    let arrPosRivers = arrAllElements.filter(element => (element._type === 'river') && (element._name[0] === userInput)&& (element._wasPlayed === false));

    // Call getRandomCCR on the filtered arrays to generate the string values for use in the output
    let selectedCity = getRandomCCR(arrPosCities);1
    let selectedCountry = getRandomCCR(arrPosCountries);
    let selectedRiver = getRandomCCR(arrPosRivers);

    // Change the _wasPlayed property for each CCR object, in case it was selected
    arrAllElements.forEach(element =>{
        if((element._name === selectedCity) || (element._name === selectedCountry) || (element._name === selectedRiver)){
            element._wasPlayed = true;
        }
    });

    // Generate the output
    if(checkedInput){
        console.log(`Your city starting with ${userInput}: ${selectedCity}`);
        console.log(`Your country starting with ${userInput}: ${selectedCountry}`);
        console.log(`Your river starting with ${userInput}: ${selectedRiver}`);
    }
}
