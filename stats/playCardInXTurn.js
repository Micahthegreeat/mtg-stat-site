const colors = ['W', 'U', 'B', 'R', 'G'];
export function oneTurn(cardsData) {
    console.log(cardsData);
    const lands = {
        W: 0,
        U: 0,
        B: 0,
        R: 0,
        G: 0
    };
    const oneManaCards = {
        W: 0,
        U: 0,
        B: 0,
        R: 0,
        G: 0
    };
    for(let i = 0; i < cardsData.length; i ++) {
        let card = cardsData[i];
        if(card.type_line.includes('Basic Land')) {
            lands[card.produced_mana[0]] ++;
        }
        if(card.cmc === 1 && card.type_line.includes('Creature')) {
            oneManaCards[card.mana_cost[1]] ++;
        }
    }

    //actual logic here
    const returning = oddsGetting2Cards(7, cardsData.length, [oneManaCards.W], [lands.W]);
    if(returning) {
        return 100 * returning;
    }
    return 0;
}

function oddsGetting2Cards(cardsDrawing, totalCards, cardsAmtA, cardsAmtB) {
    const C = (n, k) => {
        let r = 1;
        for (let i = 1; i <= k; i++) r = r * (n - k + i) / i;
        return r;
    };

    const total = C(totalCards, cardsDrawing);
    let probability = 1;

    for (let i = 0; i < cardsAmtA.length; i++) {
        const a = cardsAmtA[i];
        const b = cardsAmtB[i];

        const noA = C(totalCards - a, cardsDrawing);
        const noB = C(totalCards - b, cardsDrawing);
        const noAB = C(totalCards - a - b, cardsDrawing);

        const pairProb = 1 - (noA + noB - noAB) / total;
        probability *= pairProb;
    }

    return probability;
}