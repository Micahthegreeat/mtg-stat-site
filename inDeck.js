import { makeAnImage } from './helper.js';
// import { addToStats, subFromStats } from './stats/mainStats.js';

let pdfdoc;

export function setUpDoc(pdfdoc1) {
    pdfdoc = pdfdoc1;
}

function subFromDeck(cardObject) {
    pdfdoc.addPicture(cardObject.image);
    const quantity = parseInt(document.getElementById(`q:${cardObject.number}`).innerHTML) - 1;
    if(quantity == 0){
        document.getElementById(cardObject.number).remove();
    } else {
        document.getElementById(`q:${cardObject.number}`).innerHTML = quantity;
    }
}

export function addToDeck(cardObject) {
    pdfdoc.addPicture(cardObject.image);


    if(document.getElementById(cardObject.number)) {
        document.getElementById(`q:${cardObject.number}`).innerHTML = parseInt(document.getElementById(`q:${cardObject.number}`).innerHTML) + 1
        return;
    }

    const cardsInDeck = document.getElementById('cardsInDeck');

    const wrapper = document.createElement('div');
    wrapper.style.border = "10px";
    wrapper.style.display = 'inline-flex';
    wrapper.style.flexDirection = 'column';  // stack image + controls
    wrapper.style.alignItems = 'center';
    wrapper.id = cardObject.number;

    wrapper.appendChild(makeAnImage(cardObject));

    const subWrapper = document.createElement('div');
    wrapper.appendChild(subWrapper);
    
    const addButton = document.createElement("button");
    addButton.innerText = '+';
    addButton.style.display = 'inline-flex';
    addButton.addEventListener('click', function(event) {
        addToDeck(cardObject);
    });
    subWrapper.appendChild(addButton);

    const amnt = document.createElement("p");
    amnt.innerText = 1;
    amnt.style.padding = '6px';
    amnt.style.display = 'inline-flex';
    amnt.id = `q:${cardObject.number}`
    subWrapper.appendChild(amnt);

    const subButton = document.createElement("button");
    subButton.innerText = '-';
    subButton.style.display = 'inline-flex';
    subButton.addEventListener('click', function(event) {
        subFromDeck(cardObject);
    });
    subWrapper.appendChild(subButton);

    cardsInDeck.appendChild(wrapper);
}