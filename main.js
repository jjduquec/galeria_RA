const express=require('express'); 
const app=express(); 
const port=3000; 

app.use(express.static('json'));


app.listen(port,()=>{ 

    console.log("escuchando puerto 3000");


})