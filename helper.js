export async function getAllDataFromCall(url) {
    let currUrl = url;
    let needMore = true;
    let totalListOfSets = [];
    while (needMore) {

        let currOn = await fetch(currUrl, {
            method: 'GET', // or 'GET', 'PUT', etc.
            headers: {
            }
        })
        currOn = await currOn.json()
        // .then(data => console.log('Success:', data))
        // .catch((error) => console.error('Error:', error));
        needMore = currOn.has_more;
        totalListOfSets.push(...currOn.data);
        currUrl = currOn?.next_page;
        // console.log(totalListOfSets);
    }
    return totalListOfSets;
}

export function makeAnImage(data) {
    const image = document.createElement("img");
    if(data.image_uris) {
        image.src = data.image_uris.normal;
    }
    else {
        image.src = data.card_faces[0].image_uris.normal;
    }
    image.width = 300;
    image.style.margin = '5px';
    image.alt = `Picture of ${data.name}`;
    return image;
}
