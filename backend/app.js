const express=require('express') 
const app=express() 
const port=3000  
const host='localhost'



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


app.listen(port,host)