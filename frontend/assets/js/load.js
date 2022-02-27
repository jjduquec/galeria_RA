function cargar_contenido(){ 
    //ruta por defecto  
    var ruta_imagen='images/detalles/'

    //obtenemos el contenido de la url  
    const query=window.location.search;  
    //extraemos los parametros enviados 
    const parameters= new URLSearchParams(query); 
    //obtenemos el nombre de la carpeta a trabajar y el titulo de la pagina  
    const detalle=parameters.get('detalle');     
    const titulo=parameters.get('titulo'); 
    //modificamos la ruta de las imagenes 
    ruta_imagen=ruta_imagen.concat(detalle,"/","img1.png")
    
    //modificamos el titulo de la pestaña
    $('title').text(()=>{ 

        return titulo;
    });  

    //modificamos el titulo de la pagina 

    $('h1').text(()=>{ 

        return titulo;
    });  

    //modificamos el atributo src de la imagen
    $('#general').attr("src",ruta_imagen);




}


$(document).ready(()=>{ 
    cargar_contenido();



});