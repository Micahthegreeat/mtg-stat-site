class User {
  constructor() {
    const { jsPDF } = window.jspdf;
    this.doc = new jsPDF(
        {
            format: 'letter', 
            unit: 'in'
        }
    );
    this.amount = 0;
  }
  addPicture(pictureUrl) {
    
  }
  removePicture(pictureUrl) {
    
  }
}


document.getElementById('download-btn').addEventListener('click', () => {
    // Access the jsPDF constructor from the global window object
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF(
        {
            format: 'letter', 
            unit: 'in'
        }
    );

    // Add text at specific X and Y coordinates (in millimeters by default)
    doc.setFontSize(16);
    doc.text("Hello World!", 0.787402, 0.787402);
    
    doc.setFontSize(12);
    doc.text("This PDF was created directly in the browser.", 0.787402, 1.1811);

    // Trigger browser download dialog
    doc.save("document.pdf");
});

