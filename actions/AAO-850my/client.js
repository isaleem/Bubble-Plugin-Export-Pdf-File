function(properties, context) {

    var INPUT = properties.html;

    let x = INPUT;
    let y = x.replace(/<[^>]+>/g, '\n').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

    let z = y;

    return { plain_text: z };
    

}