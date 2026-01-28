import { getAllDataFromCall, makeAnImage } from './helper.js';
import { addToDeck } from './inDeck.js';

export async function searchAndShow(url, appendTo) {

    const gotten = await getAllDataFromCall(url);
    console.log(gotten);
    gotten.sort((a, b) => a.collector_number - b.collector_number);
    for(let i = 0; i < gotten.length; i ++) {
        const image = makeAnImage(gotten[i]);
        image.addEventListener('click', function(event) {
            addToDeck(gotten[i]);
        });
        appendTo.appendChild(image);
    }
    
}
