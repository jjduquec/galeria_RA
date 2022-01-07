const express=require('express') 
const app=express() 
const port=3000 



app.get('/marcadores/:nombre',(req,res)=>{ 
    const marcador=req.params.nombre;
    var archivo="";  

    archivo=archivo.concat(__dirname,"/marcadores","/",marcador,".jpg"); 
    

    //const file=`${__dirname}/marcadores/biomas.jpg`; 
    res.download(archivo);

})



app.listen(port,()=>{


    console.log("puerto 3000 a la escucha")
})