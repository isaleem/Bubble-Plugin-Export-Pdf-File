function(instance, properties) {

      let el =$('<div><img src="//meta-q.cdn.bubble.io/f1714647221456x988960683748123000/html%20file%20to%20pdf.png"></div>');  
       instance.canvas.append(el);
       el.css('background-color','white' );
       el.css('opacity','0.5');
       el.css('position' , 'absolute');
       el.css('height', properties.bubble.height);
       el.css('width' ,properties.bubble.width);

}