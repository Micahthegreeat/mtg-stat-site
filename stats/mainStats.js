import { oneStat } from './graph.js';
import { oneTurn } from './playCardInXTurn.js';


const allCards = [];
let parentElement;

export async function addToStats(cardData) {

    // add card
    allCards.push(cardData);

    // odds of playing a card turn 1
    oneStat(parentElement, 'odds of playing a card turn 1', oneTurn(allCards));



}

export async function subFromStats(cardData) {
    const index = allCards.indexOf(cardData); // Find the index of the item
    if (index > -1) {
    allCards.splice(index, 1); // Remove 1 element at the found index
    } else {
        throw new error("you broke it :(");
    }

    // odds of playing a card turn 1
    oneStat(parentElement, 'odds of playing a card turn 1', oneTurn(allCards));
}

export async function setUpStats() {
    parentElement = document.getElementById('stats');

    oneStat(parentElement, 'odds of playing a card turn 1', 0);

}
