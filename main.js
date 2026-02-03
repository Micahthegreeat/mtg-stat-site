const SCRIPT_ROOT = new URL(import.meta.url).origin;
const {searchAndShow } = await import(`${SCRIPT_ROOT}/searchAndShow.js`);
const { setUpStats } = await import(`${SCRIPT_ROOT}/stats/mainStats.js`);

await fetch(`${SCRIPT_ROOT}/main.html`).then(r => r.text()).then(m => document.querySelector('main').innerHTML = m );
fetch(`${SCRIPT_ROOT}/README.md`).then(r=>r.text()).then(m=>possCards.innerHTML=new showdown.Converter().makeHtml(m));

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