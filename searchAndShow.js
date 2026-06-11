const { getAllDataFromCall, makeAnImage } = await import(`./helper.js`);
// const { addToDeck } = await import(`./inDeck.js`);

export async function searchAndShow(url, appendTo, docObject) {

    const gotten = await getAllDataFromCall(url);
    console.log(gotten);
    // gotten.sort((a, b) => a.collector_number - b.collector_number);
    for(let i = 0; i < gotten.length; i ++) {
        const image = makeAnImage(gotten[i]);
        
        image.addEventListener('click', function(event) {
            docObject.addPicture(image);
        });
        appendTo.appendChild(image);
    }
    
}