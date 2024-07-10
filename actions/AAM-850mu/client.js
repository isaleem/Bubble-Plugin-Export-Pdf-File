function(properties, context) {

	//alert(properties.html);
    var htmlContent = properties.html;
    specialElementHandlers = {
	'#bypassme': function(element, renderer){
		// true = "handled elsewhere, bypass text extraction"
		return true
	}
	}
    
    var pdf = new jsPDF();

   margins = {
    top: 0,
    bottom: 60,
    left: 20,
    width: 522
  };

pdf.fromHTML(
  	htmlContent // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': specialElementHandlers
  	},
  	function (dispose) {
        pdf.save('Test.pdf');
      },
  	margins
  )

} 