export async function getAllDataFromCall(url) {
    let currUrl = url;
    let needMore = true;
    let totalListOfSets = [];
    while (needMore) {

        return(await fetch(currUrl, {
            method: 'GET', // or 'GET', 'PUT', etc.
            headers: {
            }
        })).json();
        // currOn = await currOn.json()
        // // .then(data => console.log('Success:', data))
        // // .catch((error) => console.error('Error:', error));
        // needMore = currOn.has_more;
        // totalListOfSets.push(...currOn.data);
        // currUrl = currOn?.next_page;
        // // console.log(totalListOfSets);
    }
    // return totalListOfSets;
}

export function makeAnImage(data) {
    const image = document.createElement("img");
    if(data.image) {
        image.src = data.image;
    }
    else {

    }
    image.width = 200;
    image.style.margin = '5px';
    image.alt = `Picture of ${data.name}`;
    return image;
}
