function(properties, context) {


var INPUT = properties.html;

let x = INPUT;
let y = x.replace(/<[^>]+>/g, '\n').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/(\n\n)/g, '\n');

return { plain_text: y };



}