import { oneStat } from './graph.js';
import { oneTurn } from './playCardInXTurn.js';


const allCards = [];
let parentElement;

export async function addToStats(cardData) {

    // add card
    allCards.push(cardData);

    // odds of playing a card turn 1
    console.log('should move graph');
    oneStat(parentElement, 'odds of playing a card turn 1', oneTurn(allCards));



}

export async function subFromStats(cardData) {
    
}

export async function setUpStats() {
    parentElement = document.getElementById('stats');

    oneStat(parentElement, 'odds of playing a card turn 1', 0);

}
