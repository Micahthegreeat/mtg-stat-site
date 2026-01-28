export function oneStat(parentElement, name, chance) {
    
    if(document.getElementById(name)) {
        document.getElementById(`${name} odds`).innerHTML = `${chance}%`;
        document.getElementById(name).style.width = `${chance}%`;
        return;
    }

    const nameHolder = document.createElement('p');
    nameHolder.innerText = name;

    const chanceHolder = document.createElement('p');
    chanceHolder.innerText = `${chance}%`;
    chanceHolder.id = `${name} odds`;

    const outterGraphPart = document.createElement('div');
    outterGraphPart.style.height = '30px';
    outterGraphPart.style.width = '100px';
    outterGraphPart.style.marginTop = '10px';
    outterGraphPart.style.background = "#eee";

    const innerGraphPart = document.createElement('div');
    outterGraphPart.appendChild(innerGraphPart);
    innerGraphPart.style.height = '30px';
    innerGraphPart.style.width = chance + '%';
    innerGraphPart.style.background = "#4caf50";
    innerGraphPart.id = name;

    const wrapper = document.createElement('div');
    wrapper.style.border = "10px";
    wrapper.style.display = 'inline-flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';

    wrapper.appendChild(nameHolder);
    wrapper.appendChild(chanceHolder);
    wrapper.appendChild(outterGraphPart);

    parentElement.appendChild(wrapper);


//     <div id="graphContainer" style="margin-top:10px; width:100px; height:30px; background:#eee;">
//   <div id="bar" style="height:100%; width:50px; background:#4caf50;"></div>
// </div>

}