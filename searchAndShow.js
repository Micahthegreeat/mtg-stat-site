const SCRIPT_ROOT = new URL(import.meta.url).origin;
const { getAllDataFromCall, makeAnImage } = await import(`${SCRIPT_ROOT}/helper.js`);
const { addToDeck } = await import(`${SCRIPT_ROOT}/inDeck.js`);

export async function searchAndShow(url, appendTo) {

    const gotten = await getAllDataFromCall(url);
    gotten.sort((a, b) => a.collector_number - b.collector_number);
    for(let i = 0; i < gotten.length; i ++) {
        const image = makeAnImage(gotten[i]);
        image.addEventListener('click', function(event) {
            addToDeck(gotten[i]);
        });
        appendTo.appendChild(image);
    }
    
}