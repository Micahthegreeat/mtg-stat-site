import { getAllDataFromCall } from './helper.js';

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
        const image = document.createElement("img");
        if(gotten[i].image_uris) {
            image.src = gotten[i].image_uris.normal;
        }
        else {
            image.src = gotten[i].card_faces[0].image_uris.normal;
        }
        image.width = 300;
        image.style.margin = '5px';
        image.alt = `Picture of ${gotten[i].name}`;

        appendTo.appendChild(image);
    }
    
}
