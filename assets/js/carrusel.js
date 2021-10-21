$('.muestra').click((event)=>{
    //obtenemos el elemento que disparo el evento
    var img=event.target;   
    //obtenemos la url de la imagen 
    var url=$(img).attr('src');   
    //modificamos el atributo src de general para mostrar la imagen  seleccionada
    $('#general').attr('src',url);
    
    
    


});