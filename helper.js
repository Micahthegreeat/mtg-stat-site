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
