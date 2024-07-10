function(properties, context) {
    
    var textContent = properties.text;

    var specialElementHandlers = {
        '#bypassme': function(element, renderer) {
            return true;
        }
    };

    var pdf = new jsPDF('l', 'mm', 'ledger');
    var margins = {
        top: 40,
        bottom: 60,
        left: 40,
        width: 522
    };

    pdf.fromHTML(
        textContent, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, // y coord
        {
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },
        function(dispose) {
             pdf.text(35, 25, "text");
             pdf.save("filename_text.pdf");
        },
        margins
    );
}
