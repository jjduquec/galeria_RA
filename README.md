Estructura del aplicativo  

    Galeria:
        --apk: se encuentran todos los APKS (recursos de realidad aumentada)
        --assets:
            -css: principalmente se usan dos plantillas para los detalles(detail,detail2) , detail se usa
            cuando las imagenes capturadas se hicieron de manera vertical, mientras que detail2 se usa cuando 
            se capturaron de manera horizontal 
            -js: contiene todos los archivos javascript que la galeria requiere
                qrious.js: es la libreria que se usa para crear los codigos qr 

                resource.js : es el encargado de recibir el nombre del recurso, concatenar una url y crear
                un codigo qr, ADVERTENCIA: para el despliegue del aplicativo debe de modificarse la url y el puerto ,actualmente funciona como localhost en el puerto 3000 

                carousel.js: controla el carrusel de las imagenes en los detalles  

        --detalles: contiene paginas en html , cada una es la descripcion detallada de los recursos de realidad aumentada, cuenta con una plantilla para la exhibicion de nuevos recursos 

        --images: contiene todas las imagenes del sitio
            -catalogo_general: contiene las imagenes principales de los recursos que se muestran en el contenido principal de la pagina 
            -detalles: contiene las capturas tomadas para mostrar como funcionan los recursos de realidad aumentada , las imagenes se encuentran denominadas : img1,img2,img3... imgN.png
        
        --marcadores: contiene todas las imagenes que son usadas como marcadores para poder visualizar los recursos en ejecucion 

        --app.js: es el script principal para la ejecucion del aplicativo , ADVERTENCIA: debe de modificarse el puerto en el que esta corriendo  el aplicativo para el despliegue. 

Consideraciones: 
    -para agregar un recurso de realidad aumentada ,se recomienda primero agregar los archivos en sus correspondientes directorios , las carpetas y los archivos se deben de nombrar con algo corto pero que permita identificarlos , ejemplo :
                            Nombre del recurso: Biomapas del mundo  
                            directorios: biomas 
                            apk: biomas.apk 

    -para las imagenes que muestran el funcinamiento de los recursos, se recomienda  hacer enumeraciones de las imagenes para facilitar su implementacion con la plantilla, ejemplo:  
                            Nombre del recurso: Biomapas del mundo  
                            directorio: biomas 
                            imagenes:
                                img1.png
                                img2.png
                                im3.png
                                .
                                .
                                .
                                imN.png

    -para crear los detalles de un recurso, se recomienda usar la plantilla (plantilla.html) definida para esto, debe de modificarse index.html cada vez que se agrega un recurso.
