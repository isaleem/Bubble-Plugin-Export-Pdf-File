function(instance, properties) {

      let el =$('<div><img src="//meta-q.cdn.bubble.io/f1714645520766x854663782821511800/Text%20to%20pdf.png"></div>');  
       instance.canvas.append(el);
       el.css('background-color','white' );
       el.css('opacity','0.5');
       el.css('position' , 'absolute');
       el.css('height', properties.bubble.height);
       el.css('width' ,properties.bubble.width);

}