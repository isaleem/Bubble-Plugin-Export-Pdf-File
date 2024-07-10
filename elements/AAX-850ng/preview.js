function(instance, properties) {

      let el =$('<div><img src="//meta-q.cdn.bubble.io/f1714644764821x231857627158953860/PDF_file_icon.svg__1_-removebg-preview%20%281%29.png"></div>');  
       instance.canvas.append(el);
       el.css('background-color','white' );
       el.css('opacity','0.5');
       el.css('position' , 'absolute');
       el.css('height', properties.bubble.height);
       el.css('width' ,properties.bubble.width);

}