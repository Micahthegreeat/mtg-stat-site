import { searchAndShow } from './searchAndShow.js';

    
const myForm = document.getElementById('getACard');
// const cardNames = document.getElementById('cardName')

// 2. Add an event listener for the 'submit' event
myForm.addEventListener('submit', function(event) {
    const possCards = document.getElementById('possCards');
    // Prevent the default form submission (page reload)
    event.preventDefault();
    console.log(document.getElementById('cardName').value);
    possCards.innerHTML = '';
    // console.log('a');
    searchAndShow(
        `https://api.scryfall.com/cards/search?q=${document.getElementById('cardName').value}&unique=cards&as=grid&order=name`,
        possCards
    );

});