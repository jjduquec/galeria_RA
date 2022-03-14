const express=require('express')  
const path=require('path')
const app=express() 
const port=3000  
const host='localhost'


//descarga de marcadores y apks  

app.get('/marcador/:nombre',(req,res)=>{ 
    const marcador=req.params.nombre;
    var archivo="";  
    archivo=archivo.concat(__dirname,"/marcadores","/",marcador,".jpg"); 
    res.download(archivo);

})

app.get('/apk/:nombre',(req,res)=>{ 
    const marcador=req.params.nombre;
    var archivo="";  
    archivo=archivo.concat(__dirname,"/apk","/",marcador,".apk"); 
    res.download(archivo);

})

//----------------servir paginas web  -----------------------

//index.html
app.get('',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});


//detalles 
app.use('/detalles',express.static('detalles'))


//configuracion de archivos estaticos  

//servir imagenes
app.use('/images',express.static('images')) 

//servir css,javascript y otros   
app.use('/assets',express.static('assets'))






//corre el aplicativo
app.listen(port,host)