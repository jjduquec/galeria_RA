
var ruta_imagen='images/detalles/' //ruta donde almacenamos las imagenes
var num_archivos=0; //cantidad de archivos

 $(document).ready(()=>{ 
    //obtenemos el contenido de la url  
    const query=window.location.search;  
    //extraemos los parametros enviados 
    const parameters= new URLSearchParams(query); 
    //obtenemos el nombre de la carpeta a trabajar y el titulo de la pagina  
    const detalle=parameters.get('detalle'); 

    //organizamos la ruta de acceso  
    ruta_imagen=ruta_imagen.concat(detalle) 

    //vamos a contar la cantidad de imagenes que hay para la pagina de detalle  
    //con esto evitamos mostrar imagenes que no existan  
    var explorador= new ActiveXObject("Scripting.FileSystemObject");   
    var carpeta=explorador.GetFolder(ruta_imagen); 
    num_archivos=carpeta.files.count;  

    alert(num_archivos);




 })
   