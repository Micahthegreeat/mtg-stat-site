const SCRIPT_ROOT = new URL(import.meta.url).origin;
const { oneStat } = await import(`${SCRIPT_ROOT}/graph.js`);
const { creatureByTurnX } = await import(`${SCRIPT_ROOT}/playCardInXTurn.js`);


const allCards = [];
let parentElement;

export async function addToStats(cardData) {

    // add card
    allCards.push(cardData);

    // odds of playing a card turn 1
    oneStat(parentElement, 'odds of playing a creature turn 1', creatureByTurnX(allCards));

    oneStat(parentElement, 'odds of oppening hand having a creaturn to play turn 1', creatureByTurnX(allCards, 0));



}

export async function subFromStats(cardData) {
    const index = allCards.indexOf(cardData); // Find the index of the item
    if (index > -1) {
    allCards.splice(index, 1); // Remove 1 element at the found index
    } else {
        throw new error("you broke it :(");
    }

    // odds of playing a card turn 1
    oneStat(parentElement, 'odds of playing a creature turn 1', creatureByTurnX(allCards));

    oneStat(parentElement, 'odds of oppening hand having a creaturn to play turn 1', creatureByTurnX(allCards, 0));

}

export async function setUpStats(parentElement) {
    oneStat(parentElement, 'odds of playing a creature turn 1', 0);
    oneStat(parentElement, 'odds of oppening hand having a creaturn to play turn 1', 0);
}
