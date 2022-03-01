
function marcador(recurso){

    url="localhost:3000/marcador/"
    url=url.concat(recurso) 

    window.open(window.location.replace=url,"_blank")

}



function apk(recurso){

    $('#qrcode').show();
    url="localhost:3000/apk/"
    url=url.concat(recurso) 

    //creamos codigo QR  
    new QRCode(document.getElementById("qrcode"), {
        text:url,
        width:150,
        height:150,  
        colorDark:"#000000",
        colorLight:"#ffffff"


    });



}



