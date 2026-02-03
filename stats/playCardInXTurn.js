const colors = ['W', 'U', 'B', 'R', 'G'];
export function creatureByTurnX(cardsData, turnNumber = 1) {
    let landcount = 0;
    const lands = {
        W: 0,
        U: 0,
        B: 0,
        R: 0,
        G: 0
    };
    const tapLands = {
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
            landcount ++;
        } else if (card.type_line.includes('Land')) {
            tapLands[card.produced_mana[0]] ++;
            landcount ++;
        }else if(card.cmc === 1 && card.type_line.includes('Creature')) {
            oneManaCards[card.mana_cost[1]] ++;
        }
    }
    //actual logic here
    
    let returning = 0;

    function combinations(arr, k) {
        const result = [];
        function backtrack(start, combo) {
            if (combo.length === k) {
                result.push([...combo]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                combo.push(arr[i]);
                backtrack(i + 1, combo);
                combo.pop();
            }
        }
        backtrack(0, []);
        return result;
    }

    // add odds of getting one
    for (const combo of combinations(colors, 1)) {
        const cardsAmtA = combo.map(c => oneManaCards[c]);
        const cardsAmtB = combo.map(c => lands[c]);
        const odds = oddsGetting2Cards(turnNumber + 7, cardsData.length, cardsAmtA, cardsAmtB);
        returning += odds;
    }

    // subtract odds of getting two
    for (let k = 2; k <= 5; k++) { // 2, 3, 4-color combos
        const combos = combinations(colors, k);
        for (const combo of combos) {
            const cardsAmtA = combo.map(c => oneManaCards[c]);
            const cardsAmtB = combo.map(c => lands[c]);
            const odds = oddsGetting2Cards(7, cardsData.length, cardsAmtA, cardsAmtB);
            returning -= odds;
        }
    }
    
    return returning * 100;
}

function oddsGetting2Cards(cardsDrawing, totalCards, cardsAmtA, cardsAmtB) {
    if (cardsDrawing > 0 && cardsDrawing >= totalCards) {
        for (let i = 0; i < cardsAmtA.length; i++) {
            if (cardsAmtA[i] <= 0 || cardsAmtB[i] <= 0) return 0;
        }
        return 1;
    }
    // console.log(`cardsDrawing: ${cardsDrawing}, totalCards: ${totalCards}, cardsAmtA: ${cardsAmtA[0]}, cardsAmtB: ${cardsAmtB[0]}`);
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

    if(probability) {
        return probability;
    }
    return 0;
}