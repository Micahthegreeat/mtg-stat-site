import { getAllDataFromCall, makeAnImage } from './helper.js';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function searchAndShow(url, appendTo) {
    console.log(1);
    const gotten = await getAllDataFromCall(url);
    // main.innerHTML = '';
    console.log(gotten);
    // collector_number
    gotten.sort((a, b) => a.collector_number - b.collector_number);
    // main.innerHTML = JSON.stringify(gotten);
    for(let i = 0; i < gotten.length; i ++) {
        const image = makeAnImage(gotten[i]);

        appendTo.appendChild(image);
    }
    
}
