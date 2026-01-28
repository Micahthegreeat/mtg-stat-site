import { searchAndShow } from './searchAndShow.js';

const myForm = document.getElementById('getACard');

myForm.addEventListener('submit', function(event) {
    const possCards = document.getElementById('possCards');
    // Prevent the default form submission (page reload)
    event.preventDefault();
    possCards.innerHTML = '';
    searchAndShow(
        `https://api.scryfall.com/cards/search?q=${document.getElementById('cardName').value}&unique=cards&as=grid&order=name`,
        possCards
    );

});

const clearSearch = document.getElementById('clearSearch');

clearSearch.addEventListener('click', function(event) {
    const possCards = document.getElementById('possCards');
    possCards.innerHTML = '';
});