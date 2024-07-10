function(properties, context) {

var display = properties.input
var input_id = "#"+properties.input_id
    
var cursorPos = $(input_id).prop('selectionStart');
            var v = $(input_id).val();
            var textBefore = v.substring(0,  cursorPos );
            var textAfter  = v.substring( cursorPos, v.length );
            $(input_id).val( textBefore+ display +textAfter );
            var elementtrigger = document.querySelector(input_id);
            const evt = new Event("change");
            elementtrigger.dispatchEvent(evt);



}