import { searchAndShow } from './searchAndShow.js';
import { setUpStats } from './stats/mainStats.js';

await fetch('./main.html').then(r => r.text()).then(m => document.querySelector('main').innerHTML = m );
fetch('/README.md').then(r=>r.text()).then(m=>possCards.innerHTML=new showdown.Converter().makeHtml(m));

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

setUpStats();