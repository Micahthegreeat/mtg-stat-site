import { makeAnImage } from './helper.js';
import { addToStats, subFromStats } from './stats/mainStats.js';



function subFromDeck(cardObject) {
    subFromStats(cardObject);
    const quantity = parseInt(document.getElementById(`q:${cardObject.name}`).innerHTML) - 1;
    if(quantity == 0){
        document.getElementById(cardObject.name).remove();
    } else {
        document.getElementById(`q:${cardObject.name}`).innerHTML = quantity;
    }
}

export function addToDeck(cardObject) {
    addToStats(cardObject);


    if(document.getElementById(cardObject.name)) {
        document.getElementById(`q:${cardObject.name}`).innerHTML = parseInt(document.getElementById(`q:${cardObject.name}`).innerHTML) + 1
        return;
    }

    const cardsInDeck = document.getElementById('cardsInDeck');

    const wrapper = document.createElement('div');
    wrapper.style.border = "10px";
    wrapper.style.display = 'inline-flex';
    wrapper.style.flexDirection = 'column';  // stack image + controls
    wrapper.style.alignItems = 'center';
    wrapper.id = cardObject.name;

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
    amnt.id = `q:${cardObject.name}`
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