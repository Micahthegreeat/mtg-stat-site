const { searchAndShow } = await import(`./searchAndShow.js`);
const { setUpDoc } = await import(`./inDeck.js`);


class doc {
    constructor() {
        const { jsPDF } = window.jspdf;
        this.doc = new jsPDF(
            {
                format: 'letter',
                unit: 'in'
            }
        );
        this.listOfCards = [];
    }
    addPicture(pictureUrl) {
        this.listOfCards.push(pictureUrl);
        console.log(`adding ${pictureUrl}`);
    }
    removePicture(pictureUrl) {
        const index = this.listOfCards.indexOf(pictureUrl);

        if (index > -1) {
            this.listOfCards.splice(index, 1);
            console.log(`removing ${pictureUrl}`);
        } else {
            console.log(`${pictureUrl} does not exist in the list`);
        }
    }
    genDoc() {
        console.log(this.listOfCards);
        // Access the jsPDF constructor from the global window object
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF(
            {
                format: 'letter',
                unit: 'in'
            }
        );

        for(let i = 0; i < this.listOfCards.length; i++) {
            let x = 0.265;
            let y = .1;

            if(i % 3 == 1) {
                x = 3.01;
            }
            if(i % 3 == 2) {
                x = 5.755;
            }
            if(Math.floor(i / 3) % 3 == 1) {
                y = 3.66;
            }
            if(Math.floor(i / 3) % 3 == 2) {
                y = 7.22;
            }

            doc.addImage(this.listOfCards[i], 'PNG', x, y, 2.48, 3.46);

            if(i % 9 == 8 && i != 0 && i + 1 < this.listOfCards.length) {
                doc.addPage({
                        format: 'letter',
                        unit: 'in'
                    });
            }
        }

        // Add text at specific X and Y coordinates (in millimeters by default)
        // doc.setFontSize(16);
        // doc.text("Hello World!", 0.787402, 0.787402);

        // doc.setFontSize(12);
        // doc.text("This PDF was created directly in the browser.", 0.787402, 1.1811);

        // Trigger browser download dialog
        doc.save("document.pdf");
    }
}

const pdfdoc = new doc()

setUpDoc(pdfdoc);

const pics = document.getElementById("main");

searchAndShow('pictures.json', pics);

document.getElementById('download-btn').addEventListener('click', () => {
    pdfdoc.genDoc();
});

document.getElementById('download-backing-btn').addEventListener('click', () => {
    const backdoc = new doc();
    for(let i = 0; i < 9; i ++ ) {
        backdoc.addPicture("./pictures/back.png");
    }

    backdoc.genDoc();
});


